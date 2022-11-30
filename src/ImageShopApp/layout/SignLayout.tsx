import React from 'react';
import Footer from '../components/common/Footer';
import HomeHeader from '../components/common/HomeHeader';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SignLayout = ({ children }: Props) => {
  return (
    <div>
      <HomeHeader />
      {children}
      <Footer />
    </div>
  );
};

export default SignLayout;
