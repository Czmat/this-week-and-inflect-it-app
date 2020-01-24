import React, { useState } from 'react';
import moment from 'moment';

export default function ThisWeek() {
  const now = moment().startOf('week');
  const week = [now];

  let i = 0;
  while (week.length < 7) {
    week.push(moment(now).add('day', ++i));
  }

  const [date, setDate] = useState(week);
  //console.log(date);

  //console.log(moment(date[4]).format('dddd MMMM Do YYYY'));
  const createNextWeek = () => {
    const n = moment(date[6]).add('day', 1);
    const w = [n];

    let i = 0;
    while (w.length < 7) {
      w.push(moment(n).add('day', ++i));
    }
    //console.log(moment(date[4]).format('dddd MMMM Do YYYY'));

    setDate(w);
    //console.log(date);
  };

  const createPreviousWeek = () => {
    const n = moment(date[0]).add('day', -1);
    const w = [n];

    let i = 0;
    while (w.length < 7) {
      w.unshift(moment(n).add('day', --i));
    }
    //console.log(moment(date[4]).format('dddd MMMM Do YYYY'));

    setDate(w);
    console.log(w);
  };
  console.log(date);
  return (
    <div className="container">
      <div className="row">
        {date.map((day, i) => {
          return (
            <div class="card border border-info" style={{ width: '10rem' }}>
              <div className="card-body ">
                <h5 className=" card-title ">{moment(day).format('dddd ')}</h5>
                <p>{moment(day).format('MMMM Do')}</p>
                <p>{moment(day).format('YYYY')}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        <button className="col" onClick={() => createNextWeek()}>
          Next Week
        </button>
        <button className="col" onClick={() => createPreviousWeek()}>
          Previous Week
        </button>
      </div>
    </div>
  );
}
