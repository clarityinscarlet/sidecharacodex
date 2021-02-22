// will get: chapter name, link, summary, quotes (array)
import React from 'react';

const Chapter = () => (
  <div className="chapter">
    <div className="ch-left">
      <span className="chaptername">
        <a
          href="https://docs.google.com/document/d/1nM__Owx6xOwMaEingWea0KfxeyZDsEQb4bGe7aaZy9A"
          target="_blank"
          rel="noopener noreferrer"
        >
          CH 2: This Venerable One Lives
        </a>
      </span>
    </div>
    <div className="ch-right">
      <span>shi mei&apos;s first appearance.</span>
      <details className="quotes">
        <summary>quotes</summary>
        <ul>
          <li>&quot;lorem ipsum ipsi dipsy doret&quot;</li>
          <li>&quot;yadda yadda blah blah blah meatbun knife&quot;</li>
        </ul>
      </details>
    </div>
  </div>
);

export default Chapter;
