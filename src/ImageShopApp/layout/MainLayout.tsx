import React from 'react';
import Footer from '../components/common/Footer';
import MenuBar from '../components/common/MenuBar';
import MainHeaderContainer from '../containers/common/MainHeaderContainer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <MainHeaderContainer />
      <MenuBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
