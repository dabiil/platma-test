import { GridColDef } from '@mui/x-data-grid';

export const getColumnStyles = (format?: 'int64' | 'email'): Partial<GridColDef> => {
  if (format === 'int64') {
    return {
      width: 100,
      flex: 0,
      align: 'center',
    };
  }

  if (format === 'email') {
    return {
      width: 300,
      flex: 0,
    };
  }

  return {};
};
