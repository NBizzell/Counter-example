import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Counter from "./Counter";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function App() {
  const [counterNames, setCounterNames] = useState([]);

  const passingFunction = () => {
    console.log("it works");
  };

  const counters = counterNames.map((counter) => (
    <Counter name={counter} key={counter} functionPassed={passingFunction} />
  ));

  const addCounter = () => {
    setCounterNames((prevState) => [
      ...prevState,
      `Counter ${counterNames.length}`
    ]);
  };

  return (
    <div>
      <Row>
        <Col>
          <Button onClick={addCounter}> Add Counter </Button>
        </Col>
        <Col>
          <Button>Button 2 </Button>
        </Col>
        <Col>
          <Button>Button 3</Button>
        </Col>
      </Row>
      {counters}
    </div>
  );
}
