import Selectors from './Selectors';
import Character from './Character';
import erha from './datatest/erha';
import React, { useState } from 'react';

const Codex = () => {
    console.log(erha);
    const [novel, setNovel] = useState("");
    const [character, setCharacter] = useState("");

    return (
        <div id="codex">
            <Selectors />
            <Character />
        </div>
    )
}

export default Codex;