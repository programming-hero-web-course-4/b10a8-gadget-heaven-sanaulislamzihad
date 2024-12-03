import { Helmet } from 'react-helmet-async';

const OrderProgressTracker = () => {
    return (
        <div>
            <Helmet>
                <title>Track Order | Gadget Tracker</title>
            </Helmet>
            <div className="bg-[#9538E2] pb-10 text-center pt-10">
                <h1 className="text-4xl font-bold text-white">Order Progress Tracker</h1>
                <p className="text-white mt-4 px-8 md:px-24 lg:px-64">
                    Stay updated on every stage of your order. Enter your details below to see where your package is!
                </p>
            </div>

            <div className="container mx-auto lg:px-16 py-10">
                <h2 className="text-center text-xl md:text-3xl font-bold textColor">Track Your Order Status</h2>
                <div className="flex justify-center mt-8">
                    <div className="flex flex-col items-center bg-white shadow-lg border-t-4 border-[#9538E2] rounded-xl p-6 md:p-10 w-11/12 md:w-8/12 lg:w-6/12">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
                        />
                        <input
                            type="text"
                            placeholder="Enter order number"
                            className="input input-bordered w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
                        />
                        <button className="bg-[#9538E2] px-5 py-3 text-white rounded-lg font-bold hover:bg-purple-800">
                            Track Order
                        </button>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-center text-2xl md:text-3xl font-semibold textColor">Your Order Status</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-8">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#9538E2] text-white w-10 h-10 flex items-center justify-center rounded-full">
                                1
                            </div>
                            <p className="text-[#9538E2] font-bold">Order Placed</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-200 text-black w-10 h-10 flex items-center justify-center rounded-full">
                                2
                            </div>
                            <p className="text-gray-500 font-semibold">Processing</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-200 text-black w-10 h-10 flex items-center justify-center rounded-full">
                                3
                            </div>
                            <p className="text-gray-500 font-semibold">Shipped</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-200 text-black w-10 h-10 flex items-center justify-center rounded-full">
                                4
                            </div>
                            <p className="text-gray-500 font-semibold">Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProgressTracker;
