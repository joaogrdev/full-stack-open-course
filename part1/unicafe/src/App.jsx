import { useState } from "react";
import Button from "./components/Button";
import Statistcs from "./components/Statistcs";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => handleFeedback("good")} text="good" />
        <Button onClick={() => handleFeedback("neutral")} text="neutral" />
        <Button onClick={() => handleFeedback("bad")} text="bad" />
      </div>
      <Statistcs good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
