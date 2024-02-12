import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, AddUser, EditUser } from './components';

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-7 md:pt-10">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD operation with Redux Toolkit
      </h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;