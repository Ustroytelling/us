import styled from "styled-components/native";
import Arrow from "../../assets/icons/angle arrow left.svg";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import ProfileNovelTab from "../../navigations/ProfileNovelTab";
import { useRoute } from "@react-navigation/native";

const PreviewScreen = ({ navigation }) => {
  const route = useRoute();
  const { data } = route.params;

  return (
    <Container>
      <TitleView>
        <ReturnBtn onPress={() => navigation.goBack()}>
          <Arrow />
        </ReturnBtn>
        <Title>
          <TitleText>프로필</TitleText>
        </Title>
        <LayoutView />
      </TitleView>
      <ProfileView>
        <ProfileImage />
        <IntroduceView>
          <IntroduceText>{data.nickname}</IntroduceText>
          <IntroduceText>{data.introduction}</IntroduceText>
        </IntroduceView>
      </ProfileView>
      <ProfileNovelTab public={{ collection: data.collectionNovelsPublic, joinNovel: data.participateNovelsPublic }} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;
const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
`;
const ReturnBtn = styled.TouchableOpacity`
  width: 24px;
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
const LayoutView = styled.View`
  width: 32px;
  height: 32px;
`;
const ProfileView = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 16px;
  height: 230px;
`;
const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${colors.grey6};
`;
const IntroduceView = styled.View`
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const IntroduceText = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.mainText};
`;
export default PreviewScreen;
