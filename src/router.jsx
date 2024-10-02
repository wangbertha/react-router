import { createBrowserRouter } from "react-router-dom"
import Red from "./Red";
import Blue from "./Blue";

const router = createBrowserRouter([
    {
        path: "/blue",
        element: <Blue />,
    },
    {
        path: "/red",
        element: <Red />,
    },
]);

export default router;