import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      primary: '#835AFD',
      text: '#29292E',
      background: '#F8F8F8',

      grayMedium: '#A8A8B3',
      grayDark: '#737380',
      grayLight: '#DBDCDD',

      whiteDetails: '#FEFEFE',
      white: '#FFF',
      whiteDividerHeader: '#E2E2E2',
      
      danger: '#E73F5D',
      pink: '#E559F9',

      hoverDanger: '#D73754',
      hoverPrimary: '#6F4BD8',
      hoverGrayMedium: '#7E7E86',
      hoverGrayLight: '#CECECE' 
    },
    fonts: {
      roboto: 'Roboto, sans-serif',
      poppins: 'Poppins, sans-serif'
    }
  },
  utils: {
    mx: (value: any) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: any) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    size: (value: any) => ({
      width: value,
      height: value,
    })
  }
})