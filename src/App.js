import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './components/Rootlayout';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<TodoList/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Route>
))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
