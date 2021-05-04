import React, { useState, useEffect } from 'react';

const Demo = () => {
  const [data, setData] = useState(9999);
  const [name, setName] = useState('raj');

  useEffect(() => {
    setData(5);
  }, []);

  const handleButton = () => {
    var dummy = data;
    dummy += 1;
    setData(dummy);
  };

  const handleSubmit = () => {};

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <>
      <h1>N: {name}</h1>
      {/* <button onClick={() => handleButton()}> click me </button> */}

      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type='text'
            name='name'
            value={name}
            onChange={e => handleChange(e)}
          />
        </label>
      </form>
    </>
  );
};

export default Demo;
