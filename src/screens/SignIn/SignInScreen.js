import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize } from "../../assets/font";

const SignInScreen = ({ navigation }) => {
  const onGoMainPage = () => {
    navigation.navigate("SignInStack", { screen: "Guest" });
  };
  const onGoSignUp = async () => {
    try {
      navigation.navigate("SignInStack", { screen: "WebView" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Icon source={require("../../assets/UsIcon.png")} />
      <Login onPress={onGoSignUp}>
        <LoginImage source={require("../../assets/SignIn/kakaologin.png")} />
      </Login>
      <Skip onPress={onGoMainPage}>
        <SkipText>건너뛰기</SkipText>
      </Skip>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
const Icon = styled.Image`
  width: 60px;
  height: 60px;
`;
const Login = styled.TouchableOpacity``;
const LoginImage = styled.Image`
  width: 310px;
  height: 40px;
`;
const Skip = styled.TouchableOpacity``;
const SkipText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: 500;
  line-height: 16px;
  color: ${colors.grey2};
  text-decoration: underline solid ${colors.grey2};
`;

export default SignInScreen;
