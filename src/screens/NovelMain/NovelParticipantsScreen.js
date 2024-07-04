import React, { useState } from "react";
import styled from "styled-components/native";
import LikeEmoji from "../../assets/icons/likeEmoji.svg";
import Star from "../../assets/icons/star.svg";
import Number1 from "../../assets/icons/number1.svg";
import Number2 from "../../assets/icons/number2.svg";
import Number3 from "../../assets/icons/number3.svg";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { colors } from "../../assets/color";
import Menu from "../../assets/icons/dot menu ellipse.svg";
import ReportBtn from "./ReportBtn";

const manager = 2;

const NovelParticipantsScreen = (props) => {
  const { data } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onOpenBtns = () => setIsModalVisible(true);
  const onCloseBtns = () => setIsModalVisible(false);

  return (
    <BottomSheetScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <Container>
        {data &&
          data.map((author, idx) => {
            return (
              <>
                <ParticipantsBox key={idx}>
                  <LikeEmojiBox>
                    <LikeEmoji width={16} height={16} />
                  </LikeEmojiBox>
                  <Main>
                    <ParticipantText style={manager === author.authorInfo.id && { color: colors.heavy }}>
                      {author.authorInfo.nickname} | {`${author.percentage * 100}%`} {idx + 1}등!
                    </ParticipantText>
                    {idx + 1 === 1 && <Number1 width={24} height={24} />}
                    {idx + 1 === 2 && <Number2 width={24} height={24} />}
                    {idx + 1 === 3 && <Number3 width={24} height={24} />}
                    {manager === author.authorInfo.id && <Star width={24} height={24} />}
                  </Main>
                  {manager !== author.authorInfo.id && (
                    <MenuBtn onPress={onOpenBtns}>
                      <Menu />
                    </MenuBtn>
                  )}
                </ParticipantsBox>
                <ReportBtn isVisible={isModalVisible} onCloseBtns={onCloseBtns} key={`ReportBtn${idx}`} />
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
