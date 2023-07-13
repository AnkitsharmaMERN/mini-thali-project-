// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Chekout from './Component/Chekout';
import Navbar from './Component/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children:[
      {
        path :"/",
        element: <Home/>
      },
      {
        path:'/chekout',
        element:<Chekout/>
      }
    ]
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
