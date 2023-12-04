import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Arrow from "../../assets/icons/xs_arrow.svg";

const ReadNovelPost = (props) => {
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
      <ContinuationBtn>
        <ContinuationBtnText>이어보기</ContinuationBtnText>
        <Arrow />
      </ContinuationBtn>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  height: 112px;
  border-color: ${colors.grey5};
  border-top-width: 1px;
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
const ContinuationBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 0;
`;
const ContinuationBtnText = styled.Text`
  font-weight: ${fontWeight.medium};
  font-size: 10px;
`;

export default ReadNovelPost;
