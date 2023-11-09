import styled from "styled-components/native";
import Modal from "react-native-modal";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import { Rating } from "react-native-ratings";

const StarRating = (props) => {
  const { isVisible, onCloseRating } = props;

  const onPressCancel = () => {
    onCloseRating();
  };
  const onPressConfirm = () => {
    onCloseRating();
  };

  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }} backdropOpacity={0.25}>
      <Container>
        <Main>
          <Stars onPress={onCloseRating}>
            <Rating
              type="custom"
              ratingImage={require("../../assets/star.png")}
              ratingColor="#FFEA30"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={5}
              imageSize={40}
              onFinishRating={this.ratingCompleted}
            />
          </Stars>
          <Explain>좌우로 드래그해주세요.</Explain>
        </Main>
        <Buttons>
          <Button style={{ borderRightWidth: 0.5, borderRightColor: colors.grey5 }} onPress={onPressCancel}>
            <ButtonText>취소</ButtonText>
          </Button>
          <Button style={{ borderLeftWidth: 0.5, borderLeftColor: colors.grey5 }} onPress={onPressConfirm}>
            <ButtonText>확인</ButtonText>
          </Button>
        </Buttons>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  margin: 0 40px;
  border-radius: 10px;
  background-color: ${colors.white};
`;
const Main = styled.View`
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey5};
`;
const Stars = styled.View`
  flex-direction: row;
`;
const Explain = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Buttons = styled.View`
  flex-direction: row;
  height: 48px;
`;
const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.mainText};
`;

export default StarRating;
