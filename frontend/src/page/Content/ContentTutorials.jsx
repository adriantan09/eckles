import React from 'react';
import { useCookies } from 'react-cookie';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import { Outlet } from 'react-router-dom';
import SubNavWrapper from '../../component/SubNavWrapper';

const ContentTutorials = ({ }) => {
  const menu = [
    {
      title: 'By Week',
      icon: <TheatersIcon />,
      subRoute: 'week',
    },
    {
      title: 'By Topic',
      icon: <SchoolIcon />,
      subRoute: 'topic',
    },
  ];

  return (
    <SubNavWrapper baseUrl={'/content/tutorials'} menu={menu}>
      <Outlet />
    </SubNavWrapper>
  );
};

export default ContentTutorials;