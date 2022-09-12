import React from "react";
import "./Gettime.css";

const Gettime = () => {
  let time = new Date().toLocaleTimeString();

  const [myTime, setMyTime] = React.useState(time);

  // var today = new Date();
  // var date =
  //   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // var time =
  //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // var dateTime = date + " " + time;
  React.useEffect(
    // this is a ignorable line
    function () {
      setInterval(function () {
        getCurrentTime();
      }, 1000);
    },
    [myTime]
  );

  function getCurrentTime() {
    let updatedTime = new Date().toLocaleTimeString();

    setMyTime(updatedTime);
  }

  // console.log(dateTime);
  return (
    <div className="container">
      <h1>{myTime}</h1>
      <h1>Time</h1>
      
      <button onClick={getCurrentTime}>GET TIME</button>
    </div>
  );
};

export default Gettime;
