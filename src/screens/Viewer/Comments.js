import Modal from "react-native-modal";
import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import BigX from "../../assets/Icons/big-x.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import DotMenuCol from "../../assets/Icons/dot-menu-col.svg";
import SmHeart from "../../assets/Icons/sm-heart.svg";
import UpArrow from "../../assets/Icons/up-arrow.svg";
import { useState } from "react";

const comments = [
  {
    nickname: "닉네임이긴사람",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content:
      "네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.",
    date: "2023.11.08",
    likeCount: 100,
  },
  {
    nickname: "뮤",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content:
      "네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.",
    date: "2023.11.08",
    likeCount: 100,
  },
  {
    nickname: "시리",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content:
      "네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.",
    date: "2023.11.08",
    likeCount: 100,
  },
];

const Comments = (props) => {
  const { isVisible, onCloseComments } = props;
  const [text, setText] = useState("");
  const onPressBtn = () => {
    setText("");
  };
  const onChangeText = (value) => {
    setText(value);
  };

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
              {comments.map((comment, idx) => {
                return (
                  <CommentView key={idx}>
                    <ProfileMenuView>
                      <ProfileView>
                        <ProfileImage src={comment.image} />
                        <Nickname>{comment.nickname}</Nickname>
                        <Date>{comment.date}</Date>
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
                          <LikeCount>{comment.likeCount}</LikeCount>
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
