import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/AppMainIcons/searchIcon.svg";
import EditIcon from "../../assets/AppMainIcons/editNote.svg";
import LogoIcon from "../../assets/AppMainIcons/usLogo.svg";
import GoIcon from "../../assets/Icons/s_arrow.svg";
import { AlgorithmData, RealTimeData } from "../../data/NovelData";
import { FlatList, TouchableOpacity, View } from "react-native";

const AppMainScreen = ({ navigation }) => {
  const onGoNovel = () => {
    navigation.navigate("MainStack", { screen: "NovelIndex" });
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

        <BannerContainer>
          <BannerImage source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }} />
        </BannerContainer>

        <RealTimeContainer style={{ marginBottom: 0 }}>
          <RealTimeHeader>
            <RealTimeText>실시간❤️‍🔥</RealTimeText>
            <TouchableOpacity>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </TouchableOpacity>
          </RealTimeHeader>
          <RealTimeDataBox>
            <RealTimeBox onPress={onGoNovel}>
              <RealTimeImg
                source={{ uri: "https://i.pinimg.com/564x/0b/5c/91/0b5c91d3e3c0fc913b89ec6e9ad0011b.jpg" }}
              />
              <RealTimeName>소설 제목</RealTimeName>
            </RealTimeBox>
            <RealTimeBox onPress={onGoNovel} style={{ marginHorizontal: 4 }}>
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
            <RealTimeBox onPress={onGoNovel} style={{ marginHorizontal: 4 }}>
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

        <RealTimeContainer style={{ marginBottom: 0 }}>
          <RealTimeHeader>
            <RealTimeText>신작🫣</RealTimeText>
            <TouchableOpacity>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </TouchableOpacity>
          </RealTimeHeader>

          <NewNovelDataScroll>
            <HorizontalView horizontal showsHorizontalScrollIndicator={false}>
              {RealTimeData.map((item, i) => (
                <View key={i} style={{ marginRight: 4 }}>
                  <RealTimeBox
                    onPress={() => {
                      navigation.navigate("MainStack", { screen: "NovelIndex", params: item });
                    }}
                  >
                    <RealTimeImg source={{ uri: item.image }} />
                    <RealTimeName>{item.name}</RealTimeName>
                  </RealTimeBox>
                </View>
              ))}
            </HorizontalView>

            <HorizontalView horizontal style={{ marginTop: 8 }} showsHorizontalScrollIndicator={false}>
              {RealTimeData.map((item, i) => (
                <View key={i} style={{ marginRight: 4 }}>
                  <RealTimeBox
                    onPress={() => {
                      navigation.navigate("MainStack", { screen: "NovelIndex", params: item });
                    }}
                  >
                    <RealTimeImg source={{ uri: item.image }} />
                    <RealTimeName>{item.name}</RealTimeName>
                  </RealTimeBox>
                </View>
              ))}
            </HorizontalView>
          </NewNovelDataScroll>
        </RealTimeContainer>

        <RealTimeContainer>
          <RealTimeHeader>
            <RealTimeText>읽은 소설</RealTimeText>
            <TouchableOpacity>
              <GoIcon style={{ transform: [{ rotateY: "180deg" }] }} />
            </TouchableOpacity>
          </RealTimeHeader>
          <FlatList
            data={RealTimeData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <RealTimeBox
                onPress={() => {
                  navigation.navigate("MainStack", { screen: "NovelIndex", params: item });
                }}
                style={{ marginRight: 4 }}
              >
                <RealTimeImg source={{ uri: item.image }} />
                <RealTimeName>{item.name}</RealTimeName>
              </RealTimeBox>
            )}
          />
        </RealTimeContainer>
      </MainScroll>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
  padding-top: 44px;
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
  padding: 8px 12px;
  margin-right: 8px;
`;

const AlgorithmText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: rgba(32, 32, 32, 1);
`;

const BannerContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0px 16px;
  margin-top: 12px;
  height: 300px;
`;

const BannerImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const RealTimeContainer = styled.View`
  margin: 16px;
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
  width: 100%;
  height: 202px;
`;

const RealTimeBox = styled.TouchableOpacity``;

const RealTimeImg = styled.Image`
  width: 129px;
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

const NewNovelDataScroll = styled.View``;

const HorizontalView = styled.ScrollView``;

export default AppMainScreen;
