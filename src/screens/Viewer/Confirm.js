import styled from "styled-components/native";
import Modal from "react-native-modal";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Warning from "../../assets/icons/warning.svg";

const Confirm = (props) => {
  const { isVisible, onCloseConfirm } = props;

  const onPressCancel = () => {
    onCloseConfirm();
  };
  const onPressConfirm = () => {
    onCloseConfirm();
  };

  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }} backdropOpacity={0.25}>
      <Container>
        <Warning />
        <Explain>확정 하시겠습니까?</Explain>
        <Buttons>
          <Button onPress={onPressCancel}>
            <ButtonText>취소</ButtonText>
          </Button>
          <Button style={{ backgroundColor: colors.primary }} onPress={onPressConfirm}>
            <ButtonText style={{ color: colors.white }}>확인</ButtonText>
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
  box-sizing: border-box;
`;
const ButtonText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  color: ${colors.primary};
`;

export default Confirm;
