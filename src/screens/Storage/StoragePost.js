import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";

const StoragePost = (props) => {
  const { data, idx } = props;
  const { title, image, writer, allWriter } = data;

  return (
    <Container style={idx !== 0 && { borderTopWidth: 1, borderTopColor: colors.grey5 }}>
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
const Description = styled.View``;
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

export default StoragePost;
