import './App.css';
import React, { useState } from "react";
import Box from './components/Box';
import style from './components/Box.module.css';

function App () {
  const [color, setColor] = useState("");
  const [boxList, setBoxList] = useState([]);

  const handleNewBoxSubmit = (e) => {
    e.preventDefault();
    const newBox = { color };

    if (newBox.length === 0) {
      return;
    }

    setBoxList([...boxList, newBox])
    setColor("")
  };

  const handleBoxDelete = (deleteIdx) => {
    const filteredBoxList = boxList.filter((_box, i) => {
      return i !== deleteIdx;
    });
    setBoxList(filteredBoxList);
  }

  return (
    <div className={style.boxGenerator}>
      <form onSubmit={(e) => {
        handleNewBoxSubmit(e);
      }}>
        <label>Color</label>
        <input onChange={(e) => {
          setColor(e.target.value)
        }} type='text' value={color} />
        <button>Add</button>
      </form>

      {boxList.map((box, i) => {
        return (
          <div className={style.boxList}>
            <Box
              key={i}
              i={i}
              box={box}
              handleBoxDelete={handleBoxDelete} />
          </div>
        )
      })
      }
    </div >

  );
}

export default App;
