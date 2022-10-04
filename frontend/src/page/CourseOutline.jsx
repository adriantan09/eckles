import * as React from 'react';

import makePage from '../component/makePage';
import CourseOutline22T1 from './CourseOutlines/CourseOutline22T1';
import CourseOutline22T3 from './CourseOutlines/CourseOutline22T3';

import { Context, useContext } from '../context';

const CourseOutline = () => {
  const { getters } = useContext(Context);
  if (getters.term === '22T1') {
    return <CourseOutline22T1 />
  } else if (getters.term === '22T3') {
    return <CourseOutline22T3 />
  } else {
    return <>This is a sample course outline!</>;
  }
}

export default makePage(CourseOutline, {
  loginRequired: false,
  title: 'Course Outline',
});