import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import SmHeart from "../../assets/icons/sm-heart.svg";
import SmFillHeart from "../../assets/icons/heart.svg";
import DotMenu from "../../assets/icons/dot-menu-row.svg";
import { useState } from "react";
import Buttons from "./Buttons";

const UsNotePost = (props) => {
  const { post } = props;
  const [like, setLike] = useState(post.like);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const onChangeLike = () => {
    setLike(!like);
  };
  const onTouchMenu = () => {
    setIsButtonsVisible(true);
  };
  const onCloseButtons = () => {
    setIsButtonsVisible(false);
  };

  return (
    <>
      <Buttons type="post" isVisible={isButtonsVisible} onCloseButtons={onCloseButtons} />
      <Container>
        <ProfileImage src={post.image} />
        <MainView>
          <ContentText>{post.content}</ContentText>
          <ProfileSnapshotView>
            <ProfileView>
              <Nickname>{`${post.nickname} | ${post.date}`}</Nickname>
              <Button onPress={onChangeLike}>{like ? <SmFillHeart /> : <SmHeart />}</Button>
            </ProfileView>
            <Button onPress={onTouchMenu}>
              <DotMenu />
            </Button>
          </ProfileSnapshotView>
        </MainView>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex-direction: row;
  padding: 8px 24px 8px 12px;
  gap: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey6};
`;
const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
`;
const MainView = styled.View`
  flex: 1;
  gap: 8px;
`;
const ContentText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  color: ${colors.mainText};
`;
const ProfileSnapshotView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ProfileView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
const Nickname = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.grey2};
`;
const Button = styled.TouchableOpacity``;

export default UsNotePost;
