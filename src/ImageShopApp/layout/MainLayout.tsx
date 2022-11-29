import React from 'react';
import Footer from '../components/common/Footer';
import MainHeader from '../components/common/MainHeader';
import MenuBar from '../components/common/MenuBar';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <MainHeader />
      <MenuBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
