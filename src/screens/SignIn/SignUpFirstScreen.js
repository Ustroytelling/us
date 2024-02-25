import styled from "styled-components/native";
import { colors } from "../../assets/color";
import Arrow from "../../assets/icons/arrow black.svg";
import { fontSize } from "../../assets/font";
import EmptyBox from "../../assets/icons/empty box.svg";
import { useEffect, useState } from "react";
import CheckedBox from "../../assets/icons/checked box.svg";

const SignUpFirstScreen = ({ navigation }) => {
  const [age, setAge] = useState(false);
  const [service, setService] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [complete, setComplete] = useState(false);
  const onGoNext = () => {
    if (!complete) return null;
    navigation.navigate("SignInStack", { screen: "SignUpSecond" });
  };
  const onhandleComplete = () => {
    if (complete) {
      setAge(false);
      setService(false);
      setPrivacy(false);
    } else {
      setAge(true);
      setService(true);
      setPrivacy(true);
    }
    setComplete(!complete);
  };

  useEffect(() => {
    if (age && service && privacy) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [age, service, privacy, setComplete]);

  return (
    <Container>
      <Title>
        <ReturnBtn style={{ transform: [{ rotateY: "180deg" }] }}>
          <Arrow />
        </ReturnBtn>
        <TitleText>회원가입</TitleText>
        <LayoutView />
      </Title>
      <Main>
        <MainTitle>약관 동의</MainTitle>
        <Desc>{`서비스 약관을 모두 확인 후
필수, 선택 항목을 동의 체크해 주세요.`}</Desc>
        <AgreeView>
          <AgreeSet onPress={() => onhandleComplete()}>
            {complete ? <CheckedBox /> : <EmptyBox />}
            <AgreeText>전체 동의</AgreeText>
            <Necessary>{`(필수)`}</Necessary>
          </AgreeSet>
          <Boundary />
          <AgreeSet onPress={() => setAge(!age)}>
            {age ? <CheckedBox /> : <EmptyBox />}
            <AgreeText>14세 이상 여부</AgreeText>
            <Necessary>{`(필수)`}</Necessary>
          </AgreeSet>
          <AgreeSet onPress={() => setService(!service)}>
            {service ? <CheckedBox /> : <EmptyBox />}
            <AgreeText>서비스 이용 약관</AgreeText>
            <Necessary>{`(필수)`}</Necessary>
          </AgreeSet>
          <AgreeSet onPress={() => setPrivacy(!privacy)}>
            {privacy ? <CheckedBox /> : <EmptyBox />}
            <AgreeText>개인정보 수집 및 이용 동의</AgreeText>
            <Necessary>{`(필수)`}</Necessary>
          </AgreeSet>
        </AgreeView>
      </Main>
      <ButtonBox>
        <NextBtn onPress={onGoNext} style={complete && { backgroundColor: colors.primary }}>
          <BtnText style={complete && { color: colors.white }}>다음</BtnText>
        </NextBtn>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: start;
  background-color: ${colors.white};
`;
const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 46px;
`;
const ReturnBtn = styled.TouchableOpacity``;
const LayoutView = styled.View`
  width: 32px;
  height: 32px;
`;
const TitleText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: 700;
  line-height: 18px;
  color: ${colors.mainText};
`;
const Main = styled.View`
  flex: 1;
  align-items: flex-start;
  gap: 16px;
  margin-top: 40px;
  padding: 0 16px;
`;
const MainTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: ${colors.mainText};
`;
const Desc = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: ${colors.grey2};
`;
const AgreeView = styled.View`
  margin-top: 48px;
  width: 100%;
`;
const AgreeSet = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;
const AgreeText = styled.Text`
  padding: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${colors.mainText};
`;
const Boundary = styled.View`
  margin: 12px -2px;
  height: 1px;
  background-color: ${colors.grey5};
`;
const Necessary = styled.Text`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  color: ${colors.grey2};
`;
const ButtonBox = styled.View`
  padding: 92px 24px 16px;
`;
const NextBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: ${colors.grey5};
`;
const BtnText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: ${colors.mainText};
`;

export default SignUpFirstScreen;
