
// I reviewed the way of coding and npm commands from https://www.mattbutton.com/
//I followed the same way of coding and useing what he explained og npm commands in this Assignment 



import React from 'react';
import './App.css';
import TodoList from 'features/todoList/Todolist';
import AddTodo from 'features/todoList/AddTodo';
import Footer from 'features/visibilityFilter/Footer';
import { useDispatch } from 'react-redux';
import { loadTodos, createTodoList } from 'features/todoList/todoSlice';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.location.pathname === '/'){
      dispatch(createTodoList());
    } else {
      dispatch(loadTodos());
    }
  }, [dispatch]);

  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}