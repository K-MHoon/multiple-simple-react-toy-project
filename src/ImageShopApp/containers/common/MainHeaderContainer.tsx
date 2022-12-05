import React from 'react';
import { connect } from 'react-redux';
import { MyInfo } from '../../App';
import MainHeader from '../../components/common/MainHeader';
import { RootState } from '../../modules';
import { getAuthorized } from '../../modules/selector';

interface Props {
  readonly isAuthorized: boolean;
  readonly myInfo: MyInfo | null;
}

const MainHeaderContainer = ({ isAuthorized, myInfo }: Props) => {
  return <MainHeader myInfo={myInfo} isAuthorized={isAuthorized} />;
};

export default connect((state: RootState) => {
  return {
    isAuthorized: getAuthorized(state),
    myInfo: state.auth.myInfo,
  };
})(MainHeaderContainer);
