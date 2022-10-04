import React from 'react';
import SetOfTables from '../../component/SetOfTables';
import { Context, useContext } from '../../context';
import YoutubePlaylistButton from '../../component/YoutubePlaylistButton';
import makePage from '../../component/makePage';
import { generateContent } from './ContentLectures.content';

const ContentLecturesByTopic = ({ }) => {
  const { getters } = useContext(Context);
  const boxes = generateContent(getters, 'topic');
  return (
    <>
      <YoutubePlaylistButton />
      <SetOfTables boxes={boxes} />
    </>
  );
};


export default makePage(ContentLecturesByTopic, {
  loginRequired: true,
  title: 'Lecture Content (by topic)',
});