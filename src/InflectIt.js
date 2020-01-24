import React, { useState } from 'react';
import inflection from 'inflection';
import './App.css';

export default function InflectIt() {
  const [str, setStr] = useState('');
  const [renderWords, setRenderWords] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    const change = {};
    change.display = false;
    change.id = Math.floor(Math.random() * 1000);
    change.singular = inflection.singularize(str);
    change.plural = inflection.pluralize(str);
    setRenderWords([...renderWords, change]);
    setStr('');
  };

  const deleteCard = (e, id) => {
    e.preventDefault();
    const updated = renderWords.map(item => {
      if (item.id === id) {
        item.display = true;
      }
      return item;
    });
    setRenderWords(updated);
  };

  return (
    <div className="container">
      <div className="col">
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Please add word here.</label>
            <input
              onChange={e => setStr(e.target.value)}
              value={str}
              type="text"
              className="form-control"
              id="str"
            />
          </div>
          <button disabled={!str} type="submit" className="btn btn-primary">
            +
          </button>
        </form>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        {renderWords.map((word, i) => {
          return (
            <div
              key={i}
              style={word.display ? { display: 'none' } : { display: '' }}
              className="col mb-4 "
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{word.singular} (singular)</h5>
                  <h5 className="card-title">{word.plural} (plural)</h5>
                  <button onClick={e => deleteCard(e, word.id)}>X</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
