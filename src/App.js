import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, AppRouter } from './components';
import { refreshAction } from './redux/actions/userAction';
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (localStorage.getItem('access')) {
      dispatch(refreshAction());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <BrowserRouter>
      <Navbar auth={isAuth} />
      <AppRouter auth={isAuth} />
    </BrowserRouter>
  );
}

export default App;
