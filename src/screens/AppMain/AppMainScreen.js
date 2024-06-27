import styled from "styled-components/native";
import SearchIcon from "../../assets/icons/search magnifying glass.svg";
import EditIcon from "../../assets/AppMainIcons/editNote.svg";
import LogoIcon from "../../assets/AppMainIcons/usLogo.svg";
import { useEffect, useRef, useState } from "react";
import GoIcon from "../../assets/icons/s_arrow.svg";
import { RealTimeData } from "../../data/NovelData";
import { TouchableOpacity, View } from "react-native";
/* import LinearGradient from "react-native-linear-gradient"; */
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import { jsonConfig } from "../../api/axios";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const novelWidth = (screenWidth - 40) / 3;
const novelHeight = novelWidth * (3 / 2);

const AppMainScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(0);
  const [realTimeNovelsdata, setRealTimeNovelsData] = useState(null);
  const [newNovelsdata, setNewTimeNovelsData] = useState(null);
  const [readNovelsdata, setReadNovelsData] = useState(null);
  const [favoriteNovelsdata, setfavoriteNovelsData] = useState(null);
  const [dd, setdd] = useState(null);
  const fetchData = async () => {
    try {
      const response = await jsonConfig("get", "novel/main");
      const data = response.data.data;
      setNewTimeNovelsData(data.recentlyCreatedNovels);
      setRealTimeNovelsData(data.realTimeUpdateNovels);
      setReadNovelsData(data.readNovels);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onGoNovel = (data) => {
    navigation.navigate("NovelStack", { screen: "NovelIndex", params: data });
  };
  const onGoTopicNovel = (topic) => {
    navigation.navigate("MainStack", { screen: "TopicNovel", params: { topic } });
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

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
            <MoveBtn onPress={() => onGoTopicNovel("실시간 업데이트 ❤️‍🔥")}>
              <RealTimeText>실시간 업데이트 ❤️‍🔥</RealTimeText>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </MoveBtn>
          </RealTimeHeader>
          <RealTimeDataBox alTimeDataBox>
            {realTimeNovelsdata &&
              realTimeNovelsdata.map((novel, idx) => {
                return (
                  <RealTimeBox key={idx} onPress={() => onGoNovel(novel)}>
                    <RealTimeImg
                      source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
                    />
                    <RealTimeName ellipsizeMode="tail" numberOfLines={1}>
                      {novel.title}
                    </RealTimeName>
                  </RealTimeBox>
                );
              })}
          </RealTimeDataBox>
        </RealTimeContainer>

        <RealTimeContainer>
          <RealTimeHeader>
            <MoveBtn onPress={() => onGoTopicNovel("따끈따끈한 신작 🥐")}>
              <RealTimeText>따끈따끈한 신작 🥐</RealTimeText>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </MoveBtn>
          </RealTimeHeader>
          <RealTimeDataBox alTimeDataBox>
            {newNovelsdata &&
              newNovelsdata.map((novel, idx) => {
                return (
                  <RealTimeBox key={idx} onPress={() => onGoNovel(novel)}>
                    <RealTimeImg
                      source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
                    />
                    <RealTimeName ellipsizeMode="tail" numberOfLines={1}>
                      {novel.title}
                    </RealTimeName>
                  </RealTimeBox>
                );
              })}
          </RealTimeDataBox>
        </RealTimeContainer>

        <ReadNovelContainer style={{ marginBottom: 80 }}>
          <ReadNovelHeader>
            <MoveBtn onPress={() => navigation.navigate("Storage")}>
              <RealTimeText>읽은 소설 📚</RealTimeText>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </MoveBtn>
          </ReadNovelHeader>
          <ReadNovelList horizontal={true} showsHorizontalScrollIndicator={false}>
            <ReadNovels>
              {readNovelsdata &&
                readNovelsdata.map((novel, idx) => {
                  return (
                    <RealTimeBox key={idx} onPress={() => onGoNovel(novel)}>
                      <RealTimeImg
                        source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
                      />
                      <RealTimeName ellipsizeMode="tail" numberOfLines={1}>
                        {novel.title}
                      </RealTimeName>
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
`;
const IconBox = styled.View`
  flex-direction: row;
  gap: 4px;
`;
const MainScroll = styled.ScrollView`
  height: 100%;
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
  width: 100%;
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
  flex-wrap: wrap;
  gap: 4px;
  width: 100%;
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

export default AppMainScreen;
