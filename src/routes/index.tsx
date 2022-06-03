import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from 'contexts/AuthContext';

import { AdminRoom } from 'pages/AdminRoom';
import { NewRoom } from 'pages/NewRoom';
import { Home } from 'pages/Home';
import { Room } from 'pages/Room';
import { DefaultPage } from 'pages/DefaultPage';
import { DefaultRoom } from 'pages/DefaultRoom';


export const AppRoutes = () => {
  return(
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
            <Route path="/" element={<DefaultPage />} >
              <Route index element={<Home />} />
              <Route path="new" element={<NewRoom />} />
            </Route>
            <Route  path="/rooms" element={<DefaultRoom />} >
              <Route path=":id" element={<Room />} />
              <Route path="admin/:id" element={<AdminRoom />} />
            </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}