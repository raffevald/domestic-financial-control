import React from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchGetUserInfos
} from '../../store/fetchActions/fetchUserInfos';


export const Dashboard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGetUserInfos("yuna.evald@gmail.com"));
    // dispatch(fetchGetUserInfos("yuna.evald@gmail.com"))
  }, [dispatch]);

  return (
    <div>
      Dashboard
    </div>
  );
}
