import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import UpArrow from "../../assets/icons/up-arrow.svg";
import { useState } from "react";

const talks = [
  {
    nickname: "닉네임 긴사람",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content: "안녕하세요",
    date: "2023.11.08-오전 7:00",
  },
  {
    nickname: "닉네임 긴사람",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content: "우스톡에서는 자유롭게 소설이야기를 할 수 있어요 🤭",
    date: "2023.11.08-오전 7:02",
  },
  {
    nickname: "닉네임 긴사람",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content: "작가들만 들어올수 있답니다 🫣",
    date: "2023.11.08-오전 7:05",
  },
  {
    nickname: "가나",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content: "많은 참여 부탁드려요",
    date: "2023.11.08-오전 8:00",
  },
  {
    nickname: "나",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content: "좋아요!!",
    date: "2023.11.08-오후 9:00",
  },
  {
    nickname: "나",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content: "욕설은 신고해주세요!",
    date: "2023.11.08-오후 9:01",
  },
  {
    nickname: "나",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content: "오늘도 힘내세요!",
    date: "2023.11.17-오전 11:01",
  },
];

const UsTalkTab = () => {
  const [text, setText] = useState("");
  const onPressBtn = () => {
    talks.push({
      nickname: "나",
      image:
        "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
      content: text,
      date: "2023.11.17-오전 11:48",
    });
    setText("");
  };
  const onChangeText = (value) => {
    setText(value);
  };

  return (
    <>
      <ScrollContainer>
        <TalkList>
          {talks.map((talk, idx) => {
            const date = talk.date.split("-")[0];
            const prevDate = talks[idx - 1]?.date.split("-")[0];
            const time = talk.date.split("-")[1];
            const newDate = date === prevDate;
            if (talk.nickname === "나") {
              const nickname = talks[idx - 1].nickname === talk.nickname;
              return (
                <TalkView key={idx} style={{ alignItems: "flex-end", marginTop: nickname ? 0 : 8 }}>
                  {!newDate && (
                    <DateView>
                      <DateText>{date}</DateText>
                    </DateView>
                  )}
                  <MainView>
                    <TimeView>
                      <TimeText>{time}</TimeText>
                    </TimeView>
                    <ContentView>
                      <ContentText>{talk.content}</ContentText>
                    </ContentView>
                    <ProfileImage src={talk.image} />
                  </MainView>
                </TalkView>
              );
            }
            return (
              <TalkView key={idx}>
                {!newDate && (
                  <DateView>
                    <DateText>{date}</DateText>
                  </DateView>
                )}
                <Nickname>{talk.nickname}</Nickname>
                <MainView>
                  <ProfileImage src={talk.image} />
                  <ContentView>
                    <ContentText>{talk.content}</ContentText>
                  </ContentView>
                  <TimeView>
                    <TimeText>{time}</TimeText>
                  </TimeView>
                </MainView>
              </TalkView>
            );
          })}
        </TalkList>
      </ScrollContainer>
      <TalkContainer>
        <TalkInputView>
          <TalkInput placeholder="메시지를 입력해 주세요." value={text} onChangeText={onChangeText}></TalkInput>
          {text.length !== 0 && (
            <TalkBtn onPress={onPressBtn}>
              <UpArrow fill={colors.white} />
            </TalkBtn>
          )}
        </TalkInputView>
      </TalkContainer>
    </>
  );
};

const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
  border-top-width: 1px;
  border-top-color: ${colors.grey5};
`;
const TalkList = styled.View`
  padding: 16px;
  gap: 8px;
`;
const TalkView = styled.View``;
const DateView = styled.View`
  align-items: center;
  justify-content: center;
  margin: 8px auto 12px;
  width: 200px;
  height: 20px;
  border-radius: 50px;
  background-color: ${colors.choice};
`;
const DateText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  color: ${colors.mainText};
`;
const MainView = styled.View`
  flex-direction: row;
  gap: 8px;
`;
const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
`;
const Nickname = styled.Text`
  margin-left: 40px;
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
const ContentView = styled.View`
  max-width: 72%;
  padding: 8px;
  border: 1px solid ${colors.grey5};
  border-radius: 6px;
`;
const ContentText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.black};
`;
const TimeView = styled.View`
  justify-content: flex-end;
`;
const TimeText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.grey2};
`;
const TalkContainer = styled.View`
  padding: 8px;
  height: 56px;
  background-color: ${colors.white};
`;
const TalkInputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 8px 16px;
  border-radius: 24px;
  background-color: ${colors.grey6};
`;
const TalkInput = styled.TextInput`
  width: 80%;
`;
const TalkBtn = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: ${colors.primary};
`;

export default UsTalkTab;
