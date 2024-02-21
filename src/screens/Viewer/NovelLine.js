import styled from "styled-components/native";
import DotMenuCol from "../../assets/icons/dot-menu-col.svg";
import Thumbs from "../../assets/icons/thumbs up like vote.svg";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import { Path, Svg } from "react-native-svg";
import { useState } from "react";
import Buttons from "./Buttons";
import Confirm from "./Confirm";

const NovelLine = (props) => {
  const { page, info, onOpenProposals, onDeleteMyNovelLine, best, myNovelLine } = props;
  const [fold, setFold] = useState(true);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const [isTextOverflowed, setIsTextOverflowed] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const onTouchMenu = () => setIsButtonsVisible(true);
  const onCloseButtons = () => setIsButtonsVisible(false);
  const onOpenConfirm = () => setIsConfirmVisible(true);
  const onCloseConfirm = () => setIsConfirmVisible(false);
  const onPressUnfold = () => {
    setFold(!fold);
  };
  const handleTextLayout = (event) => {
    const { lines } = event.nativeEvent;
    if (lines.length > 4) setIsTextOverflowed(true);
  };

  return (
    <>
      <Buttons
        myNovelLine={myNovelLine}
        isVisible={isButtonsVisible}
        onCloseButtons={onCloseButtons}
        onOpenConfirm={onOpenConfirm}
        onDeleteMyNovelLine={onDeleteMyNovelLine}
      />
      <Confirm isVisible={isConfirmVisible} onCloseConfirm={onCloseConfirm} />
      <ContentView style={myNovelLine && { borderColor: colors.strong }}>
        <ProfileView>
          <UserStateView>
            <Nickname>{info.authorName}</Nickname>
            {best && (
              <BestLabel>
                <BestText>BEST</BestText>
              </BestLabel>
            )}
            <ConfirmLabel>
              <ConfirmText>확인중</ConfirmText>
            </ConfirmLabel>
          </UserStateView>
          <DotMenuIcon onPress={onTouchMenu}>
            <DotMenuCol fill={colors.grey2} />
          </DotMenuIcon>
        </ProfileView>
        <NovelContent>
          {info.content.split("\n").map((paragraph, index) => {
            <ContentText onTextLayout={handleTextLayout}>{paragraph}</ContentText>;
            if (fold)
              return (
                <ContentText ellipsizeMode="tail" numberOfLines={4} key={index} onTextLayout={handleTextLayout}>
                  {paragraph}
                </ContentText>
              );
            return <ContentText key={index}>{paragraph}</ContentText>;
          })}
        </NovelContent>
        <NovelLineBtns>
          <Button>
            <Thumbs />
            <ButtonText>{info.likeCnt}</ButtonText>
          </Button>
          {!myNovelLine && page === "viewer" && (
            <Button onPress={onOpenProposals}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M7.83333 14.3333C7.83333 14.1289 7.70886 13.945 7.51903 13.8691C7.28801 13.7767 6.7739 13.4476 6.31882 12.8604C5.87316 12.2853 5.5 11.4831 5.5 10.4444C5.5 7.82336 8.28593 5.5 12 5.5C13.8496 5.5 15.4887 5.99605 16.6519 6.85866C17.8043 7.7132 18.5 8.93111 18.5 10.4444C18.5 11.8368 17.8982 12.9548 16.8528 13.7389C15.7945 14.5326 14.2561 15 12.3889 15C12.2872 15 12.1879 15.031 12.1043 15.0889L7.83333 18.0457L7.83333 14.3333Z"
                  stroke={colors.grey2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
              <ButtonText>제안보기</ButtonText>
            </Button>
          )}
          {page !== "viewer" && isTextOverflowed && (
            <Button style={{ paddingLeft: 8 }} onPress={onPressUnfold}>
              <ButtonText>{fold ? "펼쳐보기" : "접기"}</ButtonText>
            </Button>
          )}
        </NovelLineBtns>
      </ContentView>
    </>
  );
};

const ContentView = styled.View`
  padding: 12px;
  border: 1px solid ${colors.grey5};
  border-radius: 8px;
`;
const ProfileView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;
const UserStateView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Nickname = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.medium};
  line-height: 24px;
  color: ${colors.mainText};
`;
const ConfirmLabel = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  height: 24px;
  border: 1px solid ${colors.strong};
  border-radius: 2px;
`;
const ConfirmText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.medium};
  line-height: 18px;
  color: ${colors.strong};
`;
const BestLabel = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  height: 24px;
  border: 1px solid ${colors.red};
  border-radius: 2px;
`;
const BestText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  color: ${colors.red};
`;
const DotMenuIcon = styled.TouchableOpacity``;
const NovelContent = styled.View`
  margin-bottom: 8px;
  gap: 16px;
`;
const ContentText = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  color: ${colors.mainText};
`;
const NovelLineBtns = styled.View`
  flex-direction: row;
  gap: 4px;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 8px 0 4px;
  height: 28px;
  border: 1px solid ${colors.grey4};
  border-radius: 4px;
  box-sizing: border-box;
`;
const ButtonText = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.grey2};
`;

export default NovelLine;
