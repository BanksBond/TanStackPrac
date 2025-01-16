import { useState } from "react";
import PostList from "./components/PostList";

export default function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <PostList />}
    </div>
  );
}
