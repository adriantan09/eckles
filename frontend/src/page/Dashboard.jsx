import { useNavigate } from 'react-router-dom';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import makePage from '../component/makePage';
import { Context, useContext } from '../context';
import { primaryNavList, secondaryNavList } from '../component/NavList';


const flattenedNavList = [];
primaryNavList.map(i => {
  if (i.children && i.children.length > 0) {
    i.children.map(c => {
      flattenedNavList.push({
        ...c,
        loginRequired: i.loginRequired,
      });
    })
  } else {
    flattenedNavList.push(i);
  }
});
secondaryNavList.map(i => {
  flattenedNavList.push(i);
});

const Dashboard = ({ }) => {
  const { getters, setters } = useContext(Context);
  const navigate = useNavigate();

  const getUrl = (route, external) => {
    if (external) return route;
    return `/${getters.term}${route}`;
  }

  const redirect = route => {
    if (route.includes('http')) {
      window.open(route, '_blank').focus();
    } else {
      navigate(route);
    }
  };

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' }}>
      {flattenedNavList.map((card, key) => {
        if (card.loginRequired && !getters.loggedIn) return <></>;
        return (
          <Card onClick={() => redirect(getUrl(card.route, card.external))} sx={{ minWidth: 275, flex: 1, height: 150, cursor: 'pointer' }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                <card.Icon style={{paddingTop: '5px' }} /> {card.title}
              </Typography>
              <Typography variant="body2">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>
  );
}

export default makePage(Dashboard, {
  loginRequired: false,
  title: 'Dashboard',
});