import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const HelpBase = ({ }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (pathname === '/help') {
      navigate('/help/resources');
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default HelpBase;