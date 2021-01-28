import React from "react";
import { Button, Container } from "react-bootstrap";
import Counter from "./Counter";

const Counters = ({ counters, setCounters }) => {
  const defaultCheck = (val) => {
    const newCounter = [...counters];
    if (val === "add") {
      newCounter.push({ id: counters.length + 1, value: 0 });
    } else {
      newCounter.map((counter) => {
        counter.value = 0;
      });
    }
    setCounters(newCounter);
  };
  return (
    <Container>
      <div className="main_buttons">
        <Button
          className="mr-3"
          variant="primary"
          onClick={() => {
            defaultCheck("add");
          }}
        >
          Add
        </Button>
        <Button
          className="mr-3"
          variant="primary"
          onClick={() => {
            defaultCheck("reset");
          }}
        >
          Reset
        </Button>
      </div>
      <div className="counter_buttons">
        {counters.map((counter) => (
          <Counter
            setCounters={setCounters}
            key={counter.id}
            id={counter.id}
            value={counter.value}
            counters={counters}
          />
        ))}
      </div>
    </Container>
  );
};

export default Counters;
