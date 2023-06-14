import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Setting from "./components/pages/settings/Setting";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/register" exact Component={Register}/>
        <Route path="/login" exact Component={Login} />
        <Route path="/write" exact Component={Write}/>
        <Route path="/settings" exact Component={Setting} />
        <Route path="/post/:postId" exact Component={Single}/>
      </Routes>
    </Router>
  );
}

export default App;
