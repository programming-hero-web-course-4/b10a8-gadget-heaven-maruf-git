import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Helmet } from "react-helmet-async";


const Statistics = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto min-h-[100vh]">
                statistics {user}
            </div>
        </div>

    );
};

export default Statistics;