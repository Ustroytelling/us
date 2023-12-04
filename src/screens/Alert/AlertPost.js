import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import { getDiffTime } from "../../utils/getDiffTime";

const AlertPost = (props) => {
  const { data, idx } = props;
  const { type, title, date, image } = data;

  return (
    <Container style={idx !== 0 && { borderTopWidth: 1, borderTopColor: colors.grey5 }}>
      {type === "like" ? (
        <Profile>
          <ProfileImage src={image} />
        </Profile>
      ) : (
        <Thumbnail>
          <ThumbnailImage src={image} />
        </Thumbnail>
      )}
      <Description>
        <Title>{title}</Title>
        {type === "like" && <Phrase>{`${data.nickname}님이 작가님의 문장을 좋아합니다.`}</Phrase>}
        {type === "update" && <Phrase>{`${data.episode}화가 업데이트 되었습니다.`}</Phrase>}
        {type === "subscribe" && <Phrase>{`${data.nickname}님이 작가님의 소설을 구독했습니다.`}</Phrase>}
        {type === "add" && <Phrase>{"소설 문장이 추가되었습니다."}</Phrase>}
        <Date>{getDiffTime(date)}</Date>
      </Description>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 16px 17.5px;
  height: 112px;
`;
const Thumbnail = styled.View`
  width: 64px;
  height: 80px;
  border-radius: 4px;
  background-color: ${colors.grey5};
  overflow: hidden;
`;
const ThumbnailImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const Profile = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-color: ${colors.grey5};
  overflow: hidden;
`;
const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const Description = styled.View`
  gap: 4px;
`;
const Title = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Phrase = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Date = styled.Text`
  font-size: 12px;
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;

export default AlertPost;
