import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';

import SubNav from '../component/SubNav';
import { Context, useContext } from '../context';

const SubNavWrapper = ({ children, menu, baseUrl }) => {
  const { getters } = useContext(Context);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (`/${getters.term}${baseUrl}` === pathname) {
      navigate(`/${getters.term}${baseUrl}/${menu[0].subRoute}`);
    }
  }, [pathname]);

  const showBar = menu.filter(m => pathname.includes(`${baseUrl}/${m.subRoute}`)).length >= 1;

  return (
    <>
      {showBar && <SubNav menu={menu} baseUrl={baseUrl} />}
      {children}
    </>
  );
};

export default SubNavWrapper;