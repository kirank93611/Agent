import { useRoutes } from 'react-router-dom';
import { ThemeProvider,CssBaseline } from '@emotion/react';
import theme from "./theme"
import routes from "./routes/index"

import Login from './views/Login';

function App() {
  const content=useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
  );
}

export default App;
