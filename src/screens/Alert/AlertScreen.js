import styled from "styled-components/native";
import AlertTab from "../../navigations/AlertTab";
import { fontSize, fontWeight } from "../../assets/font";
import { colors } from "../../assets/color";

const AlertScreen = () => {
  return (
    <Container>
      <TitleView>
        <Title>
          <TitleText>알림</TitleText>
        </Title>
      </TitleView>
      <AlertTab />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;
const TitleView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
`;
const Title = styled.View`
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

export default AlertScreen;
