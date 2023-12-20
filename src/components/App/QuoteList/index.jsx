"use client";

import React, { useEffect, useState } from "react";

export default function QuoteList() {
    const [quotes, setQuotes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 4; // Número de cotizaciones por página

    useEffect(() => {
        const fetchQuotes = async () => {
            const response = await fetch(
                `/api/quote?page=${currentPage}&limit=${limit}`
            );
            const data = await response.json();
            setQuotes(data.quotes);
        };
        fetchQuotes();
    }, [currentPage]);

    const handlePrevPage = () => {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <ul role="list" className="divide-y divide-gray-100 w-2/4 px-2">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border p-2 h-96 overflow-y-auto">
                    {quotes.map((quote) => {
                        const linkToQuote = `${process.env.NEXT_PUBLIC_APP_URL}${quote.url_path}`;
                        return (
                            <li
                                key={quote.url_path}
                                className="flex justify-between gap-x-6 py-5"
                            >
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">
                                            {quote.name}
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={linkToQuote}
                                            >
                                                {linkToQuote}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                    {quotes.length < limit && (
                        <div
                            className={`h-${(limit - quotes.length) * 25}`}
                        ></div>
                    )}
                </div>
                <div>
                    <button className="px-2" onClick={handlePrevPage}>
                        Anterior
                    </button>
                    <span>{currentPage}</span>
                    <button className="px-2" onClick={handleNextPage}>
                        Siguiente
                    </button>
                </div>
            </ul>
        </>
    );
}
