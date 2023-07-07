import React from "react";

function ResetBtn({ reset }) {
  return (
    <div>
      <button className="reset-btn" onClick={reset}>
        Reset Game
      </button>
    </div>
  );
}

export default ResetBtn;
