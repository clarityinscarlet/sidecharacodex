// will get: chapter name, link, summary, quotes (array)
import React from 'react';

const Chapter = ({ chapter, getChapterInfo }) => {
  console.log(chapter);
  return (
    <div className="chapter">
      <div className="ch-left">
        <span className="chaptername">
          <a
            href={getChapterInfo(chapter.number)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* CH 2: This Venerable One Lives */}
            {chapter.number}
          </a>
        </span>
      </div>
      <div className="ch-right">
        <span>{chapter.summary}</span>
        <details className="quotes">
          <summary>quotes</summary>
          <ul>
            {chapter.quotes.map((quote, index) => (
              <li key={index}>&quot;{quote}&quot;</li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Chapter;
