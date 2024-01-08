import styled from "styled-components/native";
import SearchIcon from "../../assets/icons/search magnifying glass.svg";
import EditIcon from "../../assets/AppMainIcons/editNote.svg";
import LogoIcon from "../../assets/AppMainIcons/usLogo.svg";
import { useRef, useState } from "react";
import GoIcon from "../../assets/icons/s_arrow.svg";
import { AlgorithmData, RealTimeData } from "../../data/NovelData";
import { FlatList, TouchableOpacity, View } from "react-native";
/* import LinearGradient from "react-native-linear-gradient"; */
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const novelWidth = (screenWidth - 40) / 3;
const novelHeight = novelWidth * (3 / 2);

const AppMainScreen = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(0);
  const onGoNovel = () => {
    navigation.navigate("NovelStack", { screen: "NovelIndex" });
  };
  const onGoTopicNovel = (topic) => {
    navigation.navigate("MainStack", { screen: "TopicNovel", params: { topic } });
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
        <AlgorithmContainer>
          <FlatList
            data={AlgorithmData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id + ""}
            renderItem={({ item }) => (
              <AlgorithmBtn>
                <AlgorithmText>{item.name}</AlgorithmText>
              </AlgorithmBtn>
            )}
          />
        </AlgorithmContainer>

        <View style={{ position: "relative", height: 280 }}>
          <Swiper ref={swiperRef} loop timeout={2} controlsEnabled={false} onIndexChanged={(index) => setSwiper(index)}>
            {RealTimeData.map((item, i) => (
              <BannerContainer
                key={i}
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate("NovelStack", { screen: "NovelIndex", params: item });
                }}
              >
                <BannerImage source={{ uri: item.image }} />
                {/* <LinearGradientBox
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
                /> */}
                <BannerTextBox>
                  <BannerTitle>{item.name}</BannerTitle>
                  <BannerSubTitle numberOfLines={2}>{item.description}</BannerSubTitle>
                </BannerTextBox>
              </BannerContainer>
            ))}
          </Swiper>

          <BannerNumberBox>
            <BannerNumberText>
              {swiper + 1}/{RealTimeData.length}
            </BannerNumberText>
          </BannerNumberBox>
        </View>

        <RealTimeContainer>
          <RealTimeHeader>
            <MoveBtn onPress={() => onGoTopicNovel("실시간 업데이트")}>
              <RealTimeText>실시간 업데이트</RealTimeText>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </MoveBtn>
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

        <RealTimeContainer>
          <RealTimeHeader>
            <MoveBtn onPress={() => onGoTopicNovel("신작")}>
              <RealTimeText>신작</RealTimeText>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </MoveBtn>
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

        <ReadNovelContainer style={{ marginBottom: 80 }}>
          <ReadNovelHeader>
            <RealTimeText>읽은 소설</RealTimeText>
            <TouchableOpacity>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </TouchableOpacity>
          </ReadNovelHeader>
          <ReadNovelList horizontal={true} showsHorizontalScrollIndicator={false}>
            <ReadNovels>
              {RealTimeData.map((data, idx) => {
                return (
                  <RealTimeBox
                    onPress={() => {
                      navigation.navigate("NovelStack", { screen: "NovelIndex", params: data });
                    }}
                    key={idx}
                  >
                    <RealTimeImg source={{ uri: data.image }} />
                    <RealTimeName numberOfLines={1}>{data.name}</RealTimeName>
                  </RealTimeBox>
                );
              })}
            </ReadNovels>
          </ReadNovelList>
        </ReadNovelContainer>
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
const AlgorithmContainer = styled.View`
  align-items: center;
  height: 32px;
  margin-top: 12px;
  padding-left: 16px;
`;

const AlgorithmBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: rgba(219, 219, 219, 1);
  border-radius: 50px;
  padding: 4px 12px;
  margin-right: 8px;
`;

const AlgorithmText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const BannerContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 0px 16px;
  margin-top: 12px;
`;

const BannerImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

/* const LinearGradientBox = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 150px;
  bottom: 0px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`; */

const BannerTextBox = styled.View`
  position: absolute;
  width: 80%;
  bottom: 15px;
  left: 17px;
`;

const BannerTitle = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
`;

const BannerSubTitle = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const BannerNumberBox = styled.View`
  position: absolute;
  bottom: 15px;
  right: 34px;
`;

const BannerNumberText = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
`;

const RealTimeContainer = styled.View`
  padding: 16px 16px 0;
`;

const RealTimeHeader = styled.View`
  margin-bottom: 4px;
  padding: 8px 4px;
  width: 100%;
`;
const MoveBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const RealTimeText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const RealTimeDataBox = styled.View`
  flex-direction: row;
  gap: 4px;
  width: 100%;
  height: ${novelHeight + 26}px;
`;

const RealTimeBox = styled.TouchableOpacity`
  width: ${novelWidth}px;
`;

const RealTimeImg = styled.Image`
  width: 100%;
  height: ${novelHeight}px;
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
const ReadNovelContainer = styled.View`
  margin-top: 16px;
`;
const ReadNovelHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 4px;
  margin: 0 16px 4px;
`;
const ReadNovelList = styled.ScrollView``;
const ReadNovels = styled.View`
  flex-direction: row;
  gap: 4px;
  padding: 0 16px;
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

export default AppMainScreen;
