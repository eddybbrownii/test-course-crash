// import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/nav.jsx';
import Title from './components/Title.jsx';
import Todo from './components/Todo.jsx';
import Modal from './components/Modal.jsx';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/Contact.jsx';
import Users from './pages/Users.jsx';

function App() {
  const [showModal, setShowModal] = useState(false);

  const onTodoDelete = () => setShowModal(false);
  const onModalCancel = () => setShowModal(false);

  const onModalConfirm = () => {
    console.log('Todo deleted');
    setShowModal(false);
  };

  useEffect(() => {
    console.log('App mounted');
  }, []);

  useEffect(() => {
    console.log(`on mount AND on ${showModal} change`);
  }, [showModal]);

  useEffect(() => {
    console.log('on mount AND on every re-render');
  });

  return (
    <Router>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Title />

              <div>
                <input
                  type="text"
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                />
                <button onClick={() => setShowModal(true)}>Add Todo</button>
              </div>

              <div className="todo__wrapper">
                <Todo
                  onTodoDelete={onTodoDelete}
                  title="Finish Frontend Simplified"
                  paragrah="Code along with the Frontend Simplified course"
                />
                <Todo
                  onTodoDelete={onTodoDelete}
                  title="Finish Interview Section"
                  paragrah="Prepare for the technical interview"
                />
                <Todo
                  onTodoDelete={onTodoDelete}
                  title="Land a $100k Job"
                  paragrah="Achieve financial independence"
                />
              </div>

              {showModal && (
                <Modal
                  onConfirm={onModalConfirm}
                  onCancel={onModalCancel}
                  title="Are you sure you want to delete this todo?"
                />
              )}
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:name" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;