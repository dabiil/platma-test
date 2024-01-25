import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'src/App';
import { GlobalThemeProvider, SnackBarProvider } from 'src/providers';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <SnackBarProvider>
        <App />
      </SnackBarProvider>
    </GlobalThemeProvider>
  </React.StrictMode>,
);
