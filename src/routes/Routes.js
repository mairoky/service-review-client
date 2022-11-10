import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import EditReview from "../pages/EditReview/EditReview";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Register/Register";
import Review from "../pages/Review/Review";
import Service from "../pages/Service/Service";
import Services from "../pages/Services/Services";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://service-review-server-three.vercel.app/home-services')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://service-review-server-three.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://service-review-server-three.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-reviews',
                element: <ProtectedRoutes><Review></Review></ProtectedRoutes>
            },
            {
                path: '/add-service',
                element: <ProtectedRoutes><AddService></AddService></ProtectedRoutes>
            },
            {
                path: '/edit-review/:id',
                element: <ProtectedRoutes><EditReview></EditReview></ProtectedRoutes>,
                loader: ({ params }) => fetch(`https://service-review-server-three.vercel.app/edit-review/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])