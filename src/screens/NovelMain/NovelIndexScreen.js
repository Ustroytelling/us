import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, TouchableOpacity, View, LayoutAnimation, Dimensions } from "react-native";
import styled from "styled-components/native";
import LeftArrowIcon from "../../assets/icons/arrow.svg";
import RightArrowIcon from "../../assets/icons/s_arrow.svg";
import LikeIcon from "../../assets/NovelMainIcons/heart.svg";
import FillLikeIcon from "../../assets/icons/Fill_heart.svg";
import PaperFileIcon from "../../assets/NovelMainIcons/paperFile.svg";
import UpDownIcon from "../../assets/NovelMainIcons/arrowsUpDown.svg";
import NovelCover from "../../assets/novel_cover.png";
import NovelNextImg from "../../assets/icons/NovelNext.svg";
import { hashtagData, novelIndexData } from "../../data/NovelData";
import NovelInfoTab from "../../navigations/NovelInfoTab";
import { SimpleLineIcons } from "@expo/vector-icons";
import ImageColors from "react-native-image-colors";
import LinearGradient from "react-native-linear-gradient";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import Modal from "react-native-modal";

const NovelIndexScreen = ({ navigation, route: { params } }) => {
  // console.log(params);
  const [order, setOrder] = useState(false);
  const [stay, setStay] = useState(false);
  const [star, setStar] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  // ref
  const bottomSheetRef2 = useRef(null);
  const snapPoints2 = useMemo(() => ["1%", "75%"], []);
  const handleSheetChanges2 = useCallback((index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setBottomSheetVisible(index === 1);
  }, []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef2.current?.expand(); // 모달이 열릴 때 85%로 바텀 시트를 열도록
    setBottomSheetVisible(true);
  }, []);

  const [backgroundColor, setBackgroundColor] = useState({
    background: "#ff0000",
    primary: "#00ff00",
    secondary: "#0000ff",
  });

  useEffect(() => {
    const extractColor = async () => {
      if (params) {
        try {
          const colors = await ImageColors.getColors(params.image, {
            fallback: "#ffffff", // 추출 실패 시 사용할 색상
            cache: true, // 추출한 색상을 캐시에 저장
            key: params.image,
          });

          if (colors.platform === "android") {
            setBackgroundColor(colors.dominant || "#ffffff");
          } else {
            // iOS에서는 세 가지 색상 활용
            const dominantColor = colors.background || "#ffffff";
            const averageColor = colors.primary || "#ffffff";
            const vibrantColor = colors.secondary || "#ffffff";

            // 세 가지 색상을 조합하여 원하는 형태로 배경 설정
            setBackgroundColor({
              background: `${dominantColor}`,
              primary: `${averageColor}`,
              secondary: `${vibrantColor}`,
            });
          }
          // console.log(colors.primary);
        } catch (error) {
          console.error("Error extracting color:", error);
        }
      } else {
        try {
          const colors = await ImageColors.getColors(NovelCover, {
            fallback: "#ffffff",
            cache: true,
            key: NovelCover,
          });

          if (colors.platform === "android") {
            setBackgroundColor(colors.dominant || "#ffffff");
          } else {
            // iOS에서는 세 가지 색상 활용
            const dominantColor = colors.background || "#ffffff";
            const averageColor = colors.primary || "#ffffff";
            const vibrantColor = colors.secondary || "#ffffff";

            // 세 가지 색상을 조합하여 원하는 형태로 배경 설정
            setBackgroundColor({
              background: `${dominantColor}`,
              primary: `${averageColor}`,
              secondary: `${vibrantColor}`,
            });
          }
        } catch (error) {
          console.error("Error extracting color:", error);
        }
      }
    };
    extractColor();
  }, [params]);

  const hexToRgb = (hex) => {
    // HEX 색상을 RGB로 변환
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const [rgbColors, setRgbColors] = useState({});

  useEffect(() => {
    if (backgroundColor === null) {
      return;
    }

    const newRgbColors = Object.keys(backgroundColor).reduce((acc, key) => {
      acc[key] = hexToRgb(backgroundColor[key]);
      return acc;
    }, {});

    setRgbColors(newRgbColors);
  }, [backgroundColor]);

  return (
    <>
      <Container>
        <LinearGradientBox
          start={{ x: 0, y: 2 }}
          end={{ x: 0, y: -0.5 }}
          colors={[
            rgbColors.primary ? rgbColors.primary : "transparent",
            rgbColors.background ? rgbColors.background : "transparent",
            rgbColors.secondary ? rgbColors.secondary : "transparent",
          ]}
        />
        <NovelHeaderBox>
          <IconBar stay={stay}>
            <LeftIconBox onPress={() => navigation.goBack()}>
              <LeftArrowIcon width={32} height={32} />
            </LeftIconBox>
            <RightIconBox>
              <BellIconBox>
                <SimpleLineIcons name="bell" size={19} color="rgba(255, 255, 255, 1)" />
              </BellIconBox>
              <LikeIconBox onPress={() => setStar(!star)}>
                {star === false ? <LikeIcon width={32} height={32} /> : <FillLikeIcon width={32} height={32} />}
              </LikeIconBox>

              <PaperFileIconBox>
                <PaperFileIcon width={32} height={32} />
              </PaperFileIconBox>
            </RightIconBox>
          </IconBar>
          <NovelCoverImg source={params ? { uri: params.image } : NovelCover} />
        </NovelHeaderBox>

        <View style={{ marginTop: -18 }}>
          <NovelIndexBody>
            <NovelTitleContainer>
              <NovelTitleBox>
                <NovelTitle>{params ? params.name : "주술회전 1"}</NovelTitle>
                <NovelInfoBtn onPress={handlePresentModalPress}>
                  <RightArrowIcon width={24} height={24} style={{ transform: [{ rotateY: "180deg" }] }} />
                </NovelInfoBtn>
              </NovelTitleBox>

              <NovelSubTitleBox>
                <NovelSubBox1>
                  <NovelSubText>학원물</NovelSubText>
                  <Line />
                  <NovelSubText>{params ? params.name : "홍길동"} 외 n명</NovelSubText>
                </NovelSubBox1>
                <NovelSubBox2>
                  <TouchableOpacity>
                    <NovelSubText>댓글 00</NovelSubText>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <NovelSubText>공유하기</NovelSubText>
                  </TouchableOpacity>
                </NovelSubBox2>
              </NovelSubTitleBox>

              <NovelHashtagBox>
                {hashtagData.map((d, id) => (
                  <NovelHashtag key={id}>
                    <NovelHashtagText>#{d.tag}</NovelHashtagText>
                  </NovelHashtag>
                ))}
              </NovelHashtagBox>
            </NovelTitleContainer>

            <NovelOrderBox>
              <NovelAllCountText>전체 000</NovelAllCountText>
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

            <NovelIndexContainer stay={stay}>
              <FlatList
                data={novelIndexData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, idx }) => (
                  <NovelIndexBox
                    style={{ marginTop: idx === 0 ? 0 : 16 }}
                    onPress={() => navigation.navigate("NovelStack", { screen: "NovelViewer" })}
                  >
                    <NovelIndexImg source={item.novel.image} />
                    <NovelIndexTextBox>
                      <NovelIndexTitle>
                        {item.novel.name} {item.novel.id}화
                      </NovelIndexTitle>
                      <NovelIndexDate>2023.01.01</NovelIndexDate>
                    </NovelIndexTextBox>
                  </NovelIndexBox>
                )}
              />
              <NovelNextMakeBox order={order}>
                <NovelNextImg width={56} height={80} />
                <NovelNextText>다음화를 생성해주세요</NovelNextText>
              </NovelNextMakeBox>
            </NovelIndexContainer>
          </NovelIndexBody>
        </View>
      </Container>
      <Modal isVisible={bottomSheetVisible} style={{ margin: 0, flex: 1 }} backdropOpacity={0.35}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheet
            ref={bottomSheetRef2}
            index={1}
            snapPoints={snapPoints2}
            onChange={handleSheetChanges2}
            handleIndicatorStyle={{
              backgroundColor: "rgba(219, 219, 219, 1)",
              width: 80,
            }}
            style={{
              flex: 1,
            }}
          >
            <NovelInfoTab />
          </BottomSheet>
        </GestureHandlerRootView>
      </Modal>
    </>
  );
};

const Container = styled.ScrollView`
  flex: 1;
`;

const LinearGradientBox = styled(LinearGradient)`
  width: 100%;
  height: 50%;
  position: absolute;
  z-index: -2;
`;

const NovelHeaderBox = styled.View`
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IconBar = styled.View`
  width: 100%;
  height: 32px;
  padding: 0px 8px;
  top: 0px;
  flex-direction: row;
  justify-content: space-between;
  position: ${(props) => props.stay && "absolute"};
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

const NovelCoverImg = styled.Image`
  margin-top: 4px;
  width: 146px;
  height: 204px;
  border-radius: 4px;
  z-index: 0;
`;

const NovelIndexBody = styled.View`
  padding-top: 18px;
  border-radius: 16px 16px 0 0;
  background-color: white;
  z-index: -1;
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
  padding: 0px 16px;
  width: 100%;
  gap: 16px;
`;
const NovelIndexList = styled.View``;
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
  margin-bottom: 40px;
  background-color: rgba(248, 248, 248, 1);
`;

const NovelNextText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
  margin-left: 16px;
`;
const ModalContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
`;

export default NovelIndexScreen;
