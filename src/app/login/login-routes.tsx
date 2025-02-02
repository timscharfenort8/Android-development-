import { redirect } from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import CreateAccount from './create-account/create-account';

export const routes = [
  { index: true, loader: () => redirect('sign-in') },
  { path: 'sign-in', element: <SignIn />, text: 'Sign In' },
  { path: 'create-account', element: <CreateAccount />, text: 'Create Account' }
];
