import { Box, TextField, Typography } from '@mui/material';
import { type } from 'os';

type TFormTextFieldMui = {
  id: string;
  label: string;
  name: string;
  variant: string;
  type: string;
  errors?: string;
  register: any;
  width: string;
};

export const FormTextFieldMui = ({
  id,
  label,
  name,
  variant,
  type,
  errors,
  register,
  width,
}: TFormTextFieldMui) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextField
        sx={{
          width: width,
          '& fieldset': {
            borderColor: errors ? 'red' : 'rgba(0, 0, 0, 0.23)',
            color: errors ? 'red' : 'black',
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: errors ? '0.5px solid red !important' : '',
            color: errors ? 'red' : 'black',
          },
          '& .Mui-focused': {
            color: errors ? 'red !important' : 'black',
          },
        }}
        {...register(name)}
        id={id}
        label={label}
        variant="outlined"
        type={type}
      />

      {errors && (
        <Box
          sx={{
            display: 'flex',
            width: '80%',
            color: 'red',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
            }}
          >
            {errors}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
