import React from 'react';
import Chapter from './Chapter';

const ChapterList = () => (
  <div className="chapterlist">
    <Chapter />
    <Chapter />
  </div>
);

const Character = () => (
  <div className="character">
    <h3>shi mei</h3>
    <ChapterList />
  </div>
);

export default Character;
