import React, { useState } from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Header from './components/Header';
import SlidingBar from './SlidingBar';
const Status = () => {
    const [id, setId] = useState(0);
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: Complaints } = useContractRead(contract, "Complaints", id);

    return (
        <>
            <Header />
            <SlidingBar/>
            <div className="min-h-screen py-6 flex justify-center">
                <div className="relative w-full h-[80%] sm:max-w-5xl">
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20 h-full overflow-y-auto">
                        <div className="space-y-8">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Check Status of Your Complaint</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Enter your Complaint ID to view the status.</p>
                            <div className="space-y-6">
                                <div className="flex items-center justify-center space-x-4">
                                    <label htmlFor="complaintId" className="block text-sm font-medium leading-6 text-gray-900">Complaint ID:</label>
                                    <input 
                                        type="number" 
                                        id="complaintId"
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:w-[300px]"
                                        placeholder="Enter Complaint ID"
                                        onChange={(e) => setId(e.target.value)} 
                                    />
                                </div>
                                {Complaints && Complaints.title && (
                                    <div className="status-render-container md:w-[600px]">
                                        <h3 className="text-lg font-semibold leading-6 text-gray-900">Complaint Details:</h3>
                                        <p className="text-sm text-gray-600">Complaint Id: {(Complaints.id).toString()}</p>
                                        <p className="text-sm text-gray-600">Complaint by: {(Complaints.complaintRegisteredBy).toString()}</p>
                                        <p className="text-sm text-gray-600">Complaint Title: {Complaints.title}</p>
                                        <p className="text-sm text-gray-600">Approval Status: {Complaints.isApproved ? "Approved" : !Complaints.exists ? "Declined" : "Approval Pending"}</p>
                                        <p className="text-sm text-gray-600">Approval Remark: {Complaints.approvalRemark}</p>
                                        <p className="text-sm text-gray-600">Resolution Status: {Complaints.isResolved ? "Resolved" : "Resolution pending"}</p>
                                        <p className="text-sm text-gray-600 mb-2">Resolution Remark: {Complaints.resolutionRemark}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Status;
