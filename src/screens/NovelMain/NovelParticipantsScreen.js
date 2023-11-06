import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import LikeEmoji from "../../assets/Icons/likeEmoji.svg";
import Star from "../../assets/Icons/star.svg";
import Number1 from "../../assets/Icons/number1.svg";
import Number2 from "../../assets/Icons/number2.svg";
import Number3 from "../../assets/Icons/number3.svg";
import User from "../../assets/Icons/infouser.svg";
import { ParticipantData } from "../../data/NovelData";

const NovelParticipantsScreen = () => {
  return (
    <Container>
      <FlatList
        data={ParticipantData}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={heightEmpty}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => (
          <ParticipantsBox>
            <LikeEmojiBox>
              <LikeEmoji width={16} height={16} />
            </LikeEmojiBox>
            <ParticipantText>
              {item.name} | {item.share} {item.rank}등!
            </ParticipantText>
            {item.rank === "1" && (
              <>
                <Number1 width={24} height={24} />
                <Star width={24} height={24} />
              </>
            )}
            {item.rank === "2" && <Number2 width={24} height={24} />}
            {item.rank === "3" && <Number3 width={24} height={24} />}
            {item.manager === true && <User width={24} height={24} />}
          </ParticipantsBox>
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
  padding-top: 16px;
  padding-bottom: 30px;
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
