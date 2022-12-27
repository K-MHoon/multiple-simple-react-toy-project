import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/auth/SignUpForm';

const SignUpContainer = () => {
  const navigate = useNavigate();

  const onSignUp = (
    userId: string,
    userName: string,
    password: string,
    job: string,
  ) => {};

  return <SignUpForm onSignUp={onSignUp} />;
};

export default SignUpContainer;
