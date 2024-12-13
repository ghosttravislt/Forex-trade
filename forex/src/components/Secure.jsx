import { useState } from "react";

const Secure = () => {
  const [showText, setShowText] = useState(false);

  let text = ` Secure trading with retail logic involves taking steps to protect
            both your financial investments and personal data while trading
            `;
  let text2 = `
              Secure trading with retail logic involves taking steps to protect
            both your financial investments and personal data while trading
            `;

  if (showText === false) {
    text = text.substring(0, 98) + "  ...";
    text2 = text2.substring(0, 113) + "  ...";
  }

  const toggleInfo = () => {
    if (showText === false) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  };

  // const toggleInfo1 = () => {
  //   if (showText2 === false) {
  //     setShowText2(true);
  //   } else {
  //     setShowText2(false);
  //   }
  // };

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
          <button onClick={toggleInfo} className="btn2">
            {showText ? "Less" : "Show All"}
          </button>
        </div>
        <div className="cards">
          {/* <span className="material-symbols-outlined lock">safety_check</span>
           */}
          <i className="lni lni-protection lock"></i>
          <p className="card_text">Assured Privacy</p>
          <p className="card_info">{text2}</p>
          <button onClick={toggleInfo} className="btn2">
            {showText ? "Less" : "Show more"}
          </button>
        </div>
        <div className="cards">
          {/* <span className="material-symbols-outlined lock">lock</span> */}
          <i className="lni lni-network lock"></i>
          <p className="card_text">Connect with Members</p>
          <p className="card_info">{text}</p>
          <button onClick={toggleInfo} className="btn2">
            {showText ? "Less" : "Show more"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Secure;
