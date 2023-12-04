import styled from "styled-components/native";
import { colors } from "../../assets/color";
import ReadNovelPost from "./ReadNovelPost";

const datas = [
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "작가명",
    allWriter: 7,
  },
  {
    title: "가나다라마바사파하아댜죠",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU",
    writer: "마지막",
    allWriter: 7,
  },
];

const ReadNovelTab = () => {
  return (
    <Container>
      {datas.map((data, idx) => {
        return <ReadNovelPost data={data} key={idx} idx={idx} />;
      })}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export default ReadNovelTab;
