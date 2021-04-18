import React from 'react';
import Chapter from './Chapter';

const ChapterList = ({ chapters, getChapterInfo }) => {
  return (
    <div className="chapterlist">
      {chapters.map(chapter => (
        <Chapter
          chapter={chapter}
          key={chapter.number}
          getChapterInfo={getChapterInfo}
        />
      ))}
    </div>
  );
};

const Character = ({ novel, chara, getChapterInfo }) => {
  console.log({ chara });
  return (
    <div className="character">
      <h3>{chara.name}</h3>
      <ChapterList chapters={chara.chapters} getChapterInfo={getChapterInfo} />
    </div>
  );
};

export default Character;
