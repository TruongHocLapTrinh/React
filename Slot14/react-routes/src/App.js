import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Tất cả route khác đều phải bọc ProtectedRoute */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <ProtectedRoute>
                <PostDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
