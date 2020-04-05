import { TextInput } from 'react-native';
import styled from 'styled-components';
import { compose,color,size,space,border,typography,shadow,borderRadius,position,flexbox} from 'styled-system';

import theme from '../utils/theme'

const Input = styled(TextInput).attrs(props=>({
   placeholderTextColor:  theme.colors[props.placeholderTextColor]
}))(
    compose(typography,space,color,size,flexbox,border,shadow,borderRadius,position)
)

export default Input