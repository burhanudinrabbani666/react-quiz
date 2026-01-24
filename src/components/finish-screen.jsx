function FinishScreen({ points, maxPossiablePoint, highScore }) {
  const percenteage = (points / maxPossiablePoint) * 100;

  let emoji;
  if (percenteage === 100) emoji = "🥇";
  if (percenteage >= 80 && percenteage < 100) emoji = "🥳";
  if (percenteage > 50 && percenteage < 80) emoji = "🤭";
  if (percenteage > 0 && percenteage <= 50) emoji = "🤔";
  if (percenteage === 0) emoji = "🤦‍♂️";

  return (
    <div>
      <p className="result">
        <span>{emoji}</span> Your score &nbsp;
        <strong>
          {points} out of {maxPossiablePoint} ({Math.ceil(percenteage)} %)
        </strong>
      </p>
      <p className="highscore">( Highscore: {highScore} points )</p>
    </div>
  );
}

export default FinishScreen;
