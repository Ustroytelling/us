import styled from "styled-components/native";
import DotMenuCol from "../../assets/icons/dot-menu-col.svg";
import SmHeart from "../../assets/icons/sm-heart.svg";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";

const NovelLine = (props) => {
  const { info } = props;

  return (
    <ContentView>
      <ProfileView>
        <UserStateView>
          <Nickname>{info.nickname}</Nickname>
          <ConfirmLabel>
            <ConfirmText>확인중</ConfirmText>
          </ConfirmLabel>
        </UserStateView>
        <DotMenuCol fill={colors.grey2} />
      </ProfileView>
      <NovelContent>
        {info.content.split("\n").map((paragraph, index) => (
          <ContentText key={index}>{paragraph}</ContentText>
        ))}
      </NovelContent>
      <NovelLineBtns>
        <Button>
          <SmHeart />
          <ButtonText>0</ButtonText>
        </Button>
        <Button>
          <ButtonText>제안하기</ButtonText>
        </Button>
      </NovelLineBtns>
    </ContentView>
  );
};

const ContentView = styled.View`
  padding: 12px;
  border: 1px solid ${colors.grey5};
  border-radius: 8px;
`;
const ProfileView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;
const UserStateView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Nickname = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.medium};
  line-height: 24px;
  color: ${colors.mainText};
`;
const ConfirmLabel = styled.View`
  align-items: center;
  padding: 0 8px;
  border: 1px solid ${colors.blue};
  border-radius: 2px;
`;
const ConfirmText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.medium};
  line-height: 24px;
  color: ${colors.blue};
`;
const NovelContent = styled.View`
  margin-bottom: 8px;
  gap: 16px;
`;
const NovelLineBtns = styled.View`
  flex-direction: row;
  gap: 4px;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 2px 8px 2px 4px;
  border: 1px solid ${colors.grey4};
  border-radius: 8px;
`;
const ButtonText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.grey2};
`;

export default NovelLine;
