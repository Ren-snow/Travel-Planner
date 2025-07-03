"use client"

import { login } from "@/lib/auth-actions";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
                <Link href={"/"} className="flex items-center gap-2">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        width={50}
                        height={50}
                    />
                    <span className="text-2xl font-bold text-gray-800">
                        Travel Planner
                    </span>
                </Link>

                <div className="flex items-center space-x-4">
                    <Link
                        href={"/trips"}
                        className="text-sl0ate-900 hover:text-sky-500"
                    >
                        My Trips
                    </Link>
                    <Link
                        href={"/globe"}
                        className="text-sl0ate-900 hover:text-sky-500"
                    >
                        Globe
                    </Link>
                    <button className="flex gap-1 items-center justify-center bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-sm cursor-pointer" onClick={login}>
                        Sign In
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303   3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 -.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.084-.729.084-.729   1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.304 3.495.997   .108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93   0-1.31.47-2.38 1.236-3.22-.135-.303-.54-1.523.105-3.176 0 0   1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005   2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23  .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91   1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 .42.36.81 1.096.81 2.215 0 1.6-.015 2.885-.015   3.28 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
