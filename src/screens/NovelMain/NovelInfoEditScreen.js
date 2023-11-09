import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components";

const NovelInfoEditScreen = ({ setEdit }) => {
  const [novelInfo, setNovelInfo] = useState("");
  const [writerInfo, setWriterInfo] = useState("");
  const scrollRef = useRef();

  const pressScrollTab = () => {
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <Container showsVerticalScrollIndicator={false} onPress={() => keyboard.dismiss()} ref={scrollRef}>
      <InfoBox style={{ marginTop: 16 }}>
        <InfoTitleText>작품 소개</InfoTitleText>
        <IfoInputBox>
          <InfoTextInput
            value={novelInfo}
            placeholder="작품 소개를 입력해 주세요."
            placeholderTextColor="gray"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={300}
            multiline={true}
            returnKeyType={"done"}
            onChangeText={(text) => setNovelInfo(text)}
          />
          <InfoTextNumberBox>
            <InfoTextNumber>{novelInfo ? novelInfo.length : 0}</InfoTextNumber>
            <InfoMaxLength>/300자</InfoMaxLength>
          </InfoTextNumberBox>
        </IfoInputBox>
      </InfoBox>
      <InfoBox style={{ marginTop: 8 }}>
        <InfoTitleText>작가 소개</InfoTitleText>
        <IfoInputBox>
          <InfoTextInput
            value={writerInfo}
            placeholder="작가 소개를 입력해 주세요."
            placeholderTextColor="gray"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={300}
            multiline={true}
            returnKeyType="done"
            onChangeText={(text) => setWriterInfo(text)}
          />
          <InfoTextNumberBox>
            <InfoTextNumber>{writerInfo ? writerInfo.length : 0}</InfoTextNumber>
            <InfoMaxLength>/300자</InfoMaxLength>
          </InfoTextNumberBox>
        </IfoInputBox>
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

        <EditBox>
          <EditBtn
            onPress={() => {
              setEdit(false);
              pressScrollTab();
            }}
          >
            <EditText>저장하기</EditText>
          </EditBtn>
          <EditBtn
            onPress={() => {
              Alert.alert(
                "초기화",
                "초기화하시겠습니까?",
                [
                  {
                    text: "No",
                    onPress: () => console.log("no"),
                    style: "destructive",
                  },
                  {
                    text: "Yes",
                    onPress: () => {
                      setEdit(false);
                    },
                  },
                ],
                {
                  cancelable: true,
                },
              );
            }}
          >
            <EditText>초기화</EditText>
          </EditBtn>
        </EditBox>
      </MoreInfoContainer>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
`;

const InfoBox = styled.View`
  padding: 0px 24px;
`;

const InfoTitleText = styled.Text`
  padding: 8px 0px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const IfoInputBox = styled.View`
  background-color: rgba(241, 241, 241, 1);
  border-radius: 8px;
  padding: 8px;
  padding-bottom: 32px;
  height: 238px;
`;

const InfoTextInput = styled.TextInput`
  height: 198px;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const InfoTextNumberBox = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const InfoTextNumber = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(107, 107, 107, 1);
`;

const InfoMaxLength = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(200, 200, 200, 1);
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
  justify-content: center;
  align-items: center;
`;

const EditBtn = styled.TouchableOpacity`
  height: 38px;
`;

const EditText = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

export default NovelInfoEditScreen;
