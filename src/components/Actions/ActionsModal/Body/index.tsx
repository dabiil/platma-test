import { Box, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { capitalize } from 'lodash-es';

import { IAction } from 'src/types';

import { ActionModalForm } from '../types';

interface IBodyProps {
  action: IAction;
}

export const Body: React.FC<IBodyProps> = ({ action }) => {
  const { handleChange, values } = useFormikContext<ActionModalForm>();

  if (!action.requestBody) {
    return (
      <Box>
        <Typography>No Body</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant='h6'>Body</Typography>
      {action.requestBody.map((param) => (
        <TextField
          helperText={param.description}
          key={`body.${param.name}`}
          label={capitalize(param.name)}
          name={`body.${param.name}`}
          sx={{
            mb: '20px',
          }}
          type={param.type === 'integer' ? 'number' : 'text'}
          value={values.body[param.name]}
          variant='outlined'
          fullWidth
          onChange={handleChange}
        />
      ))}
    </Box>
  );
};
