import React from 'react';

function Wrapper({ children }) {
  return (
      <div className="wrapper" id={Wrapper}>
        {children}
      </div>
  );
}

export default Wrapper;