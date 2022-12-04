import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/auth/SignInForm';
import { RootState } from '../../modules';
import { login } from '../../modules/auth';

const SignInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { accessToken } = useSelector(({ auth }: RootState) => ({
    accessToken: auth.accessToken,
  }));

  const onSignIn = (userId: string, password: string) => {
    try {
      dispatch(login({ userId, password }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (accessToken) {
      alert('로그인되었습니다.');
      navigate('/');
    }
  }, [accessToken, dispatch, navigate]);

  return <SignInForm onSignIn={onSignIn} />;
};

export default SignInContainer;
