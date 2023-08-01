import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { selectDarkTheme } from '../../common/themeSlice';
import { PersonalHomepage } from '../../features/personalHomepage;

export const App = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <Normalize>
        <GlobalStyle />
        <PersonalHomepage />
      </Normalize>
    </ThemeProvider>
  );
}

export default App;
