import '../styles/main.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState('katacroker');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  function renderSolutionLetters() {
    const wordLetters = word.split('');
    const mappedLetters = wordLetters.map(word);
  }
  /*fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/random-word-v1/word.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const mappedWord = data.map((word) => {
        return mappedWord;
      });
    });

  function getWord() {
    const randomWord = mappedWord.word;
  }*/

  function newDummieLine() {
    setNumberOfErrors(numberOfErrors + 1);
  }

  function handleLastLetter(ev) {
    if (validLetter(ev.target.value)) {
      setLastLetter(ev.target.value);
    } else {
      ev.target.value = '';
    }
  }

  function validLetter(letterToTest) {
    if (letterToTest.match('[a-zA-ZñÑáéíóúÁÉÍÓÚ]')) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="page">
      <button onClick={newDummieLine}>Incrementar</button>
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleLastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
