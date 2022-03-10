import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './Component/CreatePost'
import Home from './Pages/Home'
import EditPost from './Component/EditPost';
import Navbar from './Pages/Navbar';
import DeletePost from './Component/DeletePost';

const App = () => {
    return (
      <>
            <section>
                <header>
                    <Navbar/>
                </header>
        </section>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createposts" element={<CreatePost />} />
              <Route path="/editposts/:id" element={<EditPost />} />
              <Route path="/deletepost/:id" element={<DeletePost/>}/>
            </Routes>
          </Router>
        </main>
      </>
    );
}

export default App
