"use client";

import React from "react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
    return (
        <div>
            <button
                className="bg-button-primary-color text-white px-4 py-2 rounded-md mt-4"
                onClick={() => signOut()}
            >
                Logout
            </button>
        </div>
    );
}
