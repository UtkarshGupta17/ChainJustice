import React, { useState } from 'react';
import Link from 'next/link';
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const address = useAddress();

    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: officer } = useContractRead(contract, "officer")

    return (
        <header className="bg-white shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1 p-1">
                        {/* <span className="sr-only">FIR Portal</span> */}
                        <img className="h-20 w-auto" src="https://i.ibb.co/RPwfmFW/image-removebg-preview.png" alt="FIR Portal Logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="/#" className="block text-lg font-semibold leading-6 text-gray-900">
                        Register FIR
                    </Link>
                    <Link href="/Status" className="block text-lg font-semibold leading-6 text-gray-900">
                        Check Status
                    </Link>

                    <Link href="/Emergencycontacts" className="text-lg font-semibold leading-6 text-gray-900">
                        Emergency Contacts
                    </Link>
                    {address && officer === address && (
                        <Link href="/Admin" className="block text-lg font-semibold leading-6 text-gray-900">
                            Admin
                        </Link>
                    )}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                    <ConnectWallet accentColor='blue' colorMode='light' />
                </div>
            </nav>
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        <Link href="/#" className="block text-lg font-semibold leading-6 text-gray-900">
                            Register Fir
                        </Link>
                        <Link href="/Status" className="block text-lg font-semibold leading-6 text-gray-900">
                            Check Status
                        </Link>
                        <Link href="/Emergencycontacts" className="text-lg font-semibold leading-6 text-gray-900">
                            Emergency Contacts
                        </Link>
                        {address && officer === address && (
                            <Link href="/Admin" className="block text-lg font-semibold leading-6 text-gray-900">
                                Admin
                            </Link>
                        )}

                        <div className="mt-4">
                            <ConnectWallet accentColor='blue' colorMode='light' />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
