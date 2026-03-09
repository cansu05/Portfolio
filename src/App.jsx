import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from "./layouts/Main";
import { ROUTES } from "./config/routes";
import Landing from "./pages/Landing";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));

const withSuspense = (component) => (
  <Suspense fallback={null}>{component}</Suspense>
);

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: ROUTES.about,
        element: withSuspense(<About />),
      },
      {
        path: ROUTES.projects,
        element: withSuspense(<Projects />),
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
