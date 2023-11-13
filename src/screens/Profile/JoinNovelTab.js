import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Private from "../../assets/Icons/private.svg";
import { useState } from "react";

const results = [
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "마지막",
    allWriter: 7,
    rating: 4.5,
    counts: 1046,
  },
];

const JoinNovelTab = () => {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <Container>
      {isPublic ? (
        results.map((result, idx) => {
          return (
            <Result key={idx} style={idx !== 0 && { borderTopWidth: 1, borderTopColor: colors.grey6 }}>
              <Thumbnail>
                <ThumbnailImage src={result.image} />
              </Thumbnail>
              <Description>
                <Title>{result.title}</Title>
                <Writer>{`${result.writer} 외 ${result.allWriter}명 참여중`}</Writer>
              </Description>
            </Result>
          );
        })
      ) : (
        <PrivateView>
          <Private />
          <PrivateText>비공개</PrivateText>
        </PrivateView>
      )}
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: ${colors.white};
  padding: 0 24px;
`;
const Result = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
`;
const Thumbnail = styled.View`
  width: 56px;
  height: 80px;
  border-radius: 4px;
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
const PrivateView = styled.View`
  margin-top: 24px;
  align-items: center;
`;
const PrivateText = styled.Text`
  font-size: 11px;
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.grey2};
`;

export default JoinNovelTab;
