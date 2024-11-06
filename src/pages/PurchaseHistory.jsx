import { useContext } from "react";
import UserContext from "../context/UserContext";
import History from "../components/History";
import { Helmet } from "react-helmet-async";


const PurchaseHistory = () => {
    const { purchaseHistories } = useContext(UserContext);
    console.log("Our Purchase history:", purchaseHistories);

    return (
        <div className=" ">
            <Helmet>
                <title>Purchase History</title>
            </Helmet>
            <div className="bg-[rgb(149,56,226)] py-10 text-center text-white">
                <h1 className="text-3xl font-bold mb-3">Purchase History</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices<br />to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-[rgb(246,246,246)] ">
                <div className="max-w-screen-xl mx-auto py-10 ">
                    <div className="">
                        {/* for each history */}
                        {
                            (purchaseHistories.length) ?
                                purchaseHistories.map((purchaseHistory, idx) => <History key={idx} purchaseHistory={purchaseHistory} ></History>)
                                :
                                <div className="min-h-[30vh] flex flex-col items-center justify-center gap-1">
                                    <h1 className="text-2xl font-bold">No Previous Purchase History</h1>
                                    <p className="">Please Purchase Some Products</p>
                                </div>
                        }
                    </div>

                </div>

            </div>

        </div>
    );
};

export default PurchaseHistory;