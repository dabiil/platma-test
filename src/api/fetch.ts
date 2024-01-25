import { enqueueSnackbar } from 'notistack';

import { APiUrl, Method } from 'src/constants/api';

interface IFetchOptions {
  url: string;
  method: Method;
  snack?: boolean;
}

export const fetch = async <T>({ method, url, snack = true }: IFetchOptions): Promise<T | null> => {
  try {
    const response = await window.fetch(`${APiUrl}${url}`, { method });

    const data = await response.json();

    if (response.status === 404) {
      enqueueSnackbar('Something happened', { variant: 'error' });
    } else if (snack) {
      enqueueSnackbar('Success (Check console)', { variant: 'success' });
    }

    return data as T;
  } catch (error) {
    console.log(error);
    if (snack) {
      enqueueSnackbar('Something happened', { variant: 'error' });
    }

    return null;
  }
};
