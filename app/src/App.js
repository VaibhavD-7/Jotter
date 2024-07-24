import { useEffect, useState } from "react";
import "./App.css";

const STORAGE_KEY_NAME = "jotter_data";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);

  // add a note
  const addItem = () => {
    if (inputValue === "") {
      return;
    }
    const tempData = [...data, inputValue];
    setData(tempData);
    setInputValue("");

    const updatedData = tempData.join("END");
    localStorage.setItem(STORAGE_KEY_NAME, updatedData);
  };

  // clear all the saved notes
  const clear = () => {
    setData([]);
    localStorage.clear();
  };

  // remove an individual note
  const removeItem = (index) => {
    const tempData = [...data];
    tempData.splice(index, 1);

    setData(tempData);
    const updatedData = tempData.join("END");
    localStorage.setItem(STORAGE_KEY_NAME, updatedData);
  };

  // read all currently saved notes
  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY_NAME);

    if (existing) {
      const arr = existing.split("END");
      setData(arr);
    } else {
      setData([]);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          className="input"
          type="text"
          placeholder="Jot something down.."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem} className="add-button">
          +
        </button>
      </div>

      <div className="list-container">
        {data &&
          data.map((item, index) => (
            <div key={`${index}-${item.length}`} className="list-item">
              {item}
              <button
                className="minus-button"
                onClick={() => removeItem(index)}
              >
                -
              </button>
            </div>
          ))}
      </div>

      <button onClick={clear} className="clear-button">
        Clear
      </button>
    </div>
  );
}

export default App;
