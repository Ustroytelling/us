import styled from "styled-components/native";
import Modal from "react-native-modal";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Warning from "../../assets/icons/warning.svg";

const NextEpisodeModal = (props) => {
  const { isVisible, onCloseEpisodeModal } = props;

  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }} backdropOpacity={0.25}>
      <Container>
        <Warning />
        <Explain>{`현재화를 마무리해주세요.
        생성이 불가합니다.`}</Explain>
        <Buttons>
          <Button onPress={onCloseEpisodeModal}>
            <ButtonText>확인</ButtonText>
          </Button>
        </Buttons>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  margin: 0 40px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background-color: ${colors.white};
`;
const Explain = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  color: ${colors.mainText};
`;
const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  height: 48px;
  gap: 8px;
`;
const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px 27px;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  background-color: ${colors.primary};
  box-sizing: border-box;
`;
const ButtonText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  color: ${colors.white};
`;

export default NextEpisodeModal;
