import React from 'react';
import Character from './Character';
import { erha } from './datatest/erha';
import useDropdown from './useDropdown';

const novels = { erha };

const Codex = () => {
  const [novel, NovelDropdown] = useDropdown('novels', Object.keys(novels));
  const [character, CharaDropdown] = useDropdown(
    'characters',
    novel ? Object.keys(novels[novel].characters) : []
  );
  if (character) console.log(novels[novel].characters[character]);
  return (
    <main id="codex">
      <div className="selectors">
        <NovelDropdown />
        {novel && <CharaDropdown />}
      </div>
      <Character />
    </main>
  );
};

export default Codex;
