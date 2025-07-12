import About from "./pages/About";
import { RouterProvider, createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import MainLayout from "./layouts/Main";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
