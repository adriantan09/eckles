import React from 'react';
import SetOfTables from '../../component/SetOfTables';
import { Context, useContext } from '../../context';
import YoutubePlaylistButton from '../../component/YoutubePlaylistButton';
import makePage from '../../component/makePage';
import { generateContent } from './ContentLectures.content';

const ContentLecturesByWeek = ({ }) => {
  const { getters } = useContext(Context);
  const boxes = generateContent(getters, 'week');

  return (
    <>
      <YoutubePlaylistButton />
      <SetOfTables boxes={boxes} />
    </>
  );
};

export default makePage(ContentLecturesByWeek, {
  loginRequired: true,
  title: 'Lecture Content (by week)',
});
