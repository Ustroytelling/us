import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import LikeEmoji from "../../assets/icons/likeEmoji.svg";
import Star from "../../assets/icons/star.svg";
import Number1 from "../../assets/icons/number1.svg";
import Number2 from "../../assets/icons/number2.svg";
import Number3 from "../../assets/icons/number3.svg";
import User from "../../assets/icons/infouser.svg";
import { ParticipantData } from "../../data/NovelData";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { colors } from "../../assets/color";

const myNickname = "마바";

const NovelParticipantsScreen = () => {
  return (
    <BottomSheetScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <Container>
        {ParticipantData.map((data) => {
          return (
            <ParticipantsBox>
              <LikeEmojiBox>
                <LikeEmoji width={16} height={16} />
              </LikeEmojiBox>
              <ParticipantText style={myNickname === data.name && { color: colors.strong }}>
                {data.name} | {data.share} {data.rank}등!
              </ParticipantText>
              {data.rank === "1" && <Number1 width={24} height={24} />}
              {data.rank === "2" && <Number2 width={24} height={24} />}
              {data.rank === "3" && <Number3 width={24} height={24} />}
              {data.manager === true && <Star width={24} height={24} />}
            </ParticipantsBox>
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
  padding: 0px 24px;
`;

const LikeEmojiBox = styled.View`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgba(241, 241, 241, 1);
  border-radius: 100px;
  margin-right: 16px;
`;

const ParticipantText = styled.Text`
  margin-right: 4px;
  font-weight: 400;
  font-size: 14px;
  color: rgba(107, 107, 107, 1);
`;

const heightEmpty = styled.View`
  height: 8px;
`;

export default NovelParticipantsScreen;
