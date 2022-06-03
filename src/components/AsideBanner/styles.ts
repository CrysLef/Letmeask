import { styled } from 'styles/theme';

export const Aside = styled('aside', {
    flex: 7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primary',
    color: '$white',
    overflow: 'hidden',
    paddingTop: 120,
    paddingBottom: 90,
 
    '@media (max-width: 1024px)': {
       display: 'none'
    }
})

export const Image = styled('img', {
    minWidth: 315,
    height: '100%',
})

export const Strong = styled('strong', {
    fontSize: '3.6rem',
    fontWeight: '700',
    fontFamily: `$poppins`,
})

export const Text = styled('p', {
    fontSize: '2.4rem',
    marginTop: 8
})
