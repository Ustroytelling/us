import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import LeftArrow from "../../assets/icons/angle arrow left.svg";
import { useEffect, useState } from "react";
import { jsonConfig } from "../../api/axios";

const screenWidth = Dimensions.get("window").width;
const novelWidth = (screenWidth - 40) / 3;

const TopicNovelScreen = ({ navigation, route }) => {
  const { topic } = route.params;
  const [page, setPage] = useState(0);
  const [datas, setDatas] = useState(null);
  const onGoNovel = () => {
    navigation.navigate("NovelStack", { screen: "NovelIndex" });
  };
  const onClickReturn = () => {
    navigation.goBack();
  };
  const getData = async (topic) => {
    const response = await jsonConfig("get", `novel/main/more/${topic}/${page}`);
    const data = response.data.data;
    setDatas(data.novelList);
    if (data.hasNext) setPage(data.nextPage);
  };

  useEffect(() => {
    console.log(topic);
    if (topic.indexOf("실시간") !== -1) {
      getData("UPDATE");
    } else {
      getData("NEW");
    }
  }, [topic]);

  return (
    <Container>
      <TopBar>
        <CloseButton onPress={onClickReturn}>
          <LeftArrow />
        </CloseButton>
        <TitleText>{topic}</TitleText>
      </TopBar>
      <MainScroll showsVerticalScrollIndicator={false}>
        <RealTimeContainer>
          <RealTimeDataBox alTimeDataBox>
            {datas &&
              datas.map((novel, idx) => {
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
      </MainScroll>
    </Container>
  );
};

const TopBar = styled.View`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  height: 40px;
  border-bottom-color: ${colors.grey6};
  border-bottom-width: 1px;
  background-color: ${colors.white};
`;
const CloseButton = styled.TouchableOpacity``;
const TitleText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;
const MainScroll = styled.ScrollView`
  height: 100%;
`;
const RealTimeContainer = styled.View`
  padding: 8px 16px;
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

export default TopicNovelScreen;
