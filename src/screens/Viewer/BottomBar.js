import styled from "styled-components/native";
import { colors } from "../../assets/color";
import Document from "../../assets/Icons/document.svg";
import BigComment from "../../assets/Icons/big-comment.svg";
import Text from "../../assets/Icons/Text.svg";
import PreviousArrow from "../../assets/Icons/previous-arrow.svg";
import NextArrow from "../../assets/Icons/next-arrow.svg";
import { useState } from "react";
import TextSetting from "./TextSetting";

const BottomBar = (props) => {
  const { onOpenComments, onOpenUsNote } = props;
  const [isTextSettingVisible, setIsTextSettingVisible] = useState(false);
  const onOpenTestSetting = () => {
    setIsTextSettingVisible(true);
  };
  const onCloseTestSetting = () => {
    setIsTextSettingVisible(false);
  };

  return (
    <>
      {isTextSettingVisible && <TextSetting isVisible={isTextSettingVisible} onCloseTestSetting={onCloseTestSetting} />}
      <Container>
        <SettingView>
          <CommentIcon onPress={onOpenComments}>
            <BigComment />
          </CommentIcon>
          <UsNoteIcon onPress={onOpenUsNote}>
            <Document />
          </UsNoteIcon>
          <TextSettingIcon onPress={onOpenTestSetting}>
            <Text />
          </TextSettingIcon>
        </SettingView>
        <MoveEpisodeView>
          <EpisodeArrow>
            <PreviousArrow />
          </EpisodeArrow>
          <EpisodeArrow>
            <NextArrow />
          </EpisodeArrow>
        </MoveEpisodeView>
      </Container>
    </>
  );
};

const Container = styled.View`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px 0 24px;
  border-top-color: ${colors.grey6};
  border-top-width: 1px;
`;
const SettingView = styled.View`
  flex-direction: row;
  gap: 32px;
`;
const CommentIcon = styled.TouchableOpacity``;
const UsNoteIcon = styled.TouchableOpacity``;
const TextSettingIcon = styled.TouchableOpacity``;
const MoveEpisodeView = styled.View`
  flex-direction: row;
  gap: 16px;
`;
const EpisodeArrow = styled.TouchableOpacity``;

export default BottomBar;
