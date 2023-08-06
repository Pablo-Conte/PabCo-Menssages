'use client';
import { Noto_Sans } from 'next/font/google';
import './login.css';
import { WhiteSentIcon } from '@/components/icons';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { FormTextFieldMui } from '@/components/atoms/form-text-fields/formTextFieldMui';

const registerFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required('Password confirmation is required'),
});

const notoSans = Noto_Sans({
  weight: '400',
  preload: false,
});

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  console.log('errors:', errors);

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <body className={notoSans.className}>
      <Box className="main">
        <div className="applicationPhoto">
          <WhiteSentIcon className="SentIcon" />
        </div>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          className="loginForm"
          component="form"
          sx={{
            p: '30px 0px',
          }}
        >
          <h1>Criate your account!</h1>

          <div className="inputs">
            <FormTextFieldMui
              id="outlined-basic"
              label="name"
              name="name"
              variant="outlined"
              type="name"
              errors={errors.name ? errors.name.message : ''}
              register={register}
              width="80%"
            />
            <FormTextFieldMui
              id="outlined-basic"
              label="email"
              name="email"
              variant="outlined"
              type="email"
              errors={errors.email ? errors.email.message : ''}
              register={register}
              width="80%"
            />
            <FormTextFieldMui
              id="outlined-basic"
              label="password"
              name="password"
              variant="outlined"
              type="password"
              errors={errors.password ? errors.password.message : ''}
              register={register}
              width="80%"
            />
            <FormTextFieldMui
              id="outlined-basic"
              label="password confirmation"
              name="passwordConfirmation"
              variant="outlined"
              type="password"
              errors={
                errors.passwordConfirmation
                  ? errors.passwordConfirmation.message
                  : ''
              }
              register={register}
              width="80%"
            />
          </div>

          <button type="submit" className="button">
            Enviar
          </button>
        </Box>
      </Box>
    </body>
  );
}
