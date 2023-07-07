

function Square({ value, handleEvent }) {
   return (
    <button className="square" onClick={handleEvent}>
      {value}
    </button>
  );
}

export default Square;