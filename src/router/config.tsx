
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/home/page";
import ArticlesPage from "../pages/articles/page";
import ArticleDetailPage from "../pages/article/page";
import CategoriesPage from "../pages/categories/page";
import AboutPage from "../pages/about/page";
import GetStartedPage from "../pages/get-started/page";
import NotFound from "../pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/articles",
    element: <ArticlesPage />,
  },
  {
    path: "/article/:id",
    element: <ArticleDetailPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/get-started",
    element: <GetStartedPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
