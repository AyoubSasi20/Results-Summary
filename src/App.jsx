import React from "react";
import data from "./assets/data.json";
import "./App.css";

const App = () => {
  return (
    <main className="main-container">
      <article className="card-wrapper">
        <section className="result-section">
          <p className="result"> Your Result</p>
          <div className="circle">
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <div className="msg">
            <h4>Great</h4>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="summary-section">
          <h5>Summary</h5>

          {data.map((item, index) => (
            <div
              className={`summary-item-${item.category.toLowerCase()}`}
              key={index}
            >
              <div className="item-title">
                <img src={item.icon} alt={item.category} />
                <h6>{item.category}</h6>
              </div>

              <p className="item-score">
                <span className="bold-score">{item.score}</span> / 100
              </p>
            </div>
          ))}

          <div className="btn">
            <button>Continue</button>
          </div>
        </section>
      </article>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AyoubSasi20">Ayoub</a>.
        </p>
      </footer>
    </main>
  );
};

export default App;
