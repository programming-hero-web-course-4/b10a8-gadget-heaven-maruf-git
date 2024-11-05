import { useContext } from "react";
import UserContext from "../context/UserContext";


const Statistics = () => {
    const {user}= useContext(UserContext)
    return (
        <div className="max-w-screen-xl mx-auto min-h-[100vh]">
            statistics {user}
        </div>
    );
};

export default Statistics;