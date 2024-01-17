import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'
import PropTypes from 'prop-types';

export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if(isLoggedIn) {
    return children
  }
  return null
}

ShowOnLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if(!isLoggedIn) {
    return children
  }
  return null
}

ShowOnLogout.propTypes = {
  children: PropTypes.node.isRequired,
};
