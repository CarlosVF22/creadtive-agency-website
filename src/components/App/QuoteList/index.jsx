"use client";

import React, { useEffect, useState } from "react";
import { Edit, Trash, ExternalLink } from "react-feather";
import ModalDeleteQuote from "../ModalDeleteQuote";
import ModalUpdateQuote from "../ModalUpdateQuote";

export default function QuoteList({ products, currency, languages }) {
    const [quotes, setQuotes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [selectedQuoteId, setSelectedQuoteId] = useState(null);
    const [selectedQuoteName, setSelectedQuoteName] = useState(null);
    const limit = 4; // Número de cotizaciones por página

    useEffect(() => {
        const fetchQuotes = async () => {
            const response = await fetch(
                `/api/quote?page=${currentPage}&limit=${limit}`
            );
            const data = await response.json();
            setQuotes(data.quotes);
            setTotalPages(data.totalPages);
        };
        fetchQuotes();
    }, [currentPage]);

    const openModalDelete = (quoteId, quoteName) => {
        setSelectedQuoteId(quoteId);
        setSelectedQuoteName(quoteName);
        setIsModalOpenDelete(true);
    };

    const openModalUpdate = (quoteId) => {
        setSelectedQuoteId(quoteId);
        setIsModalOpenUpdate(true);
    };

    const closeModalDelete = () => {
        setIsModalOpenDelete(false);
        setSelectedQuoteId(null);
    };

    const closeModalUpdate = () => {
        setIsModalOpenUpdate(false);
        setSelectedQuoteId(null);
    };

    const handleDelete = async (quoteId) => {
        try {
            const response = await fetch(`/api/quote?id=${quoteId}`, {
                method: "DELETE",
            });
            const data = await response.json();

            if (response.status === 200) {
                setQuotes(quotes.filter((quote) => quote.id !== quoteId));
                closeModalDelete();
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error("Error al eliminar la cotización:", error);
        }
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <ul role="list" className="divide-y divide-gray-100 w-2/4 px-2">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border p-2 h-96 overflow-y-auto">
                    {quotes.map((quote) => {
                        const linkToQuote = `${process.env.NEXT_PUBLIC_APP_URL}${quote.url_path}`;
                        return (
                            <div>
                                <li
                                    key={quote.url_path}
                                    className="flex justify-between gap-x-6 py-5 items-center hover:bg-lime-50"
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
                                    <div className="flex gap-x-4">
                                        <button
                                            onClick={() =>
                                                openModalUpdate(quote.id)
                                            }
                                        >
                                            {/* Icono de actualizar */}
                                            <Edit />
                                        </button>
                                        <button
                                            onClick={() =>
                                                openModalDelete(
                                                    quote.id,
                                                    quote.name
                                                )
                                            }
                                        >
                                            {/* Icono de eliminar */}
                                            <Trash />
                                        </button>
                                        <a
                                            href={linkToQuote}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {/* Icono de ir al enlace */}
                                            <ExternalLink />
                                        </a>
                                    </div>
                                </li>
                                <hr />
                            </div>
                        );
                    })}
                </div>
                <div>
                    <button
                        className="px-2"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </button>
                    <span>{currentPage}</span>
                    <button
                        className="px-2"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Siguiente
                    </button>
                </div>
            </ul>
            <ModalDeleteQuote
                isOpen={isModalOpenDelete}
                onClose={closeModalDelete}
                onDelete={handleDelete}
                quoteId={selectedQuoteId}
                quoteName={selectedQuoteName}
            />
            <ModalUpdateQuote
                isOpen={isModalOpenUpdate}
                onClose={closeModalUpdate}
                quoteId={selectedQuoteId}
                products={products}
                currency={currency}
                languages={languages}
            />
        </>
    );
}
