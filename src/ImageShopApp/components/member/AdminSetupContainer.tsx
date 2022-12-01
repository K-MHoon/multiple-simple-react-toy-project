import React from 'react';
import AdminSetupForm from './AdminSetupForm';

const AdminSetupContainer = () => {
  const onRegister = async (
    userId: string,
    userName: string,
    userPw: string,
  ) => {};

  return <AdminSetupForm onRegister={onRegister} />;
};

export default AdminSetupContainer;
