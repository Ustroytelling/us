import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";

const LikeNovelPost = (props) => {
  const { data, idx } = props;
  const { title, image, writer, allWriter } = data;

  return (
    <Container style={idx === 0 && { borderTopWidth: 0 }}>
      <Thumbnail>
        <ThumbnailImage src={image} />
      </Thumbnail>
      <Description>
        <Title>{title}</Title>
        <Writer>{`${writer} 외 ${allWriter}명 참여중`}</Writer>
      </Description>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  height: 96px;
  border-color: ${colors.grey5};
  border-top-width: 1px;
`;
const Thumbnail = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-color: ${colors.grey5};
  overflow: hidden;
`;
const ThumbnailImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const Description = styled.View`
  flex: 1;
`;
const Title = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.mainText};
`;
const Writer = styled.Text`
  font-size: 12px;
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;

export default LikeNovelPost;
