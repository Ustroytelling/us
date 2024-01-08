import React, { useState } from "react";
import styled from "styled-components/native";
import LikeEmoji from "../../assets/icons/likeEmoji.svg";
import Star from "../../assets/icons/star.svg";
import Number1 from "../../assets/icons/number1.svg";
import Number2 from "../../assets/icons/number2.svg";
import Number3 from "../../assets/icons/number3.svg";
import { ParticipantData } from "../../data/NovelData";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { colors } from "../../assets/color";
import Menu from "../../assets/icons/dot menu ellipse.svg";
import ReportBtn from "./ReportBtn";

const myNickname = "마바";

const NovelParticipantsScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onOpenBtns = () => setIsModalVisible(true);
  const onCloseBtns = () => setIsModalVisible(false);

  return (
    <BottomSheetScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <Container>
        {ParticipantData.map((data, idx) => {
          return (
            <>
              <ParticipantsBox key={idx}>
                <LikeEmojiBox>
                  <LikeEmoji width={16} height={16} />
                </LikeEmojiBox>
                <Main>
                  <ParticipantText style={myNickname === data.name && { color: colors.heavy }}>
                    {data.name} | {data.share} {data.rank}등!
                  </ParticipantText>
                  {data.rank === "1" && <Number1 width={24} height={24} />}
                  {data.rank === "2" && <Number2 width={24} height={24} />}
                  {data.rank === "3" && <Number3 width={24} height={24} />}
                  {data.manager === true && <Star width={24} height={24} />}
                </Main>
                {myNickname !== data.name && (
                  <MenuBtn onPress={onOpenBtns}>
                    <Menu />
                  </MenuBtn>
                )}
              </ParticipantsBox>
              <ReportBtn isVisible={isModalVisible} onCloseBtns={onCloseBtns} />
            </>
          );
        })}
      </Container>
    </BottomSheetScrollView>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 16px 0 30px;
  gap: 8px;
`;

const ParticipantsBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0px 24px;
`;

const LikeEmojiBox = styled.View`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgba(241, 241, 241, 1);
  border-radius: 100px;
`;

const Main = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ParticipantText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: rgba(107, 107, 107, 1);
`;

const MenuBtn = styled.TouchableOpacity``;

export default NovelParticipantsScreen;
