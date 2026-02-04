import { useState } from "react";
//State lifting concepts

export default function MyApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter btn will change </h2>
      <MyBtn count={count} onClick={handleClick} />
      <MyBtn count={count} onClick={handleClick} />
    </div>
  );
}
// state will lift from here
function MyBtn({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
