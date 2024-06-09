import React, { useState, useEffect } from 'react';

/**
 * Fetches a random fact from a text file based on the provided type.
 * 
 * @param {string} type - The type of fact to fetch.
 * @returns {Promise<string>} A promise that resolves to a random fact.
 */
async function returnFact(type: string): Promise<string> {
  const response = await fetch(`/${type}.txt`);
  const text = await response.text();
  const lines = text.split('\n');
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  return randomLine;
}

/**
 * A React component that displays a random fact of a certain type.
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.type - The type of fact to display.
 * @returns {JSX.Element} A React element that displays a random fact and a button to fetch a new fact.
 */
function FactWindow(props:{type: string}) {
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    returnFact(props.type).then(setFact).catch(console.error);
  }, [props.type]);

  return (
    <div className={props.type + "-window"}>
      <button className='Fact-button' onClick={() => returnFact(props.type).then(setFact).catch(console.error)}>New {props.type} Fact!</button>
      <div className='Fact-text'><i>{fact}</i></div>
    </div>
  );
}

export default FactWindow;