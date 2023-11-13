import styled from "styled-components/native";
import { useState } from "react";
import { colors } from "../../assets/color";
import Search from "../../assets/Icons/search.svg";
import Arrow from "../../assets/Icons/big-arrow.svg";
import { fontSize, fontWeight } from "../../assets/font";
import XsX from "../../assets/Icons/xs_X.svg";

const terms = ["모든 국민은", "법률이 정하는", "바에 의하여", "공무담임권을 가진다."];
const popularTerms = [
  "국가는 청원에 대하여 심사할 의무를 진다.",
  "국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.",
  "근로조건의 기준은 인간의 존엄성을 보장하도록",
  "법원은 최고법원인 대법원과 각급법원으로 조지고딘다.",
  "법원은 최고법원인 대법원과 각급법원으로 조지고딘다.",
  "국가는 청원에 대하여 심사할 의무를 진다.",
  "국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.",
  "근로조건의 기준은 인간의 존엄성을 보장하도록",
  "법원은 최고법원인 대법원과 각급법원으로 조지고딘다.",
  "법원은 최고법원인 대법원과 각급법원으로 조지고딘다.",
];

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const onChangeText = (value) => {
    setText(value);
  };
  const handleSubmission = () => {
    setSearchText(text);
    setText("");
  };

  return (
    <Container>
      <SearchBar>
        <ReturnBtn>
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
            onSubmitEditing={handleSubmission}
          />
        </InputView>
      </SearchBar>
      <RecentSearchView>
        <Title>최근 검색어</Title>
        <SettingBtns>
          <Button>
            <ButtonText>전체 삭제</ButtonText>
          </Button>
          <Bar>|</Bar>
          <Button>
            <ButtonText>저장기능 끄기</ButtonText>
          </Button>
        </SettingBtns>
      </RecentSearchView>
      <RecentSearchTermView>
        <Terms
          data={terms}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SearchTermButton>
              <Term>{item}</Term>
              <DeleteButton>
                <XsX />
              </DeleteButton>
            </SearchTermButton>
          )}
        />
      </RecentSearchTermView>
      <Horizon />
      <PopularSearchView>
        <Title>인기 검색어</Title>
        <PopularSearchTerms>
          {popularTerms.map((term, idx) => {
            return (
              <PopularSearchTermView key={idx}>
                <RankView>
                  <Rank style={idx < 3 && { color: colors.primary }}>{idx + 1}</Rank>
                </RankView>
                <PopularTermView>
                  <PopularTerm ellipsizeMode="tail" numberOfLines={1}>
                    {term}
                  </PopularTerm>
                </PopularTermView>
              </PopularSearchTermView>
            );
          })}
        </PopularSearchTerms>
      </PopularSearchView>
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
const RecentSearchView = styled.View`
  margin: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const SettingBtns = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.grey2};
`;
const Bar = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.grey6};
`;
const RecentSearchTermView = styled.View``;
const Terms = styled.FlatList`
  flex-direction: row;
  margin-left: 16px;
`;
const SearchTermButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  padding: 1px 8px;
  border-radius: 4px;
  background-color: ${colors.grey6};
`;
const Term = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
const DeleteButton = styled.TouchableOpacity``;
const Horizon = styled.View`
  margin: 16px 20px 16px 22px;
  height: 1px;
  background-color: ${colors.grey6};
`;
const PopularSearchView = styled.View`
  padding: 0 32px 0 16px;
  gap: 16px;
`;
const PopularSearchTerms = styled.View`
  gap: 12px;
`;
const PopularSearchTermView = styled.TouchableOpacity`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;
const RankView = styled.View`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;
const Rank = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
`;
const PopularTermView = styled.View`
  flex: 1;
`;
const PopularTerm = styled.Text`
  font-size: ${fontSize.body4};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
`;

export default SearchScreen;
