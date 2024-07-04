import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import NovelInfoEditScreen from "./NovelInfoEditScreen";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const NovelInfoScreen = (props) => {
  const { data, onChangeData } = props;
  const [edit, setEdit] = useState(false);
  const scrollRef = useRef();
  const [synopsis, setSynopsis] = useState("");
  const [authorIntroduction, setAuthorIntroduction] = useState("");

  useEffect(() => {
    setSynopsis(data.synopsis);
    setAuthorIntroduction(data.authorIntroduction);
  }, [data]);

  const pressScrollTab = () => {
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <Container>
      {edit === false ? (
        <BottomSheetScrollView style={{ flex: 1 }} scrollEnabled={true} ref={scrollRef}>
          <InfoBox style={{ marginTop: 16 }}>
            <InfoTitleText>작품 소개</InfoTitleText>
            <InfoText>{synopsis}</InfoText>
          </InfoBox>
          <InfoBox style={{ marginTop: 8 }}>
            <InfoTitleText>작가 소개</InfoTitleText>
            <InfoText>{authorIntroduction}</InfoText>
          </InfoBox>
          <MoreInfoContainer>
            <MoreInfoTitle>상세정보</MoreInfoTitle>
            <MoreInfoBox>
              <MoreInfo style={{ marginRight: 8 }}>
                <MoreInfoText>분류</MoreInfoText>
                <MoreInfoText>연령등급</MoreInfoText>
              </MoreInfo>
              <MoreInfo>
                <MoreInfoText>{data && data.genre}</MoreInfoText>
                <MoreInfoText>{data && data.ageRating === "GENERAL" && "전체이용가"}</MoreInfoText>
              </MoreInfo>
            </MoreInfoBox>
            <EditBox>
              <EditBtn
                onPress={() => {
                  setEdit(true);
                  pressScrollTab();
                }}
              >
                <EditText>편집하기</EditText>
              </EditBtn>
            </EditBox>
          </MoreInfoContainer>
        </BottomSheetScrollView>
      ) : (
        <NovelInfoEditScreen setEdit={setEdit} data={data} onChangeData={onChangeData} />
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;

const InfoBox = styled.View``;

const InfoTitleText = styled.Text`
  padding: 8px 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const InfoText = styled.Text`
  padding: 0px 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const MoreInfoContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 10%;
`;

const MoreInfoBox = styled.View`
  flex-direction: row;
  padding: 0px 24px;
  height: 70px;
`;

const MoreInfoTitle = styled.Text`
  padding: 8px 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const MoreInfo = styled.View`
  width: 48%;
`;

const MoreInfoText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const EditBox = styled.View`
  margin-top: 16px;
  margin-bottom: 34px;
  justify-content: center;
  align-items: center;
`;

const EditBtn = styled.TouchableOpacity``;

const EditText = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

export default NovelInfoScreen;
