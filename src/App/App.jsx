import React from "react";
import "./App.css";

const wishes = [
  { text: "Travel to the moon", done: false },
  { text: "Eat a pizza", done: true },
  { text: "Buy a dog", done: false },
  { text: "Learn to mamporrero", done: false },
  { text: "Get a job", done: false },
];

function App() {
  return (
    <div className="app">
      <h1>My wishes</h1>
      <fieldset className="wish-input">
        <legend className="wish-input__label">New wish</legend>
        <input type="text" className="wish-input__field" />
        
      </fieldset>
      <ul className="wish-list">
        {wishes.map(({ text, done }, i) => (
          <li
            key={text}
            className={`wish-list__item ${done ? "wish-list__item--done" : ""}`}
          >
            <input id={`wish${i}`} type="checkbox" checked={done} />
            <label htmlFor={`wish${i}`}>{text}</label>
          </li>
        ))}
      </ul>
      <button className="wish-clear" type="button"> Añadir</button>
    </div>
  );
}

export default App;
