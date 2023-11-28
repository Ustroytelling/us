import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import BigX from "../../assets/icons/big-x.svg";
import { useState } from "react";
import Modal from "react-native-modal";
import Warning from "../../assets/icons/warning.svg";

const TopBar = (props) => {
  const { onGoBack } = props;
  const [editPossible, setEditPossible] = useState(true);
  const [title, setTitle] = useState("주술회전 1화");
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(title);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onPressEditBtn = () => {
    setEdit(true);
  };
  const onPressSaveBtn = () => {
    setEditPossible(false);
    setIsModalVisible(true);
  };
  const onChangeText = (value) => {
    setText(value);
  };
  const onPressConfirm = () => {
    setTitle(text);
    setEdit(false);
    setIsModalVisible(false);
  };
  const onPressCancel = () => {
    setText(title);
    setEdit(false);
    setEditPossible(true);
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal isVisible={isModalVisible} style={{ margin: 0 }} backdropOpacity={0.25}>
        <ModalContainer>
          <Warning />
          <ModalText>
            <Explain>저장 하시겠습니까?</Explain>
            <Description>한번 입력시 재변경이 불가합니다.</Description>
          </ModalText>
          <Buttons>
            <ModalBtn onPress={onPressCancel}>
              <ModalBtnText>취소</ModalBtnText>
            </ModalBtn>
            <ModalBtn style={{ backgroundColor: colors.primary }} onPress={onPressConfirm}>
              <ModalBtnText style={{ color: colors.white }}>확인</ModalBtnText>
            </ModalBtn>
          </Buttons>
        </ModalContainer>
      </Modal>
      <Container>
        <CloseButton onPress={onGoBack}>
          <BigX />
        </CloseButton>
        {edit ? <Input value={text} onChangeText={onChangeText} /> : <TitleText>{title}</TitleText>}
        {editPossible && !edit && (
          <Button onPress={onPressEditBtn}>
            <BtnText>제목변경</BtnText>
          </Button>
        )}
        {edit && (
          <Button onPress={onPressSaveBtn}>
            <BtnText>저장하기</BtnText>
          </Button>
        )}
      </Container>
    </>
  );
};

const ModalContainer = styled.View`
  margin: 0 40px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background-color: ${colors.white};
`;
const ModalText = styled.View`
  align-items: center;
  gap: 4px;
`;
const Explain = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  color: ${colors.mainText};
`;
const Description = styled.Text`
  font-size: 10px;
  font-weight: ${fontWeight.medium};
  color: ${colors.grey2};
`;
const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  height: 48px;
  gap: 8px;
`;
const ModalBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px 27px;
  border: 1px solid ${colors.strong};
  border-radius: 4px;
  box-sizing: border-box;
`;
const ModalBtnText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  color: ${colors.strong};
`;
const Container = styled.View`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 0 8px;
  height: 48px;
  border-bottom-color: ${colors.grey6};
  border-bottom-width: 1px;
`;
const CloseButton = styled.TouchableOpacity``;
const TitleText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Input = styled.TextInput`
  padding: 0 8px;
  width: 194px;
  border-radius: 4px;
  background-color: ${colors.grey6};
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Button = styled.TouchableOpacity`
  margin-left: 8px;
  padding: 0 8px;
  border: 1px solid ${colors.grey2};
  border-radius: 2px;
`;
const BtnText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.grey2};
`;

export default TopBar;
