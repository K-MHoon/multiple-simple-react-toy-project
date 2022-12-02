import React from 'react';
import AdminSetupForm from './AdminSetupForm';
import * as api from '../../lib/api';
import { useNavigate } from 'react-router-dom';

const AdminSetupContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (
    userId: string,
    userName: string,
    userPw: string,
  ) => {
    try {
      await api.adminSetup(userId, userName, userPw);

      alert('등록이 완료되었습니다.');
      navigate('/');
    } catch (e: any) {
      alert(e.response.data);
    }
  };

  return <AdminSetupForm onRegister={onRegister} />;
};

export default AdminSetupContainer;
