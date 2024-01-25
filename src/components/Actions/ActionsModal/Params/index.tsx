import { Box, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { capitalize } from 'lodash-es';

import { IAction } from 'src/types';

import { ActionModalForm } from '../types';

interface IParamsProps {
  action: IAction;
}

export const Params: React.FC<IParamsProps> = ({ action }) => {
  const { handleChange, values } = useFormikContext<ActionModalForm>();

  if (!action.parameters) {
    return (
      <Box>
        <Typography>No Parameters</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant='h6'>Parameters</Typography>
      {action.parameters.map((param) => (
        <TextField
          helperText={param.description}
          key={`parameters.${param.name}`}
          label={capitalize(param.name)}
          name={`parameters.${param.name}`}
          type={param.type === 'integer' ? 'number' : 'text'}
          value={values.parameters[param.name]}
          variant='outlined'
          fullWidth
          onChange={handleChange}
        />
      ))}
    </Box>
  );
};
