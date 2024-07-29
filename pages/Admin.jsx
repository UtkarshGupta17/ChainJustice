import React, { useState } from 'react';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import Header from './components/Header';
import SlidingBar from './SlidingBar';

const Getter = () => {
    const [id, setId] = useState(0);
    const [rId, setRId] = useState(0);
    const [aRemark, setARemark] = useState("");
    const [rRemark, setRRemark] = useState("");
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: nextId } = useContractRead(contract, "nextId")
    const { data: pendingApprovals } = useContractRead(contract, "pendingApprovals", 0)
    const { data: pendingResolutions } = useContractRead(contract, "pendingResolutions", 0)
    const { mutateAsync: calcPendingApprovalIds } = useContractWrite(contract, "calcPendingApprovalIds")
    const { mutateAsync: calcPendingResolutionIds } = useContractWrite(contract, "calcPendingResolutionIds")

    const { mutateAsync: approveComplaint } = useContractWrite(contract, "approveComplaint")
    const { mutateAsync: resolveComplaint } = useContractWrite(contract, "resolveComplaint")
    const { mutateAsync: discardComplaint } = useContractWrite(contract, "discardComplaint")

    const getPendingApprovals = async () => {
        try {
            const data = await calcPendingApprovalIds([]);
            console.info("contract call success", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const getPendingResolutions = async () => {
        try {
            const data = await calcPendingResolutionIds([]);
            console.info("contract call success", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleApproveComplaint = async () => {
        try {
            const data = await approveComplaint([id, aRemark]);
            console.info("contract call success", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleDeclineComplaint = async () => {
        try {
            const data = await discardComplaint([id, aRemark]);
            console.info("contract call success", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleResolveComplaint = async () => {
        try {
            const data = await resolveComplaint([rId, rRemark]);
            console.info("contract call success", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    return (
        <>
            <Header />
            <SlidingBar />
            <div className="min-h-screen py-6 flex items-center justify-center bg-gray-100">
                <div className="relative w-full h-[80%] sm:max-w-5xl">
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20 h-full overflow-y-auto">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold leading-7 text-gray-900">Pending Approvals</h2>
                                <div className="flex items-center mt-3">
                                    <button className="button-common hover:bg-blue-900" onClick={getPendingApprovals}>Next Pending Approval ID</button>
                                    {pendingApprovals && (
                                        <p className="getter-card-number ml-3 text-xl font-semibold">: {pendingApprovals.toString()}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="approvalId" className="block text-sm font-medium leading-6 text-gray-900">Complaint Id</label>
                                        <input 
                                            type="number" 
                                            id="approvalId" 
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                            placeholder="Enter Id Here"
                                            onChange={(e) => setId(e.target.value)} 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="approvalRemark" className="block text-sm font-medium leading-6 text-gray-900">Your Remark</label>
                                        <input 
                                            type="text" 
                                            id="approvalRemark" 
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                            placeholder="Enter Remark Here"
                                            onChange={(e) => setARemark(e.target.value)} 
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-x-4 mt-4">
                                    <button className="button-common hover:bg-blue-900" onClick={handleApproveComplaint}>Approve Complaint</button>
                                    <button className="button-common hover:bg-blue-900" onClick={handleDeclineComplaint}>Decline Complaint</button>
                                </div>
                            </div>
                            
                            <hr className="my-8 border-gray-400"/>


                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold leading-7 text-gray-900">Pending Resolutions</h2>
                                <div className="flex items-center mt-3">
                                    <button className="button-common hover:bg-blue-900" onClick={getPendingResolutions}>Next Pending Resolution ID</button>
                                    {pendingResolutions && (
                                        <p className="getter-card-number ml-3 text-xl font-semibold">: {pendingResolutions.toString()}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="resolutionId" className="block text-sm font-medium leading-6 text-gray-900">Complaint Id</label>
                                        <input 
                                            type="number" 
                                            id="resolutionId" 
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                            placeholder="Enter Id Here"
                                            onChange={(e) => setRId(e.target.value)} 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="resolutionRemark" className="block text-sm font-medium leading-6 text-gray-900">Your Remark</label>
                                        <input 
                                            type="text" 
                                            id="resolutionRemark" 
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                            placeholder="Enter Remark Here"
                                            onChange={(e) => setRRemark(e.target.value)} 
                                        />
                                    </div>
                                </div>
                                <button className="button-common hover:bg-blue-900 mt-4" onClick={handleResolveComplaint}>Resolve Complaint</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

<<<<<<< HEAD
export default Getter;
=======
export default Getter;
>>>>>>> 7f88cd834d14c5e601a48bf31cb97ce3f11e1c44
