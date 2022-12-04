import React from 'react';
import SignInForm from '../../components/auth/SignInForm';
import SignInContainer from '../../containers/auth/SignInContainer';
import SignLayout from '../../layout/SignLayout';

const SignInPage = () => {
  return (
    <SignLayout>
      <SignInContainer />
    </SignLayout>
  );
};

export default SignInPage;
