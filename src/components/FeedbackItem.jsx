// Component that shows a single feedback item which will include the rating & the text

import { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item');

  const handleClick = () => {
    setRating((prev) => {
      console.log(prev); // using previous value
      return prev + 1;
    });
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedbackItem;
