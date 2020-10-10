import * as React from 'react';
import { View,Text} from 'react-native';
import Button from './button';
import Box from './box';
import SvgUser from './icons/user';
import SvgHome from './icons/home';
import SvgActivity from './icons/activity';
import theme from '../utils/theme';

import {SourceSansPro_400Regular} from '@expo-google-fonts/source-sans-pro'

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

        return isFocused ?
        (<Box key={label} p={15} bg='white' mt={-10} borderRadius='full'>
                <Button  size={36}  fontFamily={SourceSansPro_400Regular} 
                 bg={theme.colors.cyanGreen} width={label == 'Home' ? label.length * 15 : label.length * 10}
                  borderRadius='full' onPress={onPress} onLongPress={onLongPress}>
                    <Text color= {theme.colors.white} >{label}</Text>
                </Button>
            </Box>
            ) :
            (
          <Button key={label} flex={1} flexDirection='column' pt={6} height={56} onPress={onPress} onLongPress={onLongPress}>
            {label === 'Home' &&  <SvgHome stroke={theme.colors.gray}></SvgHome>}
            {label === 'Activity' &&  <SvgActivity stroke={theme.colors.gray}></SvgActivity>}
            {label === 'Profile' &&  <SvgUser stroke={theme.colors.gray}></SvgUser>}
            <Box size={4} bg={isFocused ? 'blue' : 'white'} mt={6} borderRadius='full' ></Box>
          </Button>
        )
      })}
    </View>
  );
}

export default TabBar;