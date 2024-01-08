import Modal from "react-native-modal";
import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import BigX from "../../assets/icons/big-x.svg";
import Arrow from "../../assets/icons/angle arrow left.svg";
import SmHeart from "../../assets/icons/sm-heart.svg";
import { useState } from "react";
import Warning from "../../assets/icons/warning.svg";
import { SectionListComponent } from "react-native";

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

const CommentsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPressConfirm = () => {
    setModalVisible(false);
  };
  const onPressCancel = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <TitleView>
        <ReturnBtn onPress={() => navigation.goBack()}>
          <Arrow />
        </ReturnBtn>
        <Title>
          <TitleText>댓글내역</TitleText>
        </Title>
        <LayoutView />
      </TitleView>
      <ScrollContainer>
        <CommentList>
          {comments.map((comment, idx) => {
            return (
              <>
                <Modal isVisible={modalVisible} style={{ margin: 0 }} backdropOpacity={0.25}>
                  <ModalContainer>
                    <Warning />
                    <ModalText>
                      <Explain>댓글을 삭제하시겠습니까?</Explain>
                      <Description>삭제 댓글은 복구할 수 없습니다.</Description>
                    </ModalText>
                    <Buttons>
                      <ModalBtn onPress={onPressCancel}>
                        <ModalBtnText>취소</ModalBtnText>
                      </ModalBtn>
                      <ModalBtn
                        style={{ backgroundColor: colors.primary, borderColor: colors.primary }}
                        onPress={onPressConfirm}
                      >
                        <ModalBtnText style={{ color: colors.white }}>확인</ModalBtnText>
                      </ModalBtn>
                    </Buttons>
                  </ModalContainer>
                </Modal>
                <CommentView key={idx}>
                  <ProfileMenuView>
                    <ProfileView>
                      <ProfileImage src={comment.image} />
                      <Nickname>{comment.nickname}</Nickname>
                      <Date>{comment.date}</Date>
                    </ProfileView>
                    <MenuBtn onPress={() => setModalVisible(true)}>
                      <BigX fill={colors.grey2} />
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
              </>
            );
          })}
        </CommentList>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;
const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
`;
const ReturnBtn = styled.TouchableOpacity`
  width: 24px;
`;
const Title = styled.View`
  height: 32px;
  align-items: center;
  justify-content: center;
`;
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
const ModalContainer = styled.View`
  margin: 0 40px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background-color: ${colors.white};
`;
const ModalText = styled.View`
  align-items: center;
  gap: 4px;
`;
const Explain = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  color: ${colors.mainText};
`;
const Description = styled.Text`
  font-size: 10px;
  font-weight: ${fontWeight.medium};
  color: ${colors.grey2};
`;
const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  height: 48px;
  gap: 8px;
`;
const ModalBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px 27px;
  border: 1px solid ${colors.strong};
  border-radius: 4px;
  box-sizing: border-box;
`;
const ModalBtnText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  color: ${colors.strong};
`;

export default CommentsScreen;
