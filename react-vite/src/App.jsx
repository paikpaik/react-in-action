import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("all the time");
  const onlyOnce = () => {
    console.log("only once api call");
  };
  useEffect(onlyOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"message"} />
      <br />
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>clikc me</button>
    </div>
  );
}

export default App;
