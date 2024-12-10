import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import ResumeUpload from "./components/ResumeUpload";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import ProcessResume from "./components/ProcessResume";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            children: [
                {
                    path: "/upload",
                    element: <ResumeUpload />,
                },
                {
                    path: "/process-form",
                    element: <ProcessResume />,
                }
            ],
        },
    ]);
    return (
        <Provider store={store}>
            <ThemeProvider>
                <RouterProvider router={router} />
                <ToastContainer />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
