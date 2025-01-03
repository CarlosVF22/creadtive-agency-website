"use client";

import Logo from "../../../../public/img/logo-light.png";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const messageRef = useRef(null);

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        if (messageRef.current) {
            messageRef.current.innerHTML = "Loading..."; // Mensaje de carga
            messageRef.current.style.backgroundColor = "#b3d37a";
            messageRef.current.style.color = "#FFFF";
            messageRef.current.style.textAlign = "center";
            messageRef.current.style.fontWeight = "bold";
            messageRef.current.style.borderRadius = "10px";
        }

        const res = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        });

        setLoading(false);

        if (res.error) {
            if (messageRef.current) {
                messageRef.current.innerHTML = res.error; // Mensaje de error
                messageRef.current.style.backgroundColor = "#FF8369";
                messageRef.current.style.color = "#FFFF";
                messageRef.current.style.textAlign = "center";
                messageRef.current.style.fontWeight = "bold";
                messageRef.current.style.borderRadius = "10px";
            }
        } else {
            router.push("/admin/dashboard");
        }
    };
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    className="mx-auto w-56 h-auto"
                    src={Logo}
                    alt="Creadtive Agency Logo"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight color-text-primary-color">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="mb-2 p-2" ref={messageRef}></div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-button-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:ring-lime-400"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
