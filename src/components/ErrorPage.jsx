
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log("Error is: ",error);

    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold text-center my-10">Error Found. Please check console for more details.</h1>
        </div>
    );
};

export default ErrorPage;