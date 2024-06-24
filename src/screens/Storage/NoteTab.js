import styled from "styled-components/native";
import { colors } from "../../assets/color";
import { useEffect, useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import ChangeIcon from "../../assets/icons/arrows up and down.svg";
import Post from "./Post";
import { jsonConfig } from "../../api/axios";

const NoteTab = () => {
  const [search, setSearch] = useState(false);
  const [edit, setEdit] = useState(false);
  const [datas, setDatas] = useState(null);
  const [text, setText] = useState("");
  const types = { 내가쓴글: "viewed", 내가투표한글: "created", 내가좋아요한글: "joined" };
  const [selected, setSelected] = useState(0);
  const [deleteNovels, setDeleteNovels] = useState({});
  const editNovels = (title) => {
    console.log(deleteNovels[title]);
    const prevDeleteNovels = { ...deleteNovels };
    if (deleteNovels[title]) {
      prevDeleteNovels[title] = false;
      setDeleteNovels(prevDeleteNovels);
    } else {
      prevDeleteNovels[title] = true;
      setDeleteNovels(prevDeleteNovels);
    }
  };
  const getDatas = async (link) => {
    const response = await jsonConfig("get", `/bookshelf/${link}`);
    setDatas(response.data.data.novelPreviews);
  };

  useEffect(() => {
    getDatas("viewed");
  }, [setDatas]);

  const onClickButton = async (type, num) => {
    setSelected(num);
    setDatas(null);
    setEdit(false);
    setDeleteNovels({});
    await getDatas(types[type]);
  };
  const onChangeText = (value) => {
    setText(value);
  };

  return (
    <Container>
      <SearchBar>
        <SearchBtn onPress={() => setSearch(!search)}>
          <SearchIcon />
        </SearchBtn>
        <Border />
        {search ? (
          <InputView>
            <Input
              placeholder="제목, 작가를 입력해 주세요."
              value={text}
              onChangeText={onChangeText}
              placeholderTextColor={colors.grey3}
              returnKeyType="search"
              onSubmitEditing
            />
          </InputView>
        ) : (
          <Buttons>
            {Object.keys(types).map((type, idx) => (
              <Button key={idx} selected={idx === selected} onPress={() => onClickButton(type, idx)}>
                <BtnText selected={idx === selected}>{type}</BtnText>
              </Button>
            ))}
          </Buttons>
        )}
      </SearchBar>
      <Info>
        <InfoView>
          <InfoLeftText>{`999개`}</InfoLeftText>
          <EditBtn
            onPress={() => {
              console.log("click");
              setEdit(true);
            }}
          >
            <InfoLeftText>편집</InfoLeftText>
          </EditBtn>
        </InfoView>
        {edit ? (
          <Order
            onPress={() => {
              setEdit(false);
              setDeleteNovels({});
            }}
          >
            <InfoRightText>취소</InfoRightText>
          </Order>
        ) : (
          <Order>
            <ChangeIcon />
            <InfoRightText>최신순</InfoRightText>
          </Order>
        )}
      </Info>
      <ScrollContainer>
        {datas &&
          datas.map((data, idx) => {
            return (
              <Post
                data={data}
                key={idx}
                idx={idx}
                edit={edit}
                check={deleteNovels[data.title]}
                handleDeleteNovels={() => {
                  editNovels(data.title);
                }}
              />
            );
          })}
      </ScrollContainer>
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
  padding: 4px 0;
  height: 40px;
  border-bottom-width: 1px;
  border-color: ${colors.grey4};
`;

const SearchBtn = styled.TouchableOpacity`
  padding: 0 8px;
`;

const Border = styled.View`
  width: 1px;
  height: 16px;
  background-color: ${colors.grey4};
`;

const InputView = styled.View`
  padding: 4px 8px;
  width: 288px;
  border-radius: 24px;
  background-color: ${colors.grey6};
`;
const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  color: ${colors.mainText};
`;

const Buttons = styled.View`
  flex-direction: row;
  gap: 4px;
  height: 28px;
  background-color: ${colors.white};
`;

const Button = styled.TouchableOpacity`
  padding: 0 8px;
  border-radius: 29px;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => (selected ? colors.heavy : "transparent")};
`;

const BtnText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ selected }) => (selected ? colors.white : colors.mainText)};
`;

const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding: 0 10.5px;
`;

const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InfoLeftText = styled.Text`
  padding: 0 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.black};
`;

const EditBtn = styled.TouchableOpacity`
  border-radius: 2px;
  background-color: ${colors.grey5};
`;

const Order = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 32px;
`;

const InfoRightText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${colors.black};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export default NoteTab;
