function FactWindow(props:{type: string}) {
  return (
    <div className={props.type + "-window"}>
      <button>Generate a {props.type} Fact!</button>
    </div>
  );
}

export default FactWindow;