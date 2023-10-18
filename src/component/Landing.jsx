import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextComp from "./TextComp";
import { TodoList } from "./TodoList";
import Nav from "./Nav";


export const Landing = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<TextComp />}/>
        <Route path="todo" element={<TodoList />}/>
      </Routes>
    </BrowserRouter>
  );
};
