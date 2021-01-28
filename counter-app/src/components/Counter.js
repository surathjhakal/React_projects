import React from "react";
import { Button } from "react-bootstrap";

const Counter = ({ id, value, counters, setCounters }) => {
  const defaultCheck = (val) => {
    let newCounter = [...counters];
    if (val === "increment") {
      newCounter[id - 1].value = value + 1;
    } else if (val === "decrement" && value != 0) {
      newCounter[id - 1].value = value - 1;
    } else if (val === "delete") {
      newCounter = newCounter.filter((counter) => counter.id !== id);
      for (let i = id; i <= newCounter.length; i++) {
        newCounter[i - 1].id = i;
      }
      console.log(newCounter);
    }
    setCounters(newCounter);
  };
  return (
    <div className="counter">
      {value > 0 ? (
        <Button className="mr-4 ml-3" variant="primary">
          {value}
        </Button>
      ) : (
        <Button className="mr-3" variant="warning">
          Zero
        </Button>
      )}
      <Button
        className="mr-3"
        variant="secondary"
        onClick={() => {
          defaultCheck("increment");
        }}
      >
        +
      </Button>
      <Button
        className="mr-3"
        variant="light"
        onClick={() => {
          defaultCheck("decrement");
        }}
      >
        -
      </Button>
      <Button
        className="mr-3"
        variant="danger"
        onClick={() => {
          defaultCheck("delete");
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Counter;
