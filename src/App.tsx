import { AppRoutes } from "routes";
import { GlobalStyle } from "styles/globalStyle";


function App() {
  return (
    <>
      { GlobalStyle() }
      <AppRoutes />
    </>
  );
}

export default App;
