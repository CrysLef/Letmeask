import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            text: string;
            background: string;

            grayMedium: string;
            grayDark: string;
            grayLight: string;
            
            whiteDetails: string;
            white: string,
            whiteDividerHeader: string;
        }
    }
}