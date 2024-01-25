import { SnackbarProvider as NotistackProvider } from 'notistack';

export const SnackBarProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NotistackProvider maxSnack={3}>{children}</NotistackProvider>
);
