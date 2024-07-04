import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TouchableOpacity, View, LayoutAnimation } from "react-native";
import styled from "styled-components/native";
import LeftArrowIcon from "../../assets/icons/arrow.svg";
import RightArrowIcon from "../../assets/icons/s_arrow.svg";
import LikeIcon from "../../assets/NovelMainIcons/heart.svg";
import FillLikeIcon from "../../assets/icons/Fill_heart.svg";
import PaperFileIcon from "../../assets/NovelMainIcons/paperFile.svg";
import UpDownIcon from "../../assets/NovelMainIcons/arrowsUpDown.svg";
import NovelNextImg from "../../assets/icons/NovelNext.svg";
import NovelInfoTab from "../../navigations/NovelInfoTab";
import { SimpleLineIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import NextEpisodeModal from "./NextEpisodeModal";
import { jsonConfig } from "../../api/axios";
import { colors } from "../../assets/color";
import AsyncStorage from "@react-native-async-storage/async-storage";

const number = 99;

const NovelIndexScreen = ({ navigation, route: { params } }) => {
  const [data, setData] = useState(null);
  const [isManager, setIsManager] = useState(false);
  const [order, setOrder] = useState(false);
  const [stay, setStay] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [episodeModalVisible, setEpisodeModalVisible] = useState(false);
  const onOpenEpisodeModal = () => setEpisodeModalVisible(true);
  const onCloseEpisodeModal = () => setEpisodeModalVisible(false);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["1%", "85%"], []);
  const handleSheetChanges = useCallback((index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    if (index !== 1) {
      bottomSheetRef.current?.close();
    }
  }, []);
  const handlePresentModalPress = () => {
    bottomSheetRef.current?.expand();
    setBottomSheetVisible(true);
  };
  const onChangeData = (syn, aut) => {
    const newData = { ...data };
    newData.synopsis = syn;
    newData.authorIntroduction = aut;
    setData(newData);
  };
  const onChnageLike = async () => {
    try {
      if (isLiked) {
        await jsonConfig("delete", `like/novel/${params.id}`);
        setIsLiked(false);
      } else {
        await jsonConfig("post", `like/novel/${params.id}`);
        setIsLiked(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      const memberId = await AsyncStorage.getItem("memberId");
      const response = await jsonConfig("get", `novel/${params.id}/detail`);
      console.log("소설 상세 페이지 데이터 가져옴", response.data.data);
      setData(response.data.data);
      setIsLiked(response.data.data.isLiked);
      setIsManager(Number(memberId) === response.data.data.authorId);
    })();
  }, [setData]);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Container>
          <NovelHeaderBox src={data ? data.thumbnail : "http://via.placeholder.com/146X204"} blurRadius={30}>
            <IconBar stay={stay}>
              <LeftIconBox onPress={() => navigation.goBack()}>
                <LeftArrowIcon width={32} height={32} />
              </LeftIconBox>
              <RightIconBox>
                <BellIconBox>
                  <SimpleLineIcons name="bell" size={19} color="white" />
                </BellIconBox>
                <LikeIconBox onPress={() => onChnageLike()}>
                  {isLiked === false ? <LikeIcon width={32} height={32} /> : <FillLikeIcon width={32} height={32} />}
                </LikeIconBox>

                <PaperFileIconBox>
                  <PaperFileIcon width={32} height={32} />
                </PaperFileIconBox>
              </RightIconBox>
            </IconBar>
            <NovelCoverImgBox>
              <NovelCoverImg src={"http://via.placeholder.com/146X204"} />
            </NovelCoverImgBox>
          </NovelHeaderBox>

          <View style={{ marginTop: -18 }}>
            <NovelIndexBody>
              <NovelTitleContainer>
                <NovelTitleBox>
                  <NovelTitle>{data && data.title}</NovelTitle>
                  <NovelInfoBtn onPress={handlePresentModalPress}>
                    <RightArrowIcon width={24} height={24} style={{ transform: [{ rotateY: "180deg" }] }} />
                  </NovelInfoBtn>
                </NovelTitleBox>

                <NovelSubTitleBox>
                  <NovelSubBox1>
                    <NovelSubText>{data && data.genre}</NovelSubText>
                    <Line />
                    <NovelSubText>{data && data.authorName} 외 n명</NovelSubText>
                  </NovelSubBox1>
                  <NovelSubBox2>
                    <TouchableOpacity>
                      <NovelSubText>{`댓글 ${number > 100 ? "100+" : number}`}</NovelSubText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <NovelSubText>공유하기</NovelSubText>
                    </TouchableOpacity>
                  </NovelSubBox2>
                </NovelSubTitleBox>

                <NovelHashtagBox>
                  {data &&
                    data.hashtags.map((d, id) => (
                      <NovelHashtag key={id}>
                        <NovelHashtagText>#{d}</NovelHashtagText>
                      </NovelHashtag>
                    ))}
                </NovelHashtagBox>
              </NovelTitleContainer>

              <NovelOrderBox>
                <NovelAllCountText>{`전체 ${data && data.chapterInfos.length}`}</NovelAllCountText>
                <NovelOrder>
                  <NovelOrderBtn style={{ marginRight: 8 }} onPress={() => setOrder(!order)}>
                    <UpDownIcon width={24} height={24} />
                    {order === false ? (
                      <NovelOrderText>최신순</NovelOrderText>
                    ) : (
                      <NovelOrderText>오래된 순</NovelOrderText>
                    )}
                  </NovelOrderBtn>
                </NovelOrder>
              </NovelOrderBox>

              <NovelIndexContainer
                style={order ? { flexDirection: "column" } : { flexDirection: "column-reverse" }}
                stay={stay}
              >
                {data &&
                  data.chapterInfos.map((chapter, idx) => {
                    return (
                      <NovelIndexBox
                        onPress={() =>
                          navigation.navigate("NovelStack", {
                            screen: "NovelViewer",
                            params: { novelId: params.id, chapterId: chapter.id },
                          })
                        }
                        key={idx}
                      >
                        <NovelIndexImg src={data ? data.thumbnail : "http://via.placeholder.com/146X204"} />
                        <NovelIndexTextBox>
                          <NovelIndexTitle>{chapter.title}</NovelIndexTitle>
                          <NovelIndexDate>{chapter.createdAt.slice(0, 3).join(". ")}</NovelIndexDate>
                        </NovelIndexTextBox>
                      </NovelIndexBox>
                    );
                  })}
                {isManager && (
                  <NovelNextMakeBox order={order} onPress={onOpenEpisodeModal}>
                    <NovelNextImg width={56} height={80} />
                    <NovelNextText>다음화를 생성해주세요</NovelNextText>
                  </NovelNextMakeBox>
                )}
              </NovelIndexContainer>
            </NovelIndexBody>
          </View>
        </Container>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={0}
          onChange={handleSheetChanges}
          onClose={() => {
            setBottomSheetVisible(false);
          }}
          handleIndicatorStyle={{ backgroundColor: colors.grey4, width: 80 }}
        >
          <NovelInfoTab data={{ ...data, novelId: params.id }} onChangeData={onChangeData} />
        </BottomSheet>
      </GestureHandlerRootView>
      <NextEpisodeModal isVisible={episodeModalVisible} onCloseEpisodeModal={onCloseEpisodeModal} />
    </>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.black};
`;

const NovelHeaderBox = styled.ImageBackground`
  padding-top: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IconBar = styled.View`
  position: ${(props) => props.stay && "absolute"};
  top: 0px;
  width: 100%;
  height: 32px;
  padding: 0px 8px;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftIconBox = styled.TouchableOpacity``;

const RightIconBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LikeIconBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const BellIconBox = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const PaperFileIconBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const NovelCoverImgBox = styled.View`
  position: relative;
  margin-top: 4px;
  width: 146px;
  height: 204px;
  border-radius: 4px;
  z-index: 20;
`;

const NovelCoverImg = styled.Image`
  position: relative;
  margin-top: 4px;
  width: 146px;
  height: 204px;
  border-radius: 4px;
  z-index: 20;
`;

const NovelIndexBody = styled.View`
  padding-top: 18px;
  border-radius: 16px 16px 0 0;
  background-color: white;
  z-index: 10;
`;

const NovelTitleContainer = styled.View`
  margin: 0px 16px;
  margin-top: 18px;
  border-bottom-width: 1px;
  border-color: rgba(219, 219, 219, 1);
  padding-bottom: 16px;
`;

const NovelTitleBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const NovelTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const NovelInfoBtn = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const NovelSubTitleBox = styled.View`
  flex-direction: row;
  height: 22px;
  gap: 8px;
  margin-bottom: 8px;
`;

const NovelSubBox1 = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NovelSubText = styled.Text`
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const Line = styled.View`
  background-color: rgba(59, 59, 59, 1);
  width: 1px;
  height: 45%;
  border-radius: 1px;
  margin: 0px 4px;
`;

const NovelSubBox2 = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const NovelHashtagBox = styled.View`
  flex-direction: row;
  gap: 8px;
`;

const NovelHashtag = styled.View`
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(225, 225, 225, 1);
  padding: 2px 4px;
`;

const NovelHashtagText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const NovelOrderBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
`;

const NovelAllCountText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: rgba(59, 59, 59, 1);
`;

const NovelOrder = styled.View`
  flex-direction: row;
`;

const NovelOrderBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const NovelOrderText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: rgba(59, 59, 59, 1);
`;

const NovelIndexContainer = styled.View`
  margin-top: 6px;
  margin-bottom: 40px;
  padding: 0px 16px;
  width: 100%;
  gap: 16px;
`;

const NovelIndexBox = styled.TouchableOpacity`
  flex-direction: row;
  height: 80px;
  gap: 16px;
  align-items: center;
`;

const NovelIndexImg = styled.Image`
  width: 56px;
  height: 80px;
  border-radius: 2px;
`;

const NovelIndexTextBox = styled.View``;

const NovelIndexTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const NovelIndexDate = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const NovelNextMakeBox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: rgba(248, 248, 248, 1);
`;

const NovelNextText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
  margin-left: 16px;
`;

export default NovelIndexScreen;
