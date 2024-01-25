import { useCallback, useState } from 'react';
import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import { EntityController } from 'components/EntityController';

import { entities } from 'src/constants/entities';
import { EntityType } from 'src/types/entity';

const entitiesOptions = entities.map((x) => (
  <MenuItem key={x.type} value={x.type}>
    {x.label}
  </MenuItem>
));

export const App: React.FC = () => {
  const [selectedEntityType, setSelectedEntityType] = useState(entities[0].type);

  const handleEntityChange = useCallback((event: SelectChangeEvent<EntityType>) => {
    setSelectedEntityType(event.target.value as EntityType);
  }, []);

  const { schema, type, itemsUrl, actions } = entities.find((x) => x.type === selectedEntityType)!;

  return (
    <main>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
          }}
        >
          <FormControl sx={{ width: 300 }} variant='filled'>
            <InputLabel id='entity-select-label'>Entity</InputLabel>
            <Select
              label='Entity'
              labelId='entity-select-label'
              value={selectedEntityType}
              onChange={handleEntityChange}
            >
              {entitiesOptions}
            </Select>
          </FormControl>
        </Box>
      </AppBar>
      <EntityController actions={actions} itemsUrl={itemsUrl} name={type} schema={schema} />
    </main>
  );
};
