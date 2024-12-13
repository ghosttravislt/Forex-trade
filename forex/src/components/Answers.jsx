// import { useState } from "react";

// const answersContainer = document.querySelectorAll(".question_container");
// const answerHeight = (answersContainer.style.anserHeight = "200px");
const Answers = () => {
  //   const [showAnswers, setShowAnwers] = useState(true);

  return (
    <>
      <p className="industry-text">
        Still have questions?
        <br />
        We have got you covered
      </p>

      <div className="question_container">
        <p className="question-header">What is trading ?</p>{" "}
        <span className="expand">
          <i className="fa-solid fa-chevron-down"></i>
        </span>
        <span className="drop">
          <i className="fa-solid fa-chevron-up"></i>
        </span>
        <div className="answers">
          <p className="answer_tag">Answer :</p>
          <p className="answer">
            Trading involves buying and selling financial assets (like stocks,
            currencies, commodities, or cryptocurrencies) in order to make a
            profit. Traders use strategies to predict price movements and
            capitalize on them.
          </p>
        </div>
      </div>
      <div className="question_container">
        <p className="question-header">
          What is the difference between trading and investing ?
        </p>{" "}
        <span className="expand">
          <i className="fa-solid fa-chevron-down"></i>
        </span>
        <span className="drop">
          <i className="fa-solid fa-chevron-up"></i>
        </span>
        <div className="answers">
          <p className="answer_tag">Answer :</p>
          <p className="answer">
            Investing is focused on long-term growth, often holding assets for
            years. Trading, on the other hand, is short-term, with the goal of
            taking advantage of market fluctuations over days, weeks, or even
            minutes.
          </p>
        </div>
      </div>
      <div className="question_container">
        <p className="question-header">
          {" "}
          How much money do I need to start trading ?
        </p>{" "}
        <span className="expand">
          <i className="fa-solid fa-chevron-down"></i>
        </span>
        <span className="drop">
          <i className="fa-solid fa-chevron-up"></i>
        </span>
        <div className="answers">
          <p className="answer_tag">Answer :</p>
          <p className="answer">
            You can start trading with small amounts, even as little as $100,
            depending on the broker and the type of assets you want to trade.
            However, more capital provides more flexibility and can better
            absorb market fluctuations.
          </p>
        </div>
      </div>
      <div className="question_container">
        <p className="question-header">
          {" "}
          How do I control my emotions while trading ?
        </p>{" "}
        <span className="expand">
          <i className="fa-solid fa-chevron-down"></i>
        </span>
        <span className="drop">
          <i className="fa-solid fa-chevron-up"></i>
        </span>
        <div className="answers">
          <p className="answer_tag">Answer :</p>
          <p className="answer">
            Emotions like fear and greed can lead to impulsive decisions. To
            control emotions: Stick to your trading plan. Don’t chase losses.
            Take breaks if you’re feeling stressed. Accept that losses are part
            of trading.
          </p>
        </div>
      </div>
    </>
  );
};

export default Answers;
