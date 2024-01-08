import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import UploadePostImg from "../../assets/CreateNovel/createPostIcon.svg";
import OpenClose from "../../assets/icons/s_arrow.svg";
import BeforeCheck from "../../assets/CreateNovel/checkBefore.svg";
import AfterCheck from "../../assets/CreateNovel/checkAfter.svg";
import { genreData, hashtagData } from "../../data/NovelData";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../assets/color";
import LeftArrow from "../../assets/icons/angle arrow left.svg";
import { fontSize, fontWeight } from "../../assets/font";
import CancelModal from "./CancelModal";

const NewNevelScreen = ({ navigation }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [novelName, setNovelName] = useState("");
  const [novelInfo, setNovelInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [tagOpen, setTagOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const [selectTags, setSelectTags] = useState([]);
  const [selectGenre, setSelectGenre] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [complete, setComplete] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const uploadImage = async () => {
    // 권한 확인 코드: 권한이 없을 경우 물어보고, 승인하지 않을 경우 코드를 종료함
    if (!status?.granted) {
      const premission = await requestPermission();
      if (!premission.granted) {
        return null;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });

    if (result.canceled) {
      return null; //이미지 업로드를 취소한 경우
    }

    setImageUrl(result.assets[0].uri);
    // 이미지 업로드 결과 및 이미지 경로 업데이트
  };

  const onClickToggleTag = (tag) => {
    if (selectTags.includes(tag)) {
      setSelectTags(selectTags.filter((selectTag) => selectTag !== tag));
    } else {
      setSelectTags([...selectTags, tag]);
    }
  };

  const onClickToggleGenre = (genre) => {
    if (selectGenre.includes(genre)) {
      // 이미 선택된 경우, 선택 해제
      setSelectGenre([]);
    } else {
      // 선택되지 않은 경우, 현재 선택된 장르로 대체
      setSelectGenre([genre]);
    }
  };

  const onClickNovelLimit = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  const onClickResister = () => {
    if (!complete) return;
  };
  const onClickReturn = () => {
    setIsVisibleModal(true);
  };
  const onCloseModal = () => {
    setIsVisibleModal(false);
  };
  const onGoReturn = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (
      imageUrl.length &&
      novelName.length &&
      novelInfo.length &&
      userInfo.length &&
      selectTags.length &&
      selectGenre.length &&
      selectedOption
    ) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [imageUrl, novelName, novelInfo, userInfo, selectTags, selectGenre, selectedOption]);

  return (
    <>
      <CancelModal isVisible={isVisibleModal} onCloseModal={onCloseModal} onGoReturn={onGoReturn} />
      <TopBar>
        <CloseButton onPress={onClickReturn}>
          <LeftArrow />
        </CloseButton>
        <TitleText>작품생성</TitleText>
        <EmptyBox />
      </TopBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: colors.white }}
        onPress={() => keyboard.dismiss()}
      >
        <Container>
          <NewPostImgBox>
            <TouchableOpacity onPress={uploadImage}>
              {imageUrl ? <SelectPostImg source={{ uri: imageUrl }} /> : <UploadePostImg />}
            </TouchableOpacity>
          </NewPostImgBox>
          <NewPostDetailBox>
            <InputBox>
              <NewPostTitle>
                <Text style={{ color: "rgba(243, 17, 17, 1)" }}>*</Text>
                제목
              </NewPostTitle>
              <NewPostInput
                value={novelName}
                placeholder="제목을 입력해 주세요."
                placeholderTextColor={colors.grey3}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={16}
                multiline={true}
                returnKeyType="next"
                onChangeText={(text) => setNovelName(text)}
              />
              <InputLimitBox>
                <InputLimitText>{novelName ? novelName.length : 0}/16</InputLimitText>
              </InputLimitBox>
            </InputBox>
            <InputBox>
              <NewPostTitle>
                <Text style={{ color: "rgba(243, 17, 17, 1)" }}>*</Text>
                작품 소개
              </NewPostTitle>
              <NewPostInput
                value={novelInfo}
                placeholder="소개를 입력해 주세요."
                placeholderTextColor={colors.grey3}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                multiline={true}
                maxLength={300}
                returnKeyType="done"
                onChangeText={(text) => setNovelInfo(text)}
              />
              <InputLimitBox>
                <InputLimitText>{novelInfo ? novelInfo.length : 0}/300</InputLimitText>
              </InputLimitBox>
            </InputBox>
            <InputBox>
              <NewPostTitle>
                <Text style={{ color: "rgba(243, 17, 17, 1)" }}>*</Text>
                작가 소개
              </NewPostTitle>
              <NewPostInput
                value={userInfo}
                placeholder="소개를 입력해 주세요."
                placeholderTextColor={colors.grey3}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                multiline={true}
                maxLength={300}
                returnKeyType={"done"}
                onChangeText={(text) => setUserInfo(text)}
              />
              <InputLimitBox>
                <InputLimitText>{userInfo ? userInfo.length : 0}/300</InputLimitText>
              </InputLimitBox>
            </InputBox>

            <InputBox>
              <TagBox>
                <NewPostTitle>
                  <Text style={{ color: "rgba(243, 17, 17, 1)" }}>*</Text>
                  장르 (1개 선택)
                </NewPostTitle>
                <OpenIconBox onPress={() => setGenreOpen(!genreOpen)}>
                  <OpenClose
                    width={24}
                    height={24}
                    style={{
                      transform: [{ rotate: genreOpen === false ? "90deg" : "270deg" }],
                    }}
                  />
                </OpenIconBox>
              </TagBox>
              <TagSelectBox style={{ flexWrap: genreOpen ? "wrap" : "nowrap" }}>
                {genreOpen
                  ? genreData.map((d, id) => (
                      <NovelGenre
                        key={id}
                        selected={selectGenre.includes(d.genre)}
                        onPress={() => onClickToggleGenre(d.genre)}
                      >
                        <NovelGenreText selected={selectGenre.includes(d.genre)}>#{d.genre}</NovelGenreText>
                      </NovelGenre>
                    ))
                  : genreData.slice(0, 4).map((d, id) => (
                      <NovelGenre
                        key={id}
                        selected={selectGenre.includes(d.genre)}
                        onPress={() => onClickToggleGenre(d.genre)}
                      >
                        <NovelGenreText selected={selectGenre.includes(d.genre)}>#{d.genre}</NovelGenreText>
                      </NovelGenre>
                    ))}
              </TagSelectBox>
            </InputBox>

            <InputBox>
              <TagBox>
                <NewPostTitle>
                  <Text style={{ color: "rgba(243, 17, 17, 1)" }}>*</Text>
                  태그 (최대 8개)
                </NewPostTitle>
                <OpenIconBox onPress={() => setTagOpen(!tagOpen)}>
                  <OpenClose
                    width={24}
                    height={24}
                    style={{
                      transform: [{ rotate: tagOpen === false ? "90deg" : "270deg" }],
                    }}
                  />
                </OpenIconBox>
              </TagBox>
              <TagSelectBox style={{ flexWrap: tagOpen ? "wrap" : "nowrap" }}>
                {tagOpen
                  ? hashtagData.map((d, id) => (
                      <NovelHashtag
                        key={id}
                        selected={selectTags.includes(d.tag)}
                        onPress={() => onClickToggleTag(d.tag)}
                      >
                        <NovelHashtagText selected={selectTags.includes(d.tag)}>#{d.tag}</NovelHashtagText>
                      </NovelHashtag>
                    ))
                  : hashtagData.slice(0, 4).map((d, id) => (
                      <NovelHashtag
                        key={id}
                        selected={selectTags.includes(d.tag)}
                        onPress={() => onClickToggleTag(d.tag)}
                      >
                        <NovelHashtagText selected={selectTags.includes(d.tag)}>#{d.tag}</NovelHashtagText>
                      </NovelHashtag>
                    ))}
              </TagSelectBox>
            </InputBox>

            <InputBox>
              <NewPostTitle>
                <Text style={{ color: "rgba(243, 17, 17, 1)" }}>*</Text>
                소설 총 분류 제한
              </NewPostTitle>
              <CheckBox>
                <CheckBtn onPress={() => onClickNovelLimit("short")}>
                  {selectedOption === "short" ? <AfterCheck /> : <BeforeCheck />}
                  <CheckTitle>단편소설(5만자 이내)</CheckTitle>
                </CheckBtn>
                <CheckBtn onPress={() => onClickNovelLimit("long")}>
                  {selectedOption === "long" ? <AfterCheck /> : <BeforeCheck />}
                  <CheckTitle>장편소설(20만자 이내)</CheckTitle>
                </CheckBtn>
              </CheckBox>
            </InputBox>
          </NewPostDetailBox>
        </Container>
        <ButtonBox>
          <ResisterBtn style={complete && { backgroundColor: colors.primary }}>
            <BtnText style={complete && { color: colors.white }}>등록하기</BtnText>
          </ResisterBtn>
        </ButtonBox>
      </ScrollView>
    </>
  );
};

const TopBar = styled.View`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
  height: 40px;
  border-bottom-color: ${colors.grey6};
  border-bottom-width: 1px;
  background-color: ${colors.white};
`;
const CloseButton = styled.TouchableOpacity``;
const TitleText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const EmptyBox = styled.View`
  width: 24px;
  height: 24px;
`;
const Container = styled.View`
  align-items: center;
`;
const NewPostImgBox = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(241, 241, 241, 1);
  margin-top: 16px;
  margin-bottom: 30px;
  width: 216px;
  height: 260px;
  border-radius: 8px;
`;

const SelectPostImg = styled.Image`
  width: 216px;
  height: 260px;
  border-radius: 8px;
`;

const NewPostDetailBox = styled.View`
  gap: 24px;
  padding: 0 16px;
  width: 100%;
`;

const InputBox = styled.View`
  width: 100%;
`;

const NewPostTitle = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: rgba(32, 32, 32, 1);
`;

const NewPostInput = styled.TextInput`
  padding: 4px 8px;
  border-bottom-color: rgba(225, 225, 225, 1);
  border-bottom-width: 1px;
  height: 32px;
  padding-right: 70px;
`;

const InputLimitBox = styled.View`
  position: absolute;
  bottom: 4px;
  right: 8px;
`;

const InputLimitText = styled.Text`
  color: rgba(200, 200, 200, 1);
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
`;

const TagBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const OpenIconBox = styled.TouchableOpacity``;

const TagSelectBox = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;

const NovelHashtag = styled.TouchableOpacity`
  justify-content: center;
  padding: 2px 4px;
  height: 32px;
  background-color: ${(props) => (props.selected ? colors.primary : "white")};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props) => (props.selected ? colors.primary : colors.grey3)};
  box-sizing: border-box;
`;

const NovelHashtagText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: ${(props) => (props.selected ? colors.white : colors.grey1)};
`;

const NovelGenre = styled.TouchableOpacity`
  justify-content: center;
  padding: 2px 4px;
  height: 32px;
  background-color: ${(props) => (props.selected ? colors.primary : "white")};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props) => (props.selected ? colors.primary : colors.grey3)};
  box-sizing: border-box;
`;

const NovelGenreText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: ${(props) => (props.selected ? colors.white : colors.grey1)};
`;

const CheckBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;

const CheckBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const CheckTitle = styled.Text`
  margin-left: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
const ButtonBox = styled.View`
  padding: 92px 18px 16px;
`;
const ResisterBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: ${colors.grey5};
`;
const BtnText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: ${colors.mainText};
`;

export default NewNevelScreen;
