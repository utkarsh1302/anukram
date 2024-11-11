import ConfigProvider from "antd/es/config-provider/index";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./pages/App/App.tsx";
import "./index.css";
import Login from "./pages/Login/Login.tsx";
import MyTasks from "./pages/MyTask/MyTasks.tsx";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "mytasks",
        element: <MyTasks />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Rubik",
        },
        components: {
          Layout: {
            headerBg: "#FAFAFA",
            headerHeight: 56,
            margin: 8,
            siderBg: "#FAFAFA",
            bodyBg: "#FAFAFA",
            footerBg: "#FAFAFA",
          },
          Menu: {
            itemBg: "#455F77",
            itemSelectedColor: "black",
            itemSelectedBg: "#FAFAFA",
            itemHoverBg: "#9E9BA2",
          },
        },
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
