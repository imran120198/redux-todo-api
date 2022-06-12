import "./App.css";
import { Todo } from "./Components/Todo";

import { useSelector } from "react-redux";

export default function App() {
  const isAuth = useSelector((state) => state.isAuth);
  const token = useSelector((state) => state.token);

  return (
    <div className="App">
      <h3>User Token: {token} </h3>
      <h1>Todo</h1>
      <Todo />
    </div>
  )
}
