import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import { PAGES } from './routes/pages';
import About from './pages/about';
import Books from './pages/books';
import UsingColorBrands from './theme';
import { SnackbarProvider } from 'notistack';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PAGES.HOME.link,
        element: <Books />,
      },
      {
        path: PAGES.ABOUT.link,
        element: <About />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsingColorBrands>
      <SnackbarProvider maxSnack={3}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </UsingColorBrands>
  </React.StrictMode>
);