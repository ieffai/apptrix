import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userAction';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      HOME PAGE
      <button onClick={() => dispatch(logout())}>Exit</button>
    </div>
  );
};

export default Home;
