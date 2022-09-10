import React from 'react';

export const StartButton: React.FC<any> = (props) => {
  const { onClick, text } = props;
  return (
    <div className="text-center ">
      <div onClick={() => onClick()}>
        {text ? text : <h1>Start new game</h1>}
      </div>
    </div>
  );
};
