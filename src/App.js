import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Board from "./Table";
import PostForm from "./PostForm";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" Component={Board} />
          <Route exact path="/board/write" Component={PostForm} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
