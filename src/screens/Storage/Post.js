import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Arrow from "../../assets/icons/xs_arrow.svg";
import { useNavigation } from "@react-navigation/native";

const Post = (props) => {
  const { data, idx, edit, check, handleDeleteNovels, viewed } = props;
  const { title, thumbnail, mainAuthor, joinedAuthor } = data;
  const navigation = useNavigation();
  const onClickNovel = () => {
    if (edit) {
      handleDeleteNovels();
    } else if (viewed) {
      navigation.navigate("NovelStack", { screen: "NovelViewer" });
    } else {
      navigation.navigate("NovelStack", { screen: "NovelIndex" });
    }
  };

  return (
    <Container style={idx === 0 && { borderTopWidth: 0 }} onPress={onClickNovel}>
      {edit && <RadioButton>{check && <Check />}</RadioButton>}
      <Thumbnail>
        <ThumbnailImage src={thumbnail} />
      </Thumbnail>
      <Description>
        <Title>{title}</Title>
        <Writer>
          {joinedAuthor !== 0 ? `${mainAuthor.nickname} 외 ${joinedAuthor}명 참여중` : `${mainAuthor.nickname} 참여중`}
        </Writer>
        {/* {viewed ? } */}
      </Description>
      {!edit && (
        <ContinuationBtn>
          <ContinuationBtnText>{viewed ? "이어보기" : "바로가기"}</ContinuationBtnText>
          <Arrow />
        </ContinuationBtn>
      )}
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
const RadioButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid ${colors.grey2};
`;
const Check = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${colors.primary};
  border-radius: 50px;
`;

export default Post;
