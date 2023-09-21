'use client'
import UserOutput from './UserOutput';
import styles from '@/app/page.module.css'
import { useState } from 'react';

export default function UserInput() {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const scrollY = (y) => {
    window.scrollBy({
      top: y,
      behavior: "smooth"
    });
  }

  const handleSubmit = () => {
    if (inputValue == '') {
      alert("No input value found")
      return
    }
    scrollY(850);
    setIsSubmitted(true)
  };

  const TabHandler = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setInputValue(inputValue + '\n');
    }
  }


  return (
    <div>
      <div className={styles.UserInputCon}>
        <span>Text to tokenize.</span>
        <section className={styles.InputSection} >
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="readX. - Type in any long sentence."
            onKeyDown={TabHandler}
          />
          <button onClick={handleSubmit}>Submit</button>
        </section>
      </div>

      {isSubmitted ? <UserOutput inputValue={inputValue}/> : <UserOutput inputValue={""}/>}
    </div>

  );
}
