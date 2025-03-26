import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [CalVal, SetCalVal] = useState("");
  const OnButtonClick = (buttonText) => {
    // console.log(buttonText);
    if (buttonText === "C") {
      SetCalVal("");
    } else if (buttonText === "=") {
      const result = eval(CalVal);
      SetCalVal(result);
    } else {
      String(buttonText);
      // console.log(buttonText);
      const newDisplayValue = CalVal + buttonText;
      SetCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <div className={styles.Outer}>
        <h1>
          Calculator With
          <span>
            <img className={styles.img2} src="./react.jpg"></img>
          </span>
          React Js
        </h1>
        <div className={styles.calculator}>
          <Display DVal={CalVal}></Display>
          <ButtonsContainer OnButtonClick={OnButtonClick}></ButtonsContainer>
        </div>
      </div>
      <h3>
        Made With
        <span>
          <img className={styles.img1} src="./red-heart.jpg"></img>
        </span>
        By Akshay Mishra
      </h3>
    </>
  );
}

export default App;
