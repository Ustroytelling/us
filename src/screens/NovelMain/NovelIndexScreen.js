import React, { useCallback, useMemo, useRef, useState } from "react";
import { FlatList, LayoutAnimation, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/Icons/arrow.svg";
import RightArrowIcon from "../../assets/Icons/s_arrow.svg";
import LikeIcon from "../../assets/Icons/heart-1.svg";
import FillLikeIcon from "../../assets/Icons/Fill_heart.svg";
import PaperFileIcon from "../../assets/Icons/paper_file_document2.svg";
import NovelCover from "../../assets/novel_cover.png";
import NovelNextImg from "../../assets/Icons/NovelNext.svg";
import { hashtagData, novelIndexData } from "../../data/NovelData";
import NovelInfoTab from "../../navigations/NovelInfoTab";

const NovelIndexScreen = ({ navigation, route: { params } }) => {
  console.log(params);
  const [order, setOrder] = useState(false);
  const [stay, setStay] = useState(false);
  const [star, setStar] = useState(false);

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["72%", "99%"], []);

  // callbacks
  const handleSheetChanges = useCallback(
    (index) => {
      setStay(index === 1);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      // console.log("handleSheetChanges", index);
    },
    [setStay],
  );

  // ref
  const bottomSheetRef2 = useRef(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef2.current?.expand();
  }, []);

  return (
    <Container>
      <NovelHeaderBox>
        <IconBar stay={stay}>
          <LeftIconBox onPress={() => navigation.goBack()}>
            <LeftArrowIcon width={32} height={32} />
          </LeftIconBox>
          <RightIconBox>
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

      <WhiteBack />

      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            handleIndicatorStyle={{
              display: "none",
            }}
          >
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
                    <NovelSubText>{params ? params.name : "홍길동"}</NovelSubText>
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
                  <NovelOrderBtn style={{ marginRight: 8 }} onPress={() => setOrder(false)}>
                    <NovelOrderText style={order === false ? { fontWeight: "700" } : { fontWeight: "400" }}>
                      회차순
                    </NovelOrderText>
                  </NovelOrderBtn>
                  <NovelOrderBtn onPress={() => setOrder(true)}>
                    <NovelOrderText style={order === true ? { fontWeight: "700" } : { fontWeight: "400" }}>
                      최신순
                    </NovelOrderText>
                  </NovelOrderBtn>
                </NovelOrder>
              </NovelOrderBox>

              <NovelIndexContainer stay={stay}>
                <FlatList
                  data={novelIndexData}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={heightEmpty}
                  inverted={order === false ? false : true}
                  keyExtractor={(item) => item.novel.id + ""}
                  renderItem={({ item }) => (
                    <NovelIndexBox>
                      <NovelIndexImg source={item.novel.image} />
                      <NovelIndexTextBox>
                        <NovelIndexTitle>
                          {item.novel.name} {item.novel.id}화
                        </NovelIndexTitle>
                        <NovelIndexDate>2023.01.01</NovelIndexDate>
                      </NovelIndexTextBox>
                    </NovelIndexBox>
                  )}
                  ListFooterComponent={
                    <NovelNextMakeBox order={order}>
                      <NovelNextImg width={56} height={80} />
                      <NovelNextText>다음화를 생성해주세요</NovelNextText>
                    </NovelNextMakeBox>
                  }
                />
              </NovelIndexContainer>
            </NovelIndexBody>
          </BottomSheet>
          <NovelInfoTab bottomSheetRef2={bottomSheetRef2} />
        </View>
      </GestureHandlerRootView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding-top: 44px;
  background-color: linear-gradient(
    171.73deg,
    #005457 2.24%,
    rgba(3, 86, 89, 0.989583) 2.24%,
    rgba(255, 255, 255, 0) 39.38%
  );
`;

const NovelHeaderBox = styled.View`
  justify-content: center;
  align-items: center;
`;

const IconBar = styled.View`
  width: 100%;
  height: 32px;
  top: 0px;
  padding: 0px 8px;
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

const LikeIconBox = styled.TouchableOpacity``;

const PaperFileIconBox = styled.TouchableOpacity``;

const NovelCoverImg = styled.Image`
  width: 160px;
  height: 224px;
  top: 24px;
  border-radius: 4px;
  position: absolute;
`;

const WhiteBack = styled.View`
  background-color: white;
  width: 100%;
  height: 140px;
  top: 31.5%;
  position: absolute;
  z-index: -1;
  border-width: 1px;
  border-color: rgba(225, 225, 225, 1);
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

const NovelIndexBody = styled.View`
  background-color: white;
  height: 1000px;
`;

const NovelTitleContainer = styled.View`
  margin: 0px 16px;
  margin-top: 0px;
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
  /* width: 76px; */
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

const NovelOrderBtn = styled.TouchableOpacity``;

const NovelOrderText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: rgba(59, 59, 59, 1);
`;

const NovelIndexContainer = styled.View`
  padding: 0px 16px;
  width: 100%;
  height: ${(props) => (props.stay ? "69%" : "42%")};
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

const heightEmpty = styled.View`
  height: 16px;
`;

const NovelNextMakeBox = styled.TouchableOpacity`
  background-color: rgba(248, 248, 248, 1);
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.order === true && "16px"};
  margin-top: ${(props) => props.order === false && "16px"};
`;

const NovelNextText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
  margin-left: 16px;
`;

export default NovelIndexScreen;