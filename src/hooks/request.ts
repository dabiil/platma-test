import { useEffect, useState } from 'react';

import { fetch } from 'src/api';
import { Method } from 'src/constants/api';

type IRequestListHookResponse<T> = [T[], boolean, boolean];

export const useRequestList = <T>(url: string): IRequestListHookResponse<T> => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    (async () => {
      setData([]);
      setIsLoading(true);
      setIsError(false);
      const response = await fetch<T[]>({
        method: Method.Get,
        snack: false,
        url,
      });

      if (response) {
        setData(response);
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return [data, isLoading, isError];
};
