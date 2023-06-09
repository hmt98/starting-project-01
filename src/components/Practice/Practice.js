import React from "react";
import { DatePicker, Button, Tooltip } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import Todo from "./Todo";
import "./styles.css";

//Increase counter when click

/*const Practice = () => {
    const [counter, setCounter] = useState(0);

    const counterIncrease = () => {
        setCounter(counter+1);
    };

    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={counterIncrease}>Increment</button>
      </div>
    );
}*/

//AntDesign

// const Practice = () => {
//     //const [size, setSize] = useState('small'); // default is 'middle'
//   return (
//     <div>
//       <DatePicker></DatePicker>
//       <Tooltip title="search">
//         <Button type="primary" icon={<DownloadOutlined />} size='medium'>
//           Download
//         </Button>
//       </Tooltip>
//     </div>
//   );
// };

//todo list
// const Practice = () => {
//   const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

//   return (
//     <ul>
//       Todo:
//       {DUMMY_TODOS.map((element,index) => (<Todo key={index} item = {element} />) )}

//     </ul>
//   );
// };

//Outputting Conditional Content
const Practice = () => {

  const [displayWarningBox, setDisplayWarningBox] = React.useState(false);

  let warningBox = <div></div>;

  const onDeleteClick = () => {
    setDisplayWarningBox(true);
  };

  const onProceedClick = () => {
    setDisplayWarningBox(false);
  };

  if ((displayWarningBox == true)) {
    warningBox = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={onProceedClick} >Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {warningBox}
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};

export default Practice;
