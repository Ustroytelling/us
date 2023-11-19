import Modal from "react-native-modal";
import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import NovelLine from "./NovelLine";
import BigX from "../../assets/icons/big-x.svg";
import Buttons from "./Buttons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const proposals = [
  {
    nickname: "짱아",
    content:
      "개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 하네 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 하네 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 하네 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 하네 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 하네",
  },
  {
    nickname: "흰둥이",
    content: "땀을 뻘뻘 흘리면서 그렇지만 뚠뚠",
  },
];

const Proposals = (props) => {
  const { isVisible, onCloseProposals } = props;
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const onTouchMenu = () => {
    setIsButtonsVisible(true);
  };
  const onCloseButtons = () => {
    setIsButtonsVisible(false);
  };

  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }} backdropOpacity={0.35}>
      <SafeAreaView style={{ flex: 1, paddingTop: "24px" }}>
        <Container>
          <Title>
            <CloseIcon onPress={onCloseProposals}>
              <BigX />
            </CloseIcon>
            <TitleText>제안</TitleText>
            <LayoutView />
          </Title>
          <ScrollContainer>
            <ProposalList>
              {proposals.map((proposal, idx) => {
                return (
                  <NovelLineView key={idx}>
                    <Buttons isVisible={isButtonsVisible} onCloseButtons={onCloseButtons} />
                    <NovelLine info={proposal} onTouchMenu={onTouchMenu} />
                  </NovelLineView>
                );
              })}
              {proposals.map((proposal, idx) => {
                return (
                  <NovelLineView key={idx}>
                    <Buttons isVisible={isButtonsVisible} onCloseButtons={onCloseButtons} />
                    <NovelLine info={proposal} onTouchMenu={onTouchMenu} />
                  </NovelLineView>
                );
              })}
              {proposals.map((proposal, idx) => {
                return (
                  <NovelLineView key={idx}>
                    <Buttons isVisible={isButtonsVisible} onCloseButtons={onCloseButtons} />
                    <NovelLine info={proposal} onTouchMenu={onTouchMenu} />
                  </NovelLineView>
                );
              })}
              {proposals.map((proposal, idx) => {
                return (
                  <NovelLineView key={idx}>
                    <Buttons isVisible={isButtonsVisible} onCloseButtons={onCloseButtons} />
                    <NovelLine info={proposal} onTouchMenu={onTouchMenu} />
                  </NovelLineView>
                );
              })}
              {proposals.map((proposal, idx) => {
                return (
                  <NovelLineView key={idx}>
                    <Buttons isVisible={isButtonsVisible} onCloseButtons={onCloseButtons} />
                    <NovelLine info={proposal} onTouchMenu={onTouchMenu} />
                  </NovelLineView>
                );
              })}
            </ProposalList>
          </ScrollContainer>
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

export default Proposals;
