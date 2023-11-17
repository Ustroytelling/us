import styled from "styled-components/native";
import BigArrow from "../../assets/Icons/big-arrow.svg";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";

const MyInfoScreen = ({ navigation }) => {
  const onGoProfile = () => {
    navigation.navigate("ProfileStack", { screen: "Profile" });
  };

  return (
    <Container>
      <ProfileView onPress={onGoProfile}>
        <ProfileImage />
        <NicknameView>
          <Nickname>홍길동</Nickname>
          <Icon>
            <BigArrow />
          </Icon>
        </NicknameView>
      </ProfileView>
      <SettingList>
        <SettingView>
          <SettingText>댓글내역</SettingText>
        </SettingView>
        <SettingView>
          <SettingText>설정 및 개인정보</SettingText>
        </SettingView>
        <SettingView>
          <SettingText>고객센터</SettingText>
        </SettingView>
        <SettingView>
          <SettingText>로그아웃</SettingText>
        </SettingView>
      </SettingList>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;

const ProfileView = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 8px 16px;
  height: 72px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey6};
`;
const ProfileImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-color: ${colors.grey6};
`;
const NicknameView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Nickname = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.black};
`;
const Icon = styled.View`
  transform: scaleX(-1);
`;
const SettingList = styled.View``;
const SettingView = styled.TouchableOpacity`
  justify-content: center;
  padding: 8px 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey6};
`;
const SettingText = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
export default MyInfoScreen;
