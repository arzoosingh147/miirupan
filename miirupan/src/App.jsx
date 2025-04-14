import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindWork from './pages/FindWork';
import PostProject from "./pages/Postproject";
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import Community from "./pages/Community";
import CreatePost from "./pages/CreatePost"; 
import PostDetails from "./pages/PostDetails";
import UserDashboard from "./pages/UserDashboard";
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-work" element={<FindWork />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/community" element={<Community />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
