import * as React from 'react';
import { View} from 'react-native';

import Button from './button';
import Box from './box';
import SvgSearch from './icons/search';
import SvgRotate from './icons/rotate';
import SvgBookmark from './icons/bookmark';

import theme from '../utils/theme';




function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
     

        return isFocused ? (
            <Box key={label} p={15} bg='white' mt={-15} borderRadius='full'>
                <Button  size={56}  bg='blue' borderRadius='full'  onPress={onPress} onLongPress={onLongPress}>
                <SvgSearch stroke='white'></SvgSearch>
                </Button>
            </Box>
        ) : 
        (
          <Button key={label} flex={1} flexDirection='column' pt={6} height={56} onPress={onPress} onLongPress={onLongPress}>
            {label === 'History' &&  <SvgRotate stroke={theme.colors.gray}></SvgRotate>}
            {label === 'Favorite' &&  <SvgBookmark stroke={theme.colors.gray}></SvgBookmark>}
            {label === 'Home' &&  <SvgBookmark stroke={theme.colors.gray}></SvgBookmark>}
            {label === 'Search' && !isFocused &&  <SvgSearch stroke={theme.colors.gray}></SvgSearch>}
            <Box size={4} bg={isFocused ? 'blue' : 'white'} mt={6} borderRadius='full' ></Box>
          </Button>
        )
      })}
    </View>
  );
}

export default TabBar;