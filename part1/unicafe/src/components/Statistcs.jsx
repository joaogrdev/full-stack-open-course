import StatisticLine from "./StatisticLine";

const Statistcs = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StatisticLine text="all" value={good + neutral + bad} />
            </tr>
            <tr>
              <StatisticLine
                text="average"
                value={(good - bad) / (good + neutral + bad)}
              />
            </tr>
            <tr>
              <StatisticLine
                text="positive"
                value={`${(good / (good + neutral + bad)) * 100} %`}
              />
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistcs;
