import styled from "styled-components/native";
import Modal from "react-native-modal";
import { colors } from "../../../assets/color";
import { fontWeight } from "../../../assets/font";
import { SafeAreaView } from "react-native-safe-area-context";

const Buttons = (props) => {
  const { isVisible, onCloseButtons } = props;
  return (
    <Modal isVisible={isVisible} backdropOpacity={0} style={{ margin: 0 }}>
      <SafeAreaView style={{ flex: 1, justifyContent: "flex-end", marginBottom: 16 }}>
        <Btns>
          <BtnView>
            <BtnText>확정하기</BtnText>
          </BtnView>
          <BtnView>
            <BtnText>복사하기</BtnText>
          </BtnView>
          <BtnView>
            <BtnText>신고하기</BtnText>
          </BtnView>
        </Btns>
        <CancelBtn onPress={onCloseButtons} activeOpacity={0.8}>
          <CancelText>Cancel</CancelText>
        </CancelBtn>
      </SafeAreaView>
    </Modal>
  );
};

const Btns = styled.View`
  gap: 0.5px;
  margin: 0 16px 8px;
  border-radius: 14px;
  background-color: ${colors.grey3};
  overflow: hidden;
`;
const BtnView = styled.View`
  align-items: center;
  padding: 17px 0;
  background-color: ${colors.grey6};
`;
const BtnText = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 17px;
  line-height: 22px;
  font-weight: ${fontWeight.medium};
  color: ${colors.blue};
`;
const CancelBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  height: 56px;
  border-radius: 14px;
  background-color: ${colors.grey6};
`;
const CancelText = styled.Text`
  font-size: 17px;
  line-height: 22px;
  font-weight: ${fontWeight.medium};
  color: ${colors.blue};
`;

export default Buttons;
