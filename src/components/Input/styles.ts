import {TextInput} from "react-native";
import styled, {css} from "styled-components/native";

export const Container= styled(TextInput)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_700};
        color: ${theme.COLORS.WHITE};
        font-size:  ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    border-radius: 6px;
    padding: 16px;
`;

// export const Container= styled(TextInput).attrs(({theme}) => ({
//     cursorColor: theme.COLORS.GREEN_700,
//     placeholderTextColor: theme.COLORS.GRAY_400,
// }))`
//     flex: 1;
//     min-height: 56px;
//     max-height: 56px;
//     background-color: ${({theme}) => theme.COLORS.GRAY_700};
//     color: ${({theme}) => theme.COLORS.WHITE};
//     border-radius: 6px;
//     padding: 16px;
// `;