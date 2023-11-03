import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Plus from "../../assets/icons/plus.svg";
import UpArrow from "../../assets/icons/up-arrow.svg";
import DotMenuCol from "../../assets/icons/dot-menu-col.svg";
import SmHeart from "../../assets/icons/sm-heart.svg";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const novelLines = [
  {
    nickname: "짱구",
    content:
      "구성원으로서 국정을 심의한다. 대통령은국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 국토와 자원은\n보호를 받으며, 국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다. 국가안전보장에 관련되는\n대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심 국교는 인정되지 아니하며,",
    like: 100,
  },
  {
    nickname: "홍길동",
    content:
      "한 번 숲 속으로 들어간 나무꾼이 있었습니다. 그의 이름은 톰이었고, 그는 모든 종류의 나무와 친구였습니다.\n어느 날, 숲에 이상한 일이 일어났어요. 나무들이 얘기를 하더니 갑자기 숲이 굉음처럼 울렸어요. 톰은 당황했지만, 나무들이 도와주기 시작했어요.\n모두 함께 숲의 문제를 해결했고, 톰은 그들의 우정을 더욱 소중히 여겼습니다. 그날 이후, 톰은 더 많은 모험을 찾아 떠나기로 했죠.",
    like: 71,
  },
];

const ViewerScreen = () => {
  const [write, setWrite] = useState(false);
  const [text, setText] = useState("");
  const [notConfirmLine, setNotConfirmLine] = useState(null);
  const onClickAddBtn = () => setWrite(true);
  const onChangeText = (value) => {
    if (value.length > 300) return null;
    setText(value);
  };
  const onSubmit = () => {
    if (text.length === 0) return null;

    setNotConfirmLine({
      nickname: "유리",
      content: text,
    });

    setWrite(false);
    setText("");
  };

  // api에서 폰트 사이즈 가져와야 함
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollContainer>
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} resetScrollToCoords={{ x: 0, y: 0 }}>
          <Container>
            <ContentList>
              {novelLines.map((nl, idx) => {
                const paragraphs = nl.content.split("\n");
                return (
                  <NovelLine key={idx}>
                    {paragraphs.map((paragraph, index) => (
                      <ContentText key={index}>{paragraph}</ContentText>
                    ))}
                  </NovelLine>
                );
              })}
              {notConfirmLine && (
                <ContentView>
                  <ProfileView>
                    <UserStateView>
                      <Nickname>{notConfirmLine.nickname}</Nickname>
                      <ConfirmLabel>
                        <ConfirmText>확인중</ConfirmText>
                      </ConfirmLabel>
                    </UserStateView>
                    <DotMenuCol fill={colors.grey2} />
                  </ProfileView>
                  <NovelLine>
                    {notConfirmLine.content.split("\n").map((paragraph, index) => (
                      <ContentText key={index}>{paragraph}</ContentText>
                    ))}
                  </NovelLine>
                  <NovelLineBtns>
                    <LikeBtn>
                      <SmHeart />
                      <LikeCounter>0</LikeCounter>
                    </LikeBtn>
                  </NovelLineBtns>
                </ContentView>
              )}
            </ContentList>
            {write ? (
              <InputView>
                <NovelLineInput
                  placeholder="300자 이내로 입력가능합니다."
                  onChangeText={onChangeText}
                  value={text}
                  multiline
                ></NovelLineInput>
                <TextActionsPanel>
                  <TextCounterView>
                    <TextCounter>{text.length}</TextCounter>
                    <TextLimit>/300자</TextLimit>
                  </TextCounterView>
                  <SubmitBtn style={text.length === 0 && { opacity: 0.25 }} onPress={onSubmit}>
                    <UpArrow fill={colors.white} />
                  </SubmitBtn>
                </TextActionsPanel>
              </InputView>
            ) : (
              <AddBtn onPress={onClickAddBtn}>
                <Plus fill={colors.grey2} />
                <AddBtnText>소설 작성하기</AddBtnText>
              </AddBtn>
            )}
          </Container>
        </KeyboardAwareScrollView>
      </ScrollContainer>
    </SafeAreaView>
  );
};

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  margin: 48px 0;
  padding: 24px;
  gap: 16px;
`;
const ContentList = styled.View`
  gap: 16px;
`;
const ContentView = styled.View`
  padding: 12px;
  border: 1px solid ${colors.grey5};
  border-radius: 8px;
`;
const ProfileView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;
const UserStateView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Nickname = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.medium};
  line-height: 24px;
  color: ${colors.mainText};
`;
const ConfirmLabel = styled.View`
  align-items: center;
  padding: 0 8px;
  border: 1px solid #749ff0;
  border-radius: 2px;
`;
const ConfirmText = styled.Text`
  color: #749ff0;
  font-size: 13px;
  line-height: 24px;
  font-weight: ${fontWeight.medium};
`;
const NovelLine = styled.View`
  margin-bottom: 8px;
  gap: 16px;
`;
const ContentText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  color: ${colors.mainText};
`;
const NovelLineBtns = styled.View`
  flex-direction: row;
`;
const LikeBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 2px 8px 2px 4px;
  border: 1px solid ${colors.grey4};
  border-radius: 8px;
`;
const LikeCounter = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 24px;
  color: ${colors.grey2};
`;
const InputView = styled.View`
  justify-content: space-between;
  padding: 12px 4px 12px 12px;
  height: 300px;
  background-color: ${colors.grey6};
  border-radius: 8px;
`;
const NovelLineInput = styled.TextInput`
  height: 248px;
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
`;
const TextActionsPanel = styled.View`
  margin-right: 8px;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
`;
const TextCounterView = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TextCounter = styled.Text`
  color: ${colors.grey2};
`;
const TextLimit = styled.Text`
  color: ${colors.grey3};
`;
const SubmitBtn = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  background-color: #749ff0;
  border-radius: 50px;
  color: ${colors.mainText};
`;
const AddBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 2px 3px 2px 3px;
  background-color: ${colors.grey6};
  border-radius: 8px;
`;
const AddBtnText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  color: ${colors.grey2};
`;

export default ViewerScreen;
