import { AuthContainer, Content, Main, StyledLogo } from './styles'
import { AsideBanner } from 'components/AsideBanner';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';


export const DefaultPage = () => {

  return(
    <AuthContainer>
          <AsideBanner />
          <Main>
            <Content>
              <StyledLogo />
              <Outlet />
            </Content>
            <Toaster />
          </Main>
    </AuthContainer>
  )
}