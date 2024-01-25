import { Box, Drawer } from '@mui/material';

import { Actions } from 'components/Actions';
import { DataTable } from 'components/DataTable';

import { EntitySchema, EntityType, IAction } from 'src/types';

interface IEntityControllerProps {
  name: EntityType;
  schema: EntitySchema;
  actions: IAction[];
  itemsUrl: string;
}

const drawerWidth = '300px';

export const EntityController: React.FC<IEntityControllerProps> = ({ schema, name, itemsUrl, actions }) => (
  <>
    <Drawer
      anchor='left'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          marginTop: '105px',
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
    >
      <Actions actions={actions} />
    </Drawer>
    <Box
      sx={{
        marginLeft: drawerWidth,
      }}
    >
      <DataTable key={name} schema={schema} url={itemsUrl} />
    </Box>
  </>
);
