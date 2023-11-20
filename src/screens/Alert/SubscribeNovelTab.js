import styled from "styled-components/native";
import { colors } from "../../assets/color";
import AlertPost from "./AlertPost";

const datas = [
  {
    type: "like",
    title: "국가는 청원에 대하여 심사할 의무를 진다.",
    date: "2023.02.01",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
    nickname: "**",
  },
  {
    type: "update",
    title: "어느날 어쩌고 저쩌고",
    date: "2023.02.01",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
    episode: 5,
  },
  {
    type: "subscribe",
    title: "국가는 청원에 대하여 심사할 의무를 진다.",
    date: "2023.02.01",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
    nickname: "silver",
  },
  {
    type: "add",
    title: "어느날 어쩌고 저쩌고",
    date: "2023.02.01",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
  },
  {
    type: "like",
    title: "국가는 청원에 대하여 심사할 의무를 진다.",
    date: "2023.02.01",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
    nickname: "**",
  },
  {
    type: "update",
    title: "어느날 어쩌고 저쩌고",
    date: "2023.02.01",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
    episode: 5,
  },
  {
    type: "subscribe",
    title: "국가는 청원에 대하여 심사할 의무를 진다.",
    date: "2023.02.01",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
    nickname: "silver",
  },
  {
    type: "add",
    title: "어느날 어쩌고 저쩌고",
    date: "2023.02.01",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
  },
];

const SubscribeNovelTab = () => {
  return (
    <Container>
      {datas.map((data, idx) => {
        return <AlertPost data={data} idx={idx} key={idx} />;
      })}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export default SubscribeNovelTab;
