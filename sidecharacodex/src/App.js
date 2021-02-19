import './index.css';
import Codex from './Codex';

function App() {
  return (
    <div className="App">
      <header>
        <h1>side character codex</h1>
        <nav>
            <ul>
                <li onclick="console.log('codex clicked')"><a href="#codex">codex</a></li>
                <li onclick="console.log('about clicked')"><a href="#about">about</a></li>
                <li onclick="console.log('faq clicked')"><a href="#faq">faq</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <Codex />
      </main>
      <footer>
        built by <a href="https://twitter.com/sunny_parasol">claire</a>!      
      </footer>
    </div>
  );
}

export default App;
