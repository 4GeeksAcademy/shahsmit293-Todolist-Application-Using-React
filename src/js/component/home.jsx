import React, { useState } from "react";
import { Lines } from "./lines";

/*create a component*/
const Home = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [sentences, setsentences] = useState([]);

  /*Functon for add lines */
  const addlines = () => {
    setinputvalue("");
    setsentences([...sentences, inputvalue]);
  };

  /*delete lines*/
  const remove = (ind) => {
    setsentences(
      sentences.filter((sentence, index) => {
        return index != ind;
      })
    );
  };

  return (
    <div className="main">
      <h1>todos</h1>
      <div className="card">
        <div className="form">
          <input
            type="text"
            className="text"
            placeholder="What needs to be done?"
            value={inputvalue}
            onChange={(e) => {
              setinputvalue(e.target.value);
            }}
          />
          <button onClick={addlines}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        {sentences.map((sentence, index) => {
          return (
            <Lines line={sentence} key={index} btn={() => remove(index)} />
          );
        })}
        <div className="foot">{sentences.length} item Left</div>
      </div>
    </div>
  );
};

export default Home;
