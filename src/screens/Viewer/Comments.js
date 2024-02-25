import Modal from "react-native-modal";
import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import BigX from "../../assets/icons/big-x.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import DotMenuCol from "../../assets/icons/dot-menu-col.svg";
import SmHeart from "../../assets/icons/sm-heart.svg";
import UpArrow from "../../assets/icons/up-arrow.svg";
import { useEffect, useState } from "react";
import { jsonConfig } from "../../api/axios";

const Comments = (props) => {
  const { isVisible, onCloseComments } = props;
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const onPressBtn = async () => {
    if (text.length === 0) return null;
    const submitData = { content: text };
    try {
      const response = await axios.post("http://13.125.109.43:8080/comment/novel/500", submitData);
      console.log(response);

      setText("");
    } catch (error) {
      // 에러 처리, 로깅하거나 사용자에게 메시지 표시 가능
      console.error("데이터 제출 중 오류 발생:", error);
    }
  };
  const onChangeText = (value) => {
    setText(value);
  };

  useEffect(() => {
    (async () => {
      const response = await jsonConfig("get", "/comment/chapter/500");
      setData(response.data.data.commentInfos);
    })();
  }, [setData]);

  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }} backdropOpacity={0.35}>
      <SafeAreaView style={{ flex: 1, paddingTop: "24px" }}>
        <Container>
          <Title>
            <CloseIcon onPress={onCloseComments}>
              <BigX />
            </CloseIcon>
            <TitleText>댓글</TitleText>
            <LayoutView />
          </Title>
          <ScrollContainer>
            <CommentList>
              {data &&
                data.map((comment, idx) => {
                  return (
                    <CommentView key={idx}>
                      <ProfileMenuView>
                        <ProfileView>
                          <ProfileImage src={comment.image} />
                          <Nickname>{comment.authorName}</Nickname>
                          <Date>{`${comment.createdAt[0]}. ${comment.createdAt[1]}. ${comment.createdAt[2]}`}</Date>
                        </ProfileView>
                        <MenuBtn>
                          <DotMenuCol fill={colors.grey2} />
                        </MenuBtn>
                      </ProfileMenuView>
                      <MainView>
                        <ContentText ellipsizeMode="tail" numberOfLines={5}>
                          {comment.content}
                        </ContentText>
                        <Like>
                          <LikeCountView>
                            <SmHeart />
                            <LikeCount>{comment.likeCnt}</LikeCount>
                          </LikeCountView>
                        </Like>
                      </MainView>
                    </CommentView>
                  );
                })}
            </CommentList>
          </ScrollContainer>
        </Container>
      </SafeAreaView>
      <CommentContainer>
        <CommentInputView>
          <CommentInput placeholder="댓글을 입력해 주세요." value={text} onChangeText={onChangeText}></CommentInput>
          <CommentBtn onPress={onPressBtn} style={text.length !== 0 && { backgroundColor: colors.primary }}>
            <UpArrow fill={text.length === 0 ? colors.grey3 : colors.white} />
          </CommentBtn>
        </CommentInputView>
      </CommentContainer>
    </Modal>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 69px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey5};
  border-bottom-width: 0px;
  border-radius: 16px 16px 0 0;
  over-flow: hidden;
`;
const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 48px;
`;
const CloseIcon = styled.TouchableOpacity``;
const TitleText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const LayoutView = styled.View`
  width: 32px;
  height: 32px;
`;
const ScrollContainer = styled.ScrollView`
  background-color: ${colors.white};
  border-top-width: 1px;
  border-top-color: ${colors.grey5};
`;
const CommentList = styled.View``;
const CommentView = styled.View`
  padding: 8px 24px 12px 24px;
  gap: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey6};
`;
const ProfileMenuView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ProfileView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const ProfileImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: ${colors.grey2};
`;
const Nickname = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Date = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.grey2};
`;
const MenuBtn = styled.TouchableOpacity``;
const MainView = styled.View`
  gap: 8px;
`;
const ContentText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  color: ${colors.mainText};
`;
const Like = styled.View`
  flex-direction: row;
`;
const LikeCountView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.grey6};
  padding: 2px 8px 2px 4px;
  border-radius: 4px;
`;
const LikeCount = styled.Text`
  color: ${colors.grey2};
`;
const CommentContainer = styled.View`
  padding: 8px;
  height: 56px;
  background-color: ${colors.white};
`;
const CommentInputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 8px 16px;
  border-radius: 24px;
  background-color: ${colors.grey6};
`;
const CommentInput = styled.TextInput`
  width: 80%;
`;
const CommentBtn = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 50px;
`;

export default Comments;
