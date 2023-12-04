import styled from "styled-components/native";
import { colors } from "../../assets/color";
import UsNotePost from "./UsNotePost";

const posts = [
  {
    nickname: "닉네임이긴사람",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content:
      "네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.",
    date: "2023.11.08",
    like: true,
    episode: "주술회전 1화",
  },
  {
    nickname: "뮤",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content:
      "네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.",
    date: "2023.11.08",
    like: false,
    episode: "주술회전 1화",
  },
  {
    nickname: "시리",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTlfMTgx/MDAxNTM5OTI4MjAwNDEx.k7oG-Q0tA6bdI1smaMzsK4t08NREjRrq3OthZKoIz8Qg.BeZxWi7HekwTWipOckbNWpvnesXuHjpldNGA7QppprUg.JPEG.retspe/eb13.jpg?type=w800",
    content:
      "네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.네번째 내용 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.",
    date: "2023.11.08",
    like: true,
    episode: "주술회전 1화",
  },
];

const WrittenPostTab = () => {
  return (
    <Container>
      <ScrollContainer>
        <PostList>
          {posts.map((post, idx) => {
            return <UsNotePost key={idx} post={post} />;
          })}
        </PostList>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
const ScrollContainer = styled.ScrollView`
  background-color: ${colors.white};
  border-top-width: 1px;
  border-top-color: ${colors.grey5};
`;
const PostList = styled.View`
  padding-top: 24px;
`;

export default WrittenPostTab;
