'use client'
import React, { useState, useEffect } from 'react';
import styles from '../page.module.css'

function UserOutput({ inputValue }) {
  const [outputType, setOutputType] = useState("Stream");
  const [outputValue, setOutputValue] = useState("");
  const [generatedArray, setGeneratedArray] = useState([]);

  useEffect(() => {
    setGeneratedArray(generateArray(inputValue));
    console.log(generatedArray)
  }, [inputValue]);

  const generateArray = (text) => text.split(' ').map((index) => index + " ");

  const handleOutputType = (type) => {
    setOutputType(type);

    if (type === "Stream") {
      makeStream();
    }
  };

  const makeStream = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < generatedArray.length) {
        setOutputValue((prevOutput) => prevOutput + generatedArray[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  }


  return (
    <div className={styles.outputCon}>
      <div className={styles.remoteControl}>
        <span className={outputType === "Stream" ? styles.remoteTypeClicked : styles.remoteType} onClick={() => { handleOutputType("Stream") }}>Stream</span>
        <span className={outputType === "OneWords" ? styles.remoteTypeClicked : styles.remoteType} onClick={() => { handleOutputType("OneWords") }}>One Words</span>
      </div>

      <div className={styles.consoleBox}>
        시작입니다.
        {outputValue}
      </div>

    </div>
  );
}

export default UserOutput;
