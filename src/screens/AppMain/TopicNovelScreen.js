import styled from "styled-components/native";
import SearchIcon from "../../assets/AppMainIcons/searchIcon.svg";
import EditIcon from "../../assets/AppMainIcons/editNote.svg";
import LogoIcon from "../../assets/AppMainIcons/usLogo.svg";
import { TouchableOpacity } from "react-native";

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const novelWidth = (screenWidth - 40) / 3;

const TopicNovelScreen = (props) => {
  const { navigation, route } = props;
  const onGoNovel = () => {
    navigation.navigate("NovelStack", { screen: "NovelIndex" });
  };

  return (
    <Container>
      <HeaderContainer>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
        <IconBox>
          <TouchableOpacity onPress={() => navigation.navigate("MainStack", { screen: "NewNovel" })}>
            <EditIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MainStack", { screen: "Search" })}>
            <SearchIcon />
          </TouchableOpacity>
        </IconBox>
      </HeaderContainer>
      <MainScroll showsVerticalScrollIndicator={false}>
        <RealTimeContainer style={{ marginBottom: 0 }}>
          <RealTimeHeader>
            <RealTimeText>{route.params.topic}</RealTimeText>
          </RealTimeHeader>
          <RealTimeDataBox alTimeDataBox>
            <RealTimeBox onPress={onGoNovel}>
              <RealTimeImg
                source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
              />
              <RealTimeName>소설 제목</RealTimeName>
            </RealTimeBox>
            <RealTimeBox onPress={onGoNovel}>
              <RealTimeImg
                source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
              />
              <RealTimeName>소설 제목</RealTimeName>
            </RealTimeBox>
            <RealTimeBox onPress={onGoNovel}>
              <RealTimeImg
                source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
              />
              <RealTimeName>소설 제목</RealTimeName>
            </RealTimeBox>
          </RealTimeDataBox>
          <RealTimeDataBox style={{ marginTop: 4 }}>
            <RealTimeBox onPress={onGoNovel}>
              <RealTimeImg
                source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
              />
              <RealTimeName>소설 제목</RealTimeName>
            </RealTimeBox>
            <RealTimeBox onPress={onGoNovel}>
              <RealTimeImg
                source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
              />
              <RealTimeName>소설 제목</RealTimeName>
            </RealTimeBox>
            <RealTimeBox onPress={onGoNovel}>
              <RealTimeImg
                source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
              />
              <RealTimeName>소설 제목</RealTimeName>
            </RealTimeBox>
          </RealTimeDataBox>
        </RealTimeContainer>
        <ServiceContainer>
          <ServiceView>
            <ServiceRegularText>우스</ServiceRegularText>
            <ServiceText>
              <ServiceMediumText>대표자</ServiceMediumText>
              <ServiceRegularText> : 홍길동</ServiceRegularText>
            </ServiceText>
            <ServiceText>
              <ServiceMediumText>사업자 등록 번호</ServiceMediumText>
              <ServiceRegularText> : 000-00-0000</ServiceRegularText>
            </ServiceText>
            <ServiceText>
              <ServiceMediumText>통신판매신고</ServiceMediumText>
              <ServiceRegularText> : 김포마산-0000</ServiceRegularText>
            </ServiceText>
            <ServiceRegularText>경기도 김포시 김포한강8로</ServiceRegularText>
            <ServiceText>
              <ServiceMediumText>개인정보관리책임자</ServiceMediumText>
              <ServiceRegularText> : 홍길동</ServiceRegularText>
            </ServiceText>
          </ServiceView>
          <ServiceView>
            <ServiceRegularText>개인정보처리방침 | 이용약관 | 이용안내</ServiceRegularText>
          </ServiceView>
        </ServiceContainer>
      </MainScroll>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;
const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 8px;
  border-bottom-width: 1px;
  border-color: rgba(225, 225, 225, 1);
`;
const LogoBox = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 27px;
  background-color: rgba(170, 228, 229, 1);
  border-radius: 12px;
  border-width: 0.5px;
  border-color: rgba(241, 241, 241, 1);
`;
const IconBox = styled.View`
  flex-direction: row;
  gap: 4px;
`;
const MainScroll = styled.ScrollView`
  height: 100%;
`;
const RealTimeContainer = styled.View`
  padding: 8px 16px 32px;
`;
const RealTimeHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 4px;
  margin-bottom: 8px;
`;

const RealTimeText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const RealTimeDataBox = styled.View`
  flex-direction: row;
  gap: 4px;
  width: 100%;
  height: 202px;
`;

const RealTimeBox = styled.TouchableOpacity`
  width: ${novelWidth}px;
`;

const RealTimeImg = styled.Image`
  width: 100%;
  height: 176px;
  border-radius: 4px;
  margin-bottom: 4px;
`;

const RealTimeName = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
  padding-left: 8px;
`;
const ServiceContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 144px;
  background-color: #ededed;
`;
const ServiceView = styled.View`
  justify-content: center;
  align-items: center;
`;
const ServiceText = styled.Text`
  flex-direction: row;
`;
const ServiceMediumText = styled.Text`
  font-size: 8px;
  font-weight: 500;
  color: #929292;
`;
const ServiceRegularText = styled.Text`
  font-size: 8px;
  font-weight: 400;
  color: #929292;
`;

export default TopicNovelScreen;
