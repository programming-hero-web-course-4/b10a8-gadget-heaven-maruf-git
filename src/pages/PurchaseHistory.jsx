import { useContext } from "react";
import UserContext from "../context/UserContext";
import History from "../components/History";


const PurchaseHistory = () => {
    const { purchaseHistories } = useContext(UserContext);
    console.log("Our Purchase history:", purchaseHistories);

    return (
        <div>
            <div className="bg-[rgb(149,56,226)] py-10 ">
                <div className="text-center text-white">
                    <h1 className="text-3xl font-bold mb-3">Purchase History</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices<br />to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <div className="border border-red-400">
                    {/* for each history */}
                    {
                        purchaseHistories.map((purchaseHistory, idx) => <History key={idx} purchaseHistory={purchaseHistory} ></History>)
                    }
                </div>

            </div>

        </div>
    );
};

export default PurchaseHistory;