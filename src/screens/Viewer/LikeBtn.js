import styled from "styled-components/native";
import Modal from "react-native-modal";
import { colors } from "../../assets/color";
import { fontWeight } from "../../assets/font";
import { SafeAreaView } from "react-native-safe-area-context";
import Report from "./Report";
import ReportConfirm from "./ReportConfirm";
import { useState } from "react";

const LikeBtn = (props) => {
  const { likeState, isVisible, onCloseButtons } = props;
  const [isReportVisible, setIsReportVisible] = useState(false);
  const [isReportConfirmVisible, setIsReportConfirmVisible] = useState(false);
  const [like, setLike] = useState(likeState);
  const onOpenReport = () => setIsReportVisible(true);
  const onCloseReport = () => setIsReportVisible(false);
  const onOpenReportConfirm = () => setIsReportConfirmVisible(true);
  const onCloseReportConfirm = () => setIsReportConfirmVisible(false);
  const onPressReport = () => {
    onCloseButtons();
    onOpenReport();
  };
  const onChangeLike = () => {
    onCloseButtons();
    setLike(!like);
  };

  return (
    <>
      {isReportVisible && (
        <Report isVisible={isReportVisible} onCloseReport={onCloseReport} onOpenReportConfirm={onOpenReportConfirm} />
      )}
      {isReportConfirmVisible && (
        <ReportConfirm isVisible={isReportConfirmVisible} onCloseReportConfirm={onCloseReportConfirm} />
      )}
      <Modal isVisible={isVisible} backdropOpacity={0} style={{ margin: 0 }}>
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end", marginBottom: 16 }}>
          <Btns>
            <BtnView onPress={onChangeLike}>
              <BtnText>{like ? "좋아요" : "좋아요 취소"}</BtnText>
            </BtnView>
            <BtnView onPress={onPressReport}>
              <BtnText>신고하기</BtnText>
            </BtnView>
          </Btns>
          <CancelBtn onPress={onCloseButtons} activeOpacity={0.8}>
            <CancelText>Cancel</CancelText>
          </CancelBtn>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const Btns = styled.View`
  gap: 0.5px;
  margin: 0 16px 8px;
  border-radius: 14px;
  background-color: ${colors.grey3};
  overflow: hidden;
`;
const BtnView = styled.TouchableOpacity`
  align-items: center;
  padding: 17px 0;
  width: 100%;
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

export default LikeBtn;
