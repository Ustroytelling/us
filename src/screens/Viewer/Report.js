import Modal from "react-native-modal";
import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import BigX from "../../assets/Icons/big-x.svg";
import { useState } from "react";

const Report = (props) => {
  const { isVisible, onCloseReport, onOpenReportConfirm } = props;
  const reports = ["욕설/인신공격", "불법정보", "개인정보노출", "같은 내용 도배", "음란성/선정성", "기타 사유"];
  const [text, setText] = useState("");
  const [check, setCheck] = useState(0);
  const onChangeText = (value) => {
    setText(value);
  };
  const onPressResister = () => {
    onCloseReport();
    onOpenReportConfirm();
  };

  return (
    <>
      <Modal isVisible={isVisible} style={{ margin: 0, justifyContent: "flex-end" }} backdropOpacity={0.35}>
        <Container>
          <Title>
            <CloseIcon onPress={onCloseReport}>
              <BigX />
            </CloseIcon>
            <TitleText>신고하기</TitleText>
            <LayoutView />
          </Title>
          <ReportList>
            {reports.map((report, idx) => {
              return (
                <ReportView style={idx !== 5 && { borderBottomWidth: 1 }} onPress={() => setCheck(idx)} key={idx}>
                  <RadioButton>{check === idx && <Check />}</RadioButton>
                  <ReportText>{report}</ReportText>
                </ReportView>
              );
            })}
            <EtcInput
              placeholder="기타 사유를 작성해 주세요."
              onChangeText={onChangeText}
              value={text}
              textAlignVertical="top"
              multiline
            />
          </ReportList>
        </Container>
        <ResisterBtn onPress={onPressResister} activeOpacity={1}>
          <ResisterText>등록하기</ResisterText>
        </ResisterBtn>
      </Modal>
    </>
  );
};

const Container = styled.View`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey5};
  border-radius: 16px 16px 0 0;
  over-flow: hidden;
`;
const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
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
const ReportList = styled.View`
  padding: 0 16px;
  margin-bottom: 16px;
`;
const ReportView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  border-bottom-color: ${colors.grey6};
  gap: 8px;
`;
const RadioButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid ${colors.grey2};
`;
const Check = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${colors.primary};
  border-radius: 50px;
`;
const ReportText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 20px;
  color: ${colors.mainText};
`;
const EtcInput = styled.TextInput`
  margin-top: 8px;
  padding: 8px;
  height: 64px;
  border: 1px solid ${colors.grey3};
  border-radius: 8px;
`;
const ResisterBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  background-color: ${colors.white};
`;
const ResisterText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: 600;
  line-height: 18px;
  color: #333333;
`;

export default Report;
