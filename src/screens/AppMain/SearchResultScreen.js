import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import Search from "../../assets/icons/search.svg";
import Arrow from "../../assets/icons/big-arrow.svg";
import { useEffect, useState } from "react";
import Star from "../../assets/icons/Star 1.svg";
import { jsonConfig } from "../../api/axios";

const SearchResultScreen = ({ navigation, route }) => {
  const [page, setPage] = useState(0);
  const [text, setText] = useState(route.params);
  const [searchText, setSearchText] = useState(route.params);
  const [datas, setDatas] = useState(null);
  const onChangeText = (value) => {
    setText(value);
  };
  const handleSubmit = () => {
    setSearchText(text);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await jsonConfig("get", `novel/search/${page}`, undefined, {
          keyword: searchText,
          nextPage: page,
        });
        const data = response.data.data;
        console.log(data);
        setDatas(data.novelSimpleInfos);
        if (data.hasNext) setPage(data.nextPage);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [searchText]);

  return (
    <Container>
      <SearchBar>
        <ReturnBtn onPress={() => navigation.goBack()}>
          <Arrow />
        </ReturnBtn>
        <InputView>
          <Search fill={colors.grey2} />
          <SearchInput
            placeholder="제목, 작가, 태그를 입력해 주세요"
            value={text}
            onChangeText={onChangeText}
            placeholderTextColor={colors.grey3}
            returnKeyType="search"
            onSubmitEditing={handleSubmit}
          />
        </InputView>
      </SearchBar>
      <SearchResults>
        <SearchTerm>
          <SearchText>{`“${
            searchText.length > 16 ? searchText.slice(0, 16) + "..." : searchText
          }” 검색 결과`}</SearchText>
        </SearchTerm>
        <ResultsScrollView>
          <ResultList>
            {datas &&
              datas.map((result, idx) => {
                return (
                  <Result key={idx}>
                    <Thumbnail>
                      <ThumbnailImage src={result.image} />
                    </Thumbnail>
                    <Description>
                      <Title>{result.title}</Title>
                      <Writer>
                        {result.joinedAuthorCnt === 0
                          ? `${result.createdAuthor}`
                          : `${result.createdAuthor} 외 ${result.allWriter}명 참여중`}
                      </Writer>
                      <Reviews>
                        <Star />
                        <RatingView>
                          <Rating style={{ color: "#DE2929" }}>{result.score}</Rating>
                          <Rating>{` (${result.commentCnt})`}</Rating>
                        </RatingView>
                      </Reviews>
                    </Description>
                  </Result>
                );
              })}
          </ResultList>
        </ResultsScrollView>
      </SearchResults>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px;
  height: 56px;
  background-color: ${colors.white};
`;
const ReturnBtn = styled.TouchableOpacity``;
const InputView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-radius: 24px;
  background-color: ${colors.grey6};
`;
const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 12px;
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
const SearchResults = styled.View`
  flex: 1;
`;
const SearchTerm = styled.View`
  margin: 0 16px;
  padding: 4px 8px;
  height: 32px;
`;
const SearchText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
`;
const ResultsScrollView = styled.ScrollView`
  flex: 1;
  padding: 0 16px;
`;
const ResultList = styled.View`
  flex: 1;
  gap: 16px;
  padding: 8px 0;
`;
const Result = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  height: 80px;
`;
const Thumbnail = styled.View`
  width: 56px;
  height: 100%;
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
const Reviews = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
const RatingView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 24px;
`;
const Rating = styled.Text`
  font-size: 12px;
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;

export default SearchResultScreen;
