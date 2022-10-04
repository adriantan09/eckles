import React from 'react';
import makePage from '../../component/makePage';
import SetOfTables from '../../component/SetOfTables';
import { Context, useContext } from '../../context';
import { generateContent } from './ContentTutorials.content';

const ContentTutorialsByWeek = ({ }) => {
  const { getters } = useContext(Context);
  const boxes = generateContent(getters, 'week');

  return <SetOfTables boxes={boxes} />;
};

export default makePage(ContentTutorialsByWeek, {
  loginRequired: true,
  title: 'Tutorial Content (By Week)',
});
