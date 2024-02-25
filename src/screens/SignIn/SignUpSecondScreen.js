import styled from "styled-components/native";
import { colors } from "../../assets/color";
import Arrow from "../../assets/icons/arrow black.svg";
import { fontSize } from "../../assets/font";
import { useState } from "react";

const SignUpSecondScreen = ({ navigation }) => {
  const [gender, setGender] = useState(0);
  const [isFocused, setIsFocused] = useState(-1);
  const onGoMainPage = () => {
    navigation.navigate("SignInStack", { screen: "AppMain" });
  };
  const handleBlur = () => {
    setIsFocused(-1);
  };

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
        <MainTitle>회원 정보 입력</MainTitle>
        <Desc>{`입력 정보를 기반으로
오늘의 소설을 알려드릴게요!`}</Desc>
        <SelectView>
          <SubTitle>성별</SubTitle>
          <GenderSelectView>
            <SelectBtn
              onPress={() => setGender(0)}
              style={!gender && { borderColor: colors.primary, backgroundColor: colors.primary }}
            >
              <SelectBtnText style={!gender && { color: colors.white }}>남자</SelectBtnText>
            </SelectBtn>
            <SelectBtn
              onPress={() => setGender(1)}
              style={gender && { borderColor: colors.primary, backgroundColor: colors.primary }}
            >
              <SelectBtnText style={gender && { color: colors.white }}>여자</SelectBtnText>
            </SelectBtn>
          </GenderSelectView>
        </SelectView>
        <BirthView>
          <SubTitle>생년월일</SubTitle>
          <InputView>
            <BirthInput
              placeholder="YYYY"
              placeholderTextColor={colors.grey5}
              onFocus={() => setIsFocused(0)}
              onBlur={() => setIsFocused(-1)}
              style={isFocused === 0 && { borderColor: colors.strong }}
            />
            <UnitText>년</UnitText>
            <BirthInput
              placeholder="MM"
              placeholderTextColor={colors.grey5}
              onFocus={() => setIsFocused(1)}
              onBlur={() => setIsFocused(-1)}
              style={isFocused === 1 && { borderColor: colors.strong }}
            />
            <UnitText>월</UnitText>
            <BirthInput
              placeholder="DD"
              placeholderTextColor={colors.grey5}
              onFocus={() => setIsFocused(2)}
              onBlur={() => setIsFocused(-1)}
              style={isFocused === 2 && { borderColor: colors.strong }}
            />
            <UnitText>일</UnitText>
          </InputView>
        </BirthView>
      </Main>
      <ButtonBox>
        <NextBtn onPress={onGoMainPage} style={{ backgroundColor: colors.primary }}>
          <BtnText style={{ color: colors.white }}>로그인</BtnText>
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
const SelectView = styled.View`
  margin-top: 32px;
  width: 100%;
  gap: 8px;
`;
const SubTitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  line-height: 17px;
  color: ${colors.mainText};
`;
const GenderSelectView = styled.View`
  flex-direction: row;
  gap: 16px;
`;
const SelectBtn = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 32px;
  border: 1px solid ${colors.strong};
  border-radius: 4px;
`;
const SelectBtnText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  line-height: 17px;
  color: ${colors.mainText};
`;
const BirthView = styled.View`
  margin-top: 24px;
  width: 100%;
  gap: 8px;
`;
const InputView = styled.View`
  flex-direction: row;
  height: 32px;
  align-items: flex-end;
`;
const BirthInput = styled.TextInput`
  flex: 1;
  border: 1px solid ${colors.grey5};
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
`;
const UnitText = styled.Text`
  padding: 0 4px 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: ${colors.mainText};
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

export default SignUpSecondScreen;
