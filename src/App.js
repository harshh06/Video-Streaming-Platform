import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import VideoListQuery from "./components/VideoListQuery";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Body />
            </>
        ),
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "watch",
                element: <WatchPage />,
            },
            {
                path: "search",
                element: <VideoListQuery />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <div className="">
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;
