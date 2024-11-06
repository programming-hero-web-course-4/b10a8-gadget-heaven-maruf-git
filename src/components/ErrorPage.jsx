
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log("Error is: ", error);

    return (
        <div className="max-w-screen-xl mx-auto my-10 flex flex-col justify-center items-center gap-2">
            <Link
                to="/"
                className="btn rounded-full w-[150px] bg-[rgb(149,56,226)] text-white"
            >
                Home
            </Link>
            <h1 className="text-3xl font-bold text-center ">
                You are in the Wrong Path.
            </h1>
            <h1 className="text-3xl font-bold text-center ">
                Please go back to Home page.
            </h1>

        </div>
    );
};

export default ErrorPage;