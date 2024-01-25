import { useCallback } from 'react';
import { Box, Button, Divider, Modal, Typography } from '@mui/material';
import { FormikContext, useFormik } from 'formik';

import { fetch } from 'src/api';
import { IAction } from 'src/types';

import { normalizeUrl } from './helpers';
import { Params } from './Params';
import { ActionModalForm } from './types';

interface IActionModalProps {
  action: IAction | null;
  onClose(): void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 800,
  minHeight: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'grid',
  gridTemplateRows: '1fr 30px 50px',
};

const initialValues = {
  parameters: {},
  body: {},
};

export const ActionModal: React.FC<IActionModalProps> = ({ action, onClose }) => {
  const formik = useFormik<ActionModalForm>({ initialValues, onSubmit: () => {} });
  const { values, resetForm } = formik;

  console.log(formik.values);
  console.log(action);
  const handleRequest = async () => {
    if (!action) {
      return;
    }

    const response = await fetch({
      method: action.method,
      url: normalizeUrl(action.url, values.parameters),
    });

    console.log('Response:  ', response);
  };

  const handleClose = useCallback(() => {
    onClose();
    resetForm();
  }, [resetForm, onClose]);

  return (
    <Modal open={!!action} onClose={handleClose}>
      <Box sx={style}>
        <Box>
          <Typography align='center' sx={{ marginBottom: '40px' }} variant='h4'>
            {action?.summary}
          </Typography>
          <FormikContext.Provider value={formik}>
            <Params action={action!} />
          </FormikContext.Provider>
        </Box>
        <Divider sx={{ m: '20px 0' }} variant='fullWidth' />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button color='error' variant='contained' onClick={handleClose}>
            Close
          </Button>
          <Button color='success' variant='contained' onClick={handleRequest}>
            Request
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
