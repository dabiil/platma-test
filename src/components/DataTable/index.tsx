import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { capitalize } from 'lodash-es';

import { useRequestList } from 'hooks';

import { EntitySchema } from 'src/types';

import { getColumnStyles } from './helpers';

interface IDataTable {
  schema: EntitySchema;
  url: string;
}

export const DataTable: React.FC<IDataTable> = ({ schema, url }) => {
  const [data, isLoading] = useRequestList<{}>(`/${url}`);

  const columns: GridColDef[] = useMemo(
    () =>
      Object.entries(schema).map<GridColDef>(([key, value]) => ({
        field: key,
        headerName: capitalize(key),
        editable: false,
        flex: 1,
        sortable: false,
        headerAlign: 'center',
        ...getColumnStyles(value.format),
      })),
    [schema],
  );

  return (
    <Box sx={{ margin: '50px 40px' }}>
      <DataGrid
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        loading={isLoading}
        rows={data}
        sx={{ maxHeight: 'calc(100vh - 200px )' }}
      />
    </Box>
  );
};
