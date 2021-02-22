import React, { useState } from 'react';
import Character from './Character';
import { shiMei, erha } from './datatest/erha';

const novels = ['none selected', 'erha', 'tgcf'];

const Codex = () => {
  console.log(erha);
  const [novel, setNovel] = useState('');
  const [character, setCharacter] = useState('');
  console.log(erha.characters[0]);
  return (
    <main id="codex">
      <div className="selectors">
        <select className="novel" id="novels">
          <option value="erha">erha</option>
        </select>
        <select className="characters" id="characters">
          <option value="erha-shi_mei">shi mei</option>
          <option value="erha-song_qiutong">song qiutong</option>
        </select>
      </div>
      <Character />
    </main>
  );
};

export default Codex;
