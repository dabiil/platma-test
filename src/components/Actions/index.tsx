import { useCallback, useState } from 'react';
import { Chip, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { capitalize } from 'lodash-es';

import { Method } from 'src/constants/api';
import { IAction } from 'src/types';

import { ActionModal } from './ActionsModal';

interface IActionsProps {
  actions: IAction[];
}

const chipColor: Record<Method, 'primary' | 'error' | 'warning' | 'success'> = {
  get: 'success',
  post: 'primary',
  delete: 'error',
  put: 'warning',
};

export const Actions: React.FC<IActionsProps> = ({ actions }) => {
  const [selectedAction, setSelectedAction] = useState<IAction | null>(null);

  const handleCloseModal = useCallback(() => {
    setSelectedAction(null);
  }, []);

  return (
    <>
      <List>
        {actions.map((action) => (
          <ListItem key={`${action.url}-${action.method}`}>
            <ListItemButton
              onClick={() => {
                setSelectedAction(action);
              }}
            >
              <ListItemText primary={action.summary} />
              <Chip
                color={chipColor[action.method]}
                label={capitalize(action.method)}
                size='small'
                sx={{ minWidth: '50px' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ActionModal action={selectedAction} onClose={handleCloseModal} />
    </>
  );
};
