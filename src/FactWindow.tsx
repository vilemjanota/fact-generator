import React, { useState, useEffect } from 'react';

async function returnFact(type: string): Promise<string> {
  const response = await fetch(`/${type}.txt`);
  const text = await response.text();
  const lines = text.split('\n');
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  return randomLine;
}

function FactWindow(props:{type: string}) {
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    returnFact(props.type).then(setFact).catch(console.error);
  }, [props.type]);

  return (
    <div className={props.type + "-window"}>
      <button onClick={() => returnFact(props.type).then(setFact).catch(console.error)}>Generate a {props.type} Fact!</button>
      <div>{fact}</div>
    </div>
  );
}

export default FactWindow;