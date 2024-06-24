import styled from "styled-components/native";
import StorageTab from "../../navigations/StorageTab";
import { fontSize, fontWeight } from "../../assets/font";
import { colors } from "../../assets/color";

const StorageScreen = () => {
  return (
    <Container>
      <TitleView>
        <Title>
          <TitleText>보관함</TitleText>
        </Title>
      </TitleView>
      <StorageTab />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;
const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
`;
const Title = styled.View`
  width: 72px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;

export default StorageScreen;
