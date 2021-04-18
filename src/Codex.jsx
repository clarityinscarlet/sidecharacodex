import React, { useEffect } from 'react';
import Character from './Character';
import Synopsis from './Synopsis';
import Home from './Home';
import { erha } from './datatest/erha';
import useDropdown from './useDropdown';

const novels = { erha };

const Codex = () => {
  const [novel, NovelDropdown] = useDropdown('novels', Object.keys(novels));
  const [chara, CharaDropdown, setChara] = useDropdown(
    'characters',
    novel ? Object.keys(novels[novel].characters) : []
  );

  const getChapterInfo = number => {
    console.log(number);
    return 'https://docs.google.com/document/d/1nM__Owx6xOwMaEingWea0KfxeyZDsEQb4bGe7aaZy9A';
  };

  // currently renders twice...will leave for now
  useEffect(() => {
    if (!novel) setChara('');
  });

  console.log({ novel, chara });
  return (
    <main id="codex">
      <div className="selectors">
        <NovelDropdown />
        {novel && <CharaDropdown />}
      </div>
      {novel && chara && (
        <Character
          novel={novels[novel]}
          chara={novels[novel].characters[chara]}
          getChapterInfo={getChapterInfo}
        />
      )}
      {novel && !chara && <Synopsis novel={novels[novel]} />}
      {!novel && <Home />}
    </main>
  );
};

export default Codex;
