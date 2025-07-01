import { useContext } from 'react';
import authContext from '../../context/context';
import UserMenu from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { user, isLoggedIn, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header>
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Log In
        </button>
      )}
    </header>
  );
};
