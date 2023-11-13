import styled from "styled-components/native";
import Arrow from "../../assets/Icons/angle arrow left.svg";
import Check from "../../assets/Icons/check.svg";
import { colors } from "../../assets/color";
import { fontSize, fontWeight } from "../../assets/font";
import { useState } from "react";
import Plus from "../../assets/Icons/image plus.svg";
import ImagePicker from "react-native-image-picker";

const EditProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nickname, setNickname] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [showJoinNovel, setShowJoinNovel] = useState(true);
  const [showCollection, setShowCollection] = useState(false);
  const onChangeNickname = (value) => {
    setNickname(value);
  };
  const onChangeIntroduce = (value) => {
    setIntroduce(value);
  };
  const onToggleJoinNovel = () => {
    setShowJoinNovel(!showJoinNovel);
  };
  const onToggleCollection = () => {
    setShowCollection(!showCollection);
  };
  const pickImage = () => {
    /* ImagePicker.showImagePicker({ title: "Select Image" }, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        setSelectedImage(response);
      }
    }); */
  };

  return (
    <Container>
      <TitleView>
        <ReturnBtn>
          <Arrow />
        </ReturnBtn>
        <Title>
          <TitleText>프로필</TitleText>
        </Title>
        <LayoutView></LayoutView>
      </TitleView>
      <EditView>
        <EditImageBtn onPress={pickImage} activeOpacity={1}>
          {selectedImage ? <ProfileImage src={selectedImage.url} /> : <Plus />}
        </EditImageBtn>
        <EditInfoView>
          <EditInputView>
            <EditText>닉네임</EditText>
            <EditInput value={nickname} onChangeText={onChangeNickname} />
          </EditInputView>
          <EditInputView>
            <EditText>소개</EditText>
            <EditInput value={introduce} onChangeText={onChangeIntroduce} />
          </EditInputView>
          <EditSelectView>
            <Select>
              <SelectTitle>참여 작품</SelectTitle>
              <SelectView>
                <CheckBox
                  activeOpacity={1}
                  style={
                    showJoinNovel ? { backgroundColor: colors.primary } : { borderWidth: 1, borderColor: colors.grey2 }
                  }
                  onPress={onToggleJoinNovel}
                >
                  {showJoinNovel && <Check />}
                </CheckBox>
                <Label>비공개</Label>
              </SelectView>
            </Select>
            <Separator />
            <Select>
              <SelectTitle>소설 컬렉션</SelectTitle>
              <SelectView>
                <CheckBox
                  activeOpacity={1}
                  style={
                    showCollection ? { backgroundColor: colors.primary } : { borderWidth: 1, borderColor: colors.grey2 }
                  }
                  onPress={onToggleCollection}
                >
                  {showCollection && <Check />}
                </CheckBox>
                <Label>비공개</Label>
              </SelectView>
            </Select>
          </EditSelectView>
        </EditInfoView>
      </EditView>
      <Buttons>
        <SavePreviewView>
          <Button>
            <ButtonText>저장</ButtonText>
          </Button>
          <Button>
            <ButtonText>미리보기</ButtonText>
          </Button>
        </SavePreviewView>
        <Button>
          <ButtonText>초기화</ButtonText>
        </Button>
      </Buttons>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
`;
const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
`;
const ReturnBtn = styled.TouchableOpacity`
  width: 27px;
`;
const Title = styled.View`
  height: 32px;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.Text`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.bold};
  line-height: 22px;
  color: ${colors.mainText};
`;
const LayoutView = styled.View`
  width: 27px;
  height: 32px;
`;
const EditView = styled.View`
  align-items: center;
  gap: 24px;
  padding: 16px 24px;
`;
const EditImageBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${colors.grey5};
  border-radius: 50px;
  overflow: hidden;
`;
const ProfileImage = styled.Image``;
const EditInfoView = styled.View`
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;
const EditInputView = styled.View``;
const EditInput = styled.TextInput`
  padding: 8px 0 4px 4px;
  height: 34px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey5};
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
const EditText = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.mainText};
`;
const EditSelectView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 56px;
  margin: auto;
`;
const Select = styled.View`
  gap: 8px;
`;
const SelectTitle = styled.Text`
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  line-height: 22px;
  color: ${colors.mainText};
`;
const SelectView = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CheckBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Label = styled.Text`
  padding: 2px 8px;
  font-size: ${fontSize.body3};
  font-weight: ${fontWeight.regular};
  color: ${colors.mainText};
`;
const Separator = styled.View`
  width: 1px;
  height: 16px;
  background-color: ${colors.grey5};
`;
const Buttons = styled.View`
  gap: 24px;
`;
const SavePreviewView = styled.View``;
const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 38px;
`;
const ButtonText = styled.Text`
  font-size: ${fontSize.body2};
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  color: ${colors.grey2};
`;
export default EditProfileScreen;
