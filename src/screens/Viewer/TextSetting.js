import Modal from "react-native-modal";
import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import BigX from "../../assets/icons/big-x.svg";
import Text from "../../assets/icons/text.svg";
import Rotate from "../../assets/icons/rotate.svg";
import Minus from "../../assets/icons/minus.svg";
import Plus from "../../assets/icons/plus.svg";
import { useState } from "react";

const TextSetting = (props) => {
  const { isVisible, onCloseTestSetting } = props;
  const [textSize, setTextSize] = useState(15);
  const [lineSpacing, setLineSpacing] = useState(16);
  const onDecreaseTextSize = () => setTextSize(textSize - 1);
  const onIncreaseTextSize = () => setTextSize(textSize + 1);
  const onDecreaseLineSpacing = () => setLineSpacing(lineSpacing - 1);
  const onIncreaseLineSpacing = () => setLineSpacing(lineSpacing + 1);

  return (
    <Modal isVisible={isVisible} style={{ margin: 0, justifyContent: "flex-end" }} backdropOpacity={0.35}>
      <Container>
        <Title>
          <CloseIcon onPress={onCloseTestSetting}>
            <BigX />
          </CloseIcon>
          <Text />
          <LayoutView />
        </Title>
        <SettingView>
          <Viewing>
            <SettingText>열람 방식</SettingText>
            <ViewingType>
              <ViewingText>스크롤</ViewingText>
            </ViewingType>
          </Viewing>
          <Setting>
            <SettingText>글자 크기</SettingText>
            <SizeControll>
              <ControllBtn onPress={onDecreaseTextSize}>
                <Minus />
              </ControllBtn>
              <Size>{textSize}</Size>
              <ControllBtn onPress={onIncreaseTextSize}>
                <Plus />
              </ControllBtn>
            </SizeControll>
          </Setting>
          <Setting>
            <SettingText>문단 간격</SettingText>
            <SizeControll>
              <ControllBtn onPress={onDecreaseLineSpacing}>
                <Minus />
              </ControllBtn>
              <Size>{lineSpacing}</Size>
              <ControllBtn onPress={onIncreaseLineSpacing}>
                <Plus />
              </ControllBtn>
            </SizeControll>
          </Setting>
          <InitView>
            <InitButton>
              <InitText>설정 초기화</InitText>
              <Rotate />
            </InitButton>
          </InitView>
        </SettingView>
      </Container>
    </Modal>
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
  padding: 0 8px;
  height: 48px;
`;
const CloseIcon = styled.TouchableOpacity``;
const LayoutView = styled.View`
  width: 32px;
  height: 32px;
`;
const SettingView = styled.View``;
const Viewing = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 32px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey5};
`;
const ViewingType = styled.View`
  padding: 4px 8px;
`;
const ViewingText = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Setting = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px 4px 32px;
`;
const SettingText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
const SizeControll = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  width: 110px;
`;
const ControllBtn = styled.TouchableOpacity`
  border: 1px solid ${colors.grey5};
  border-radius: 50px;
`;
const Size = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
const InitView = styled.View`
  height: 56px;
  align-items: center;
  justify-content: center;
`;
const InitButton = styled.TouchableOpacity`
  flex-direction: row;
`;
const InitText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.grey1};
`;

export default TextSetting;
