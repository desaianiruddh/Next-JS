import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <form
      className="mx-auto max-w-screen-md"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h1 className="mb-4 text-xl">Login</h1>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Please enter email',
            pattern: {
              value:
                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
              message: 'Please enter valid email',
            },
          })}
          className="w-full"
          id="email"
          autoFocus
        ></input>
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Please enter password',
            minLength: { value: 8, message: 'password is more than 8 chars' },
            pattern: {
              value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
              message:
                'Must Have Uppercase, Lowercase, Number and Punctuation Mark',
            },
          })}
          className="w-full"
          id="password"
          autoFocus
        ></input>
        {errors.password && (
          <div className="text-red-500 ">{errors.password.message}</div>
        )}
      </div>
      <div className="mb-4 ">
        <button className="primary-button">Login</button>
      </div>
      <div className="mb-4 ">
        Don&apos;t have an account? &nbsp;
        <Link href="register">Register</Link>
      </div>
    </form>
  );
};

export default LoginScreen;
