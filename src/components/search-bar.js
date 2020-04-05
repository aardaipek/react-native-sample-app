import * as React from "react";
import { Keyboard} from "react-native"
import Box from "./box";
import Text from "./text";
import Button from "./button";
import Input from "./input";
import SvgSearch from "./icons/search";

import theme from "../utils/theme";

function SearchBar() {
  const [isFocus, setFocus] = React.useState(false);

  const onFocus = (e) => {
    setFocus(true);
  };

  const onCancel = () => {
    setFocus(false);
      Keyboard.dismiss();
  }

  return (
    <Box position="relative" flexDirection="row" alignItems="center">
      <Input
        style={{
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowColor: "#000",
            shadowOffset: {width: 0,height: 4,},}}
        flex={1}
        height={52}
        placeholder="Kategorilerde Ara"
        placeholderTextColor="gray"
        color="textDark"
        bg="white"
        p={15}
        pl={52}
        onFocus = {()=> setFocus(true)}
      ></Input>
      <Box position="absolute" zIndex={1} left={16} top={12}>
        <SvgSearch color={theme.colors.gray}></SvgSearch>
      </Box>
      {isFocus && (
        <Button onPress= {()=> setFocus(false)} px={20} height={52}>
        <Text>Vazgeç</Text>
      </Button>
      )}
    </Box>
  );
}

export default SearchBar;
