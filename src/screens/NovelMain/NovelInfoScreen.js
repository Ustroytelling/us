import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import NovelInfoEditScreen from "./NovelInfoEditScreen";

const NovelInfoScreen = () => {
  const [edit, setEdit] = useState(false);
  const scrollRef = useRef();

  const pressScrollTab = () => {
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <Container>
      {edit === false ? (
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
          <InfoBox style={{ marginTop: 16 }}>
            <InfoTitleText>작품 소개</InfoTitleText>
            <InfoText>
              정부는 예산에 변경을 가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수 있다. 정부는
              회계연도마다 예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는 회계연도 개시 30일전까지
              이를 의결하여야 한다. 행정각부의 설치·조직과 직무범위는 법률로 정한다. 국가는 지역간의 균형있는 발전을
              위하여 지역경제를 육성할 의무를 진다. 탄핵결정은 공직으로부터 파면함에 그친다. 그러나, 이에 의하여
              민사상이나 형사상의 책임이 면제되
            </InfoText>
          </InfoBox>
          <InfoBox style={{ marginTop: 8 }}>
            <InfoTitleText>작가 소개</InfoTitleText>
            <InfoText>
              안녕하세요 !!! 함께하실분 구해요
              TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
            </InfoText>
          </InfoBox>
          <MoreInfoContainer>
            <MoreInfoTitle>상세정보</MoreInfoTitle>
            <MoreInfoBox>
              <MoreInfo style={{ marginRight: 8 }}>
                <MoreInfoText>분류</MoreInfoText>
                <MoreInfoText>연령등급</MoreInfoText>
              </MoreInfo>
              <MoreInfo>
                <MoreInfoText>학원물</MoreInfoText>
                <MoreInfoText>전체이용가</MoreInfoText>
              </MoreInfo>
            </MoreInfoBox>

            {/* 권한을 가진 유저만 볼 수 있도록 조건문 추가 예정 */}
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
        </ScrollView>
      ) : (
        <NovelInfoEditScreen setEdit={setEdit} />
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  height: 100%;
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
