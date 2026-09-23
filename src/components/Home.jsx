import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/todo" id="todo-link">
        Go to Todo List
      </Link>
    </div>
  );
}

export default Home;
