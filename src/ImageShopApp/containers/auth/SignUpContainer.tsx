import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/auth/SignUpForm';
import { signUp } from '../../lib/api';

const SignUpContainer = () => {
  const navigate = useNavigate();

  const onSignUp = async (
    userId: string,
    userName: string,
    password: string,
    job: string,
  ) => {
    try {
      await signUp(userId, userName, password, job);
      alert('회원가입이 완료됐습니다.');
      navigate('/signin');
    } catch (e: any) {
      if (e.response.status === 400) {
        alert('잘못된 요청입니다.');
      } else {
        alert(e.response.data.message);
      }
    }
  };

  return <SignUpForm onSignUp={onSignUp} />;
};

export default SignUpContainer;
