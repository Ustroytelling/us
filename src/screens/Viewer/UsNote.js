import Modal from "react-native-modal";
import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import BigX from "../../assets/icons/big-x.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import UsNoteTab from "../../navigations/UsNoteTab";

const UsNote = (props) => {
  const { isVisible, onCloseUsNote } = props;

  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }} backdropOpacity={0.35}>
      <SafeAreaView style={{ flex: 1, paddingTop: "24px" }}>
        <Container>
          <Title>
            <CloseIcon onPress={onCloseUsNote}>
              <BigX />
            </CloseIcon>
            <TitleText>우스노트</TitleText>
            <LayoutView />
          </Title>
          <UsNoteTab />
        </Container>
      </SafeAreaView>
    </Modal>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 69px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey5};
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
const ScrollContainer = styled.ScrollView``;
const NovelLineView = styled.View``;
const ProposalList = styled.View`
  flex: 1;
  padding: 24px;
  gap: 16px;
`;

export default UsNote;
