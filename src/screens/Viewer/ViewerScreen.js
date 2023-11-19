import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Plus from "../../assets/Icons/plus.svg";
import UpArrow from "../../assets/Icons/up-arrow.svg";
import NovelLine from "./NovelLine";
import SmStar from "../../assets/Icons/sm-star.svg";
import SmComment from "../../assets/Icons/sm-comment.svg";
import SmArrow from "../../assets/Icons/sm-arrow.svg";
import BigArrow from "../../assets/Icons/big-arrow.svg";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Buttons from "./Buttons";
import Proposals from "./Proposals";
import BigX from "../../assets/Icons/big-x.svg";
import StarRating from "./StarRating";
import BottomBar from "./BottomBar";
import Comments from "./Comments";
import Confirm from "./Confirm";
import UsNote from "./UsNote";
import LikeBtn from "./LikeBtn";
import { View } from "react-native";

const novelLines = [
  {
    nickname: "짱구",
    content:
      "구성원으로서 국정을 심의한다. 대통령은국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 국토와 자원은\n보호를 받으며, 국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다. 국가안전보장에 관련되는\n대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심 국교는 인정되지 아니하며,",
    like: true,
  },
  {
    nickname: "홍길동",
    content:
      "한 번 숲 속으로 들어간 나무꾼이 있었습니다. 그의 이름은 톰이었고, 그는 모든 종류의 나무와 친구였습니다.\n어느 날, 숲에 이상한 일이 일어났어요. 나무들이 얘기를 하더니 갑자기 숲이 굉음처럼 울렸어요. 톰은 당황했지만, 나무들이 도와주기 시작했어요.\n모두 함께 숲의 문제를 해결했고, 톰은 그들의 우정을 더욱 소중히 여겼습니다. 그날 이후, 톰은 더 많은 모험을 찾아 떠나기로 했죠.",
    like: false,
  },
];

const comments = [
  {
    nickname: "맹구",
    content: "한 번 숲 속으로 들어간 나무꾼이 있",
  },
  {
    nickname: "홍길동",
    content:
      "한 번 숲 속으로 들어간 나무꾼이 있나무꾼이 있었습니다. 그의 이름은 톰이었었습니다. 그의 이름은 톰이었고, 그는 모든 종류의 나무와 친구였습니다.",
  },
  {
    nickname: "홍길동",
    content:
      "한 번 숲 속으로 들어간 나무꾼이 있나무꾼이 있었습니다. 그의 이름은 톰이었었습니다. 그의 이름은 톰이었고, 그는 모든 종류의 나무와 친구였습니다.",
  },
];

const ViewerScreen = ({ navigation }) => {
  const [barVisible, setBarVisible] = useState(true);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const [isLikeBtnVisible, setIsLikeBtnVisible] = useState(false);
  const [isProposalVisible, setIsProposalVisible] = useState(false);
  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isUsNoteVisible, setIsUsNoteVisible] = useState(false);
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
  const onTouchScreen = () => setBarVisible(!barVisible);
  const onTouchMenu = () => setIsButtonsVisible(true);
  const onCloseButtons = () => setIsButtonsVisible(false);
  const onOpenProposals = () => setIsProposalVisible(true);
  const onCloseProposals = () => setIsProposalVisible(false);
  const onOpenRating = () => setIsRatingVisible(true);
  const onCloseRating = () => setIsRatingVisible(false);
  const onOpenComments = () => setIsCommentsVisible(true);
  const onCloseComments = () => setIsCommentsVisible(false);
  const onOpenConfirm = () => setIsConfirmVisible(true);
  const onCloseConfirm = () => setIsConfirmVisible(false);
  const onOpenUsNote = () => setIsUsNoteVisible(true);
  const onCloseUsNote = () => setIsUsNoteVisible(false);
  const onOpenLikeBtn = () => setIsLikeBtnVisible(true);
  const onCloseLikeBtn = () => setIsLikeBtnVisible(false);

  // api에서 폰트 사이즈 가져와야 함
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 1)" }}>
        <Proposals isVisible={isProposalVisible} onCloseProposals={onCloseProposals} />
        <Comments isVisible={isCommentsVisible} onCloseComments={onCloseComments} />
        <Buttons isVisible={isButtonsVisible} onCloseButtons={onCloseButtons} onOpenConfirm={onOpenConfirm} />
        <StarRating isVisible={isRatingVisible} onCloseRating={onCloseRating} />
        <Confirm isVisible={isConfirmVisible} onCloseConfirm={onCloseConfirm} />
        <UsNote isVisible={isUsNoteVisible} onCloseUsNote={onCloseUsNote} />
        {barVisible && (
          <TopBar>
            <CloseButton onPress={() => navigation.goBack()}>
              <BigX />
            </CloseButton>
            <TitleText>주술회전 1화</TitleText>
          </TopBar>
        )}
        <ScrollContainer>
          <TouchScreen onPress={onTouchScreen} activeOpacity={1}>
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} resetScrollToCoords={{ x: 0, y: 0 }}>
              <MainContainer>
                <ContentList>
                  {novelLines.map((nl, idx) => {
                    const paragraphs = nl.content.split("\n");
                    return (
                      <View key={idx}>
                        <LikeBtn likeState={nl.like} isVisible={isLikeBtnVisible} onCloseButtons={onCloseLikeBtn} />
                        <NovelContent activeOpacity={1} onPress={onTouchScreen} onLongPress={onOpenLikeBtn}>
                          {paragraphs.map((paragraph, index) => (
                            <ContentText key={index}>{paragraph}</ContentText>
                          ))}
                        </NovelContent>
                      </View>
                    );
                  })}
                  {notConfirmLine && (
                    <NovelLine
                      page={"viewer"}
                      info={notConfirmLine}
                      onTouchMenu={onTouchMenu}
                      onOpenProposals={onOpenProposals}
                    />
                  )}
                </ContentList>
                {write ? (
                  <InputView>
                    <NovelLineInput
                      placeholder="300자 이내로 입력가능합니다."
                      onChangeText={onChangeText}
                      value={text}
                      textAlignVertical="top"
                      multiline
                    />
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
              </MainContainer>
              <SubContainer>
                <BestCommentList>
                  {comments.map((co, idx) => {
                    return (
                      <CommentView key={idx} onPress={onOpenComments}>
                        <TopView>
                          <BestLabel style={idx === 0 && { backgroundColor: colors.red }}>
                            <BestLabelText>BEST</BestLabelText>
                          </BestLabel>
                          <CommentNickname>{co.nickname}</CommentNickname>
                        </TopView>
                        <CommentText ellipsizeMode="tail" numberOfLines={2}>
                          {co.content}
                        </CommentText>
                      </CommentView>
                    );
                  })}
                </BestCommentList>
                <Horizon />
                <Reviews>
                  <ReviewView onPress={onOpenRating}>
                    <ReviewCounterView>
                      <SmStar />
                      <ReviewCounter>4.5</ReviewCounter>
                    </ReviewCounterView>
                    <ShortcutBtn>
                      <ShortcutText>별점</ShortcutText>
                      <ArrowIcon>
                        <SmArrow />
                      </ArrowIcon>
                    </ShortcutBtn>
                  </ReviewView>
                  <ReviewView onPress={onOpenComments}>
                    <ReviewCounterView>
                      <SmComment />
                      <ReviewCounter>21</ReviewCounter>
                    </ReviewCounterView>
                    <ShortcutBtn>
                      <ShortcutText>댓글</ShortcutText>
                      <ArrowIcon>
                        <SmArrow />
                      </ArrowIcon>
                    </ShortcutBtn>
                  </ReviewView>
                </Reviews>
                <Horizon />
                <NextEpisode>
                  <ImageView>
                    <NextEpisodeImage src="https://upload.wikimedia.org/wikipedia/ko/c/c4/%EC%A3%BC%EC%88%A0%ED%9A%8C%EC%A0%84_1%EA%B6%8C_%ED%91%9C%EC%A7%80.jpg" />
                  </ImageView>
                  <NextEpisodeTitle>가나다라마바사파하아댜죠 2화</NextEpisodeTitle>
                  <ArrowIcon>
                    <BigArrow />
                  </ArrowIcon>
                </NextEpisode>
              </SubContainer>
            </KeyboardAwareScrollView>
          </TouchScreen>
        </ScrollContainer>
        {barVisible && <BottomBar onOpenComments={onOpenComments} onOpenUsNote={onOpenUsNote} />}
      </SafeAreaView>
    </>
  );
};

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;
const TouchScreen = styled.TouchableOpacity`
  flex: 1;
`;
const TopBar = styled.View`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 0 8px;
  height: 48px;
  border-bottom-color: ${colors.grey6};
  border-bottom-width: 1px;
`;
const CloseButton = styled.TouchableOpacity``;
const TitleText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const MainContainer = styled.View`
  flex: 1;
  gap: 16px;
  margin-bottom: 40px;
  padding: 24px;
`;
const ContentList = styled.View`
  gap: 16px;
`;
const NovelContent = styled.TouchableOpacity`
  margin-bottom: 8px;
  gap: 16px;
`;
const ContentText = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  color: ${colors.mainText};
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
  font-size: ${fontSize.body2};
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
  background-color: ${colors.primary};
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
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.regular};
  color: ${colors.grey2};
`;
const SubContainer = styled.View`
  padding: 24px;
`;
const BestCommentList = styled.View`
  gap: 16px;
`;
const CommentView = styled.TouchableOpacity`
  padding: 5px 14px 5px 8px;
  gap: 8px;
  border: 1px solid ${colors.grey5};
  border-radius: 8px;
`;
const TopView = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const BestLabel = styled.View`
  padding: 0 3.5px;
  width: 40px;
  height: 20px;
  background-color: ${colors.strong};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
const BestLabelText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.bold};
  color: ${colors.white};
`;
const CommentNickname = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  color: ${colors.mainText};
`;
const CommentText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 16px;
  color: ${colors.mainText};
`;
const Horizon = styled.View`
  margin: 16px 12px;
  height: 1px;
  background-color: ${colors.grey6};
`;
const Reviews = styled.View`
  gap: 16px;
`;
const ReviewView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ReviewCounterView = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ReviewCounter = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  color: ${colors.mainText};
`;
const ShortcutBtn = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ShortcutText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  color: ${colors.mainText};
`;
const ArrowIcon = styled.View`
  transform: scaleX(-1);
`;
const NextEpisode = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 4px;
  height: 80px;
  border: 1px solid ${colors.grey5};
  border-radius: 8px;
  overflow: hidden;
`;
const ImageView = styled.View`
  width: 64px;
  border-radius: 4px;
  overflow: hidden;
`;
const NextEpisodeImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const NextEpisodeTitle = styled.Text``;

export default ViewerScreen;
