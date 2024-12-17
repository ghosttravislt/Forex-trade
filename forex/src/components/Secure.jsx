import { useState } from "react";

const Secure = () => {
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  let text = ` Secure trading with retail logic involves taking steps to protect
            both your financial investments and personal data while trading
            `,
    text2 = `
              Secure trading with retail logic involves taking steps to protect
            both your financial investments and personal data while trading
            `,
    text3 = `
              Secure trading with retail logic involves taking steps to protect
            both your financial investments and personal data while trading
            `;

  if (showText === true) {
    text = text.substring(0, 98) + "  ...";
  }
  if (showText1 === true) {
    text2 = text2.substring(0, 113) + "  ...";
  }

  if (showText2 === true) {
    text3 = text3.substring(0, 113) + "  ...";
  }

  const toggle1 = {
    changeState: function toggleInfo() {
      if (showText === false) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    },

    changeState1: function toggleInfo1() {
      if (showText1 === false) {
        setShowText1(true);
      } else {
        setShowText1(false);
      }
    },

    changeState2: function toggleInfo2() {
      if (showText2 === false) {
        setShowText2(true);
      } else {
        setShowText2(false);
      }
    },
  };

  return (
    <>
      <p className="secure_text">
        The Forex Trading Platform with the highest level of trust
      </p>

      <div className="cards_container">
        <div className="cards">
          {/* <span className="material-symbols-outlined lock">lock</span> */}
          <i className="lni lni-lock-alt lock"></i>
          <p className="card_text">Secure Trade</p>
          <p className="card_info">{text}</p>
          <button onClick={toggle1.changeState} className="btn2">
            {showText ? "Show All" : "Less"}
          </button>
        </div>
        <div className="cards">
          {/* <span className="material-symbols-outlined lock">safety_check</span>
           */}
          <i className="lni lni-protection lock"></i>
          <p className="card_text">Assured Privacy</p>
          <p className="card_info">{text2}</p>
          <button onClick={toggle1.changeState1} className="btn2">
            {showText1 ? "Show All" : "Less"}
          </button>
        </div>
        <div className="cards">
          {/* <span className="material-symbols-outlined lock">lock</span> */}
          <i className="lni lni-network lock"></i>
          <p className="card_text">Connect with Members</p>
          <p className="card_info">{text3}</p>
          <button onClick={toggle1.changeState2} className="btn2">
            {showText2 ? "Show All" : "Less"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Secure;
