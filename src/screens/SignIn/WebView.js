import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jsonConfig } from "../../api/axios";
import { REST_API_KEY, REDIRECT_URI } from "@env";

const deviceWidth = Dimensions.get("window").width;
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const WebViewScreen = ({ navigation }) => {
  const getCode = async (target) => {
    const exp = "code=";
    const condition = target.indexOf(exp);
    console.log(target);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      console.log("code = ", requestCode);
      requestToken(requestCode);
    }
  };

  const requestToken = async (code) => {
    try {
      const body = {
        oauthProvider: "KAKAO",
        code,
        state: "",
      };
      const response = await jsonConfig("post", "oauth2/login", body);
      const accessToken = response.headers["authorization"];
      const refreshToken = response.headers["authorization-refresh"];
      const memberId = response.data.memberId;

      if (accessToken) {
        // AsyncStorage에 accessToken 저장
        await AsyncStorage.setItem("accessToken", accessToken);
      }

      if (refreshToken) {
        // AsyncStorage에 refreshToken 저장
        await AsyncStorage.setItem("refreshToken", refreshToken);
      }

      if (memberId) {
        await AsyncStorage.setItem("memberId", `${memberId}`);
      }
      navigation.navigate("SignInStack", { screen: "AppMain" });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <WebView
        style={{ flex: 1, width: deviceWidth }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const data = event.nativeEvent.url;
          getCode(data);
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background-color: white;
`;

export default WebViewScreen;
