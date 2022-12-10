import { connect } from 'react-redux';
import MenuBar from '../../components/common/MenuBar';
import { RootState } from '../../modules';
import { getAuthorized, isAdmin } from '../../modules/selector';

interface Props {}

const MenuBarContainer = ({ isAuthorized, isAdmin }: Props) => {
  return (<MenuBar isAuthorized={isAuthorized} isAdmin={isAdmin} />);
};

export default connect((state: RootState) => {
  return {
    isAuthorized: getAuthorized(state),
    isAdmin: isAdmin(state),
  };
})(MenuBarContainer);
