import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Plus from "../../assets/icons/plus.svg";
import UpArrow from "../../assets/icons/up-arrow.svg";
import NovelLine from "./NovelLine";
import SmStar from "../../assets/icons/sm-star.svg";
import SmComment from "../../assets/icons/sm-comment.svg";
import SmArrow from "../../assets/icons/sm-arrow.svg";
import BigArrow from "../../assets/icons/big-arrow.svg";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Proposals from "./Proposals";
import StarRating from "./StarRating";
import BottomBar from "./BottomBar";
import Comments from "./Comments";
import UsNote from "./UsNote";
import LikeBtn from "./LikeBtn";
import { View } from "react-native";
import TopBar from "./TopBar";
import SaveModal from "./SaveModal";
import { jsonConfig } from "../../api/axios";

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
  const [data, setData] = useState(null);
  const [barVisible, setBarVisible] = useState(true);
  const [isLikeBtnVisible, setIsLikeBtnVisible] = useState(false);
  const [isProposalVisible, setIsProposalVisible] = useState(false);
  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [isUsNoteVisible, setIsUsNoteVisible] = useState(false);
  const [isSaveModalVisible, setIsSaveModalVisible] = useState(false);
  const [write, setWrite] = useState(false);
  const [text, setText] = useState("");
  const [myNovelLine, setMyNovelLine] = useState(null);
  const onClickAddBtn = () => setWrite(true);
  const onChangeText = async (value) => {
    if (value.length > 300) return null;
    setText(value);
  };
  const onSubmit = async () => {
    if (text.length === 0) return null;

    const submitData = { content: text };
    try {
      const response = await jsonConfig("post", "paragraph/500", submitData);
      console.log(response);

      setMyNovelLine({
        content: text,
      });

      setWrite(false);
      setText("");
      setIsSaveModalVisible(false);
    } catch (error) {
      // 에러 처리, 로깅하거나 사용자에게 메시지 표시 가능
      console.error("데이터 제출 중 오류 발생:", error);
    }
  };
  const onTouchScreen = () => setBarVisible(!barVisible);
  const onOpenProposals = () => setIsProposalVisible(true);
  const onCloseProposals = () => setIsProposalVisible(false);
  const onOpenRating = () => setIsRatingVisible(true);
  const onCloseRating = () => setIsRatingVisible(false);
  const onOpenComments = () => setIsCommentsVisible(true);
  const onCloseComments = () => setIsCommentsVisible(false);
  const onOpenUsNote = () => setIsUsNoteVisible(true);
  const onCloseUsNote = () => setIsUsNoteVisible(false);
  const onOpenLikeBtn = () => setIsLikeBtnVisible(true);
  const onCloseLikeBtn = () => setIsLikeBtnVisible(false);
  const onDeleteMyNovelLine = () => setMyNovelLine(null);
  const onOpenSaveModal = () => setIsSaveModalVisible(true);
  const onCloseSaveModal = () => setIsSaveModalVisible(false);
  const onGoBack = () => navigation.goBack();

  useEffect(() => {
    (async () => {
      const response = await jsonConfig("get", "chapter/500/500");
      console.log(response.data.data);
      setData(response.data.data);
      setMyNovelLine(response.data.data.myParagraph);
    })();
  }, [setData]);

  if (!data) return <></>;

  // api에서 폰트 사이즈 가져와야 함
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 1)" }}>
        <Proposals isVisible={isProposalVisible} onCloseProposals={onCloseProposals} />
        <Comments isVisible={isCommentsVisible} onCloseComments={onCloseComments} />
        <StarRating isVisible={isRatingVisible} onCloseRating={onCloseRating} />
        <UsNote isVisible={isUsNoteVisible} onCloseUsNote={onCloseUsNote} />
        <SaveModal isVisible={isSaveModalVisible} onCloseSaveModal={onCloseSaveModal} onSubmit={onSubmit} />
        {barVisible && <TopBar onGoBack={onGoBack} title={data.title} />}
        <ScrollContainer>
          <TouchScreen onPress={onTouchScreen} activeOpacity={1}>
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} resetScrollToCoords={{ x: 0, y: 0 }}>
              <MainContainer>
                <ContentList>
                  {data &&
                    data.selectedParagraphs.map((nl, idx) => {
                      const paragraphs = nl.content.split("\n");
                      return (
                        <View key={idx}>
                          <LikeBtn
                            likeState={data.liked}
                            isVisible={isLikeBtnVisible}
                            onCloseButtons={onCloseLikeBtn}
                          />
                          <NovelContent activeOpacity={1} onPress={onTouchScreen} onLongPress={onOpenLikeBtn}>
                            {paragraphs.map((paragraph, index) => (
                              <ContentText key={index}>{paragraph}</ContentText>
                            ))}
                          </NovelContent>
                        </View>
                      );
                    })}
                  {data.bestParagraph && (
                    <NovelLine
                      page={"viewer"}
                      best={true}
                      info={data.bestParagraph}
                      onOpenProposals={onOpenProposals}
                    />
                  )}
                  {myNovelLine && (
                    <NovelLine
                      page={"viewer"}
                      info={myNovelLine}
                      onOpenProposals={onOpenProposals}
                      onDeleteMyNovelLine={onDeleteMyNovelLine}
                      myNovelLine={true}
                    />
                  )}
                </ContentList>
                {myNovelLine ? (
                  <></>
                ) : write ? (
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
                      <SubmitBtn style={text.length === 0 && { opacity: 0.25 }} onPress={onOpenSaveModal}>
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
                  {comments &&
                    comments.map((co, idx) => {
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
                      <ReviewCounter>{data.score}</ReviewCounter>
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
                      <ReviewCounter>{data.commentCnt}</ReviewCounter>
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
