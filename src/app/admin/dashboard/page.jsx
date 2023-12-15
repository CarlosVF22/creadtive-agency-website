"use client";
import React, { useState } from "react";

import appData from "../../data/app.json";

function DashboardPage() {
    const [checkedStates, setCheckedStates] = useState({});
    const [productText, setProductText] = useState([]);

    const handleCheckboxChange = (productId, isChecked) => {
        setCheckedStates({ ...checkedStates, [productId]: isChecked });
    };

    const handleTextChange = (productId, text) => {
        setProductText((prevProductText) => {
            // Buscar si el producto ya existe en el estado
            const existingProductIndex = prevProductText.findIndex(
                (item) => item.id === productId
            );

            if (existingProductIndex > -1) {
                // Actualizar el texto para el producto existente
                const updatedProductText = [...prevProductText];
                updatedProductText[existingProductIndex] = {
                    id: productId,
                    text,
                };
                return updatedProductText;
            } else {
                // Agregar un nuevo producto al estado
                return [...prevProductText, { id: productId, text }];
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const body = {
                products_in_quote: productText,
            };
            const response = await fetch("/api/create-quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            console.log(data);
            console.log(body); // Manejar la respuesta
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="w-2/4">
            <div>
                <label
                    for="username"
                    class="block text-sm text-gray-500 dark:text-gray-300"
                >
                    A quien va dirigida la cotización
                </label>

                <input
                    type="text"
                    placeholder="John Doe"
                    class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />
            </div>
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                    {appData.products.map((product) => {
                        const isChecked = checkedStates[product.id] || false;
                        const existingProduct = productText.find(
                            (item) => item.id === product.id
                        );
                        const productTextValue = existingProduct
                            ? existingProduct.text
                            : "";
                        return (
                            <div
                                key={product.id}
                                role="button"
                                class="flex items-center flex-col w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            >
                                <label
                                    htmlFor="vertical-list-react"
                                    class="flex items-center w-full px-3 py-2 cursor-pointer"
                                >
                                    <div class="grid mr-3 place-items-center">
                                        <div class="inline-flex items-center">
                                            <label
                                                class="relative flex items-center p-0 rounded-full cursor-pointer"
                                                htmlFor="vertical-list-react"
                                            >
                                                <input
                                                    id={`vertical-list-${product.id}`}
                                                    type="checkbox"
                                                    onChange={(e) =>
                                                        handleCheckboxChange(
                                                            product.id,
                                                            e.target.checked
                                                        )
                                                    }
                                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                />
                                                <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-3.5 w-3.5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="1"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                        {product.name_es}
                                    </p>
                                </label>
                                {isChecked && (
                                    <div className="w-full px-2">
                                        <textarea
                                            type="text"
                                            placeholder="Escribe aquí..."
                                            className="border rounded-md w-full"
                                            rows={5}
                                            onChange={(e) =>
                                                handleTextChange(
                                                    product.id,
                                                    e.target.value
                                                )
                                            }
                                            value={productTextValue}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-button-primary-color text-white px-4 py-2 rounded-md mt-4"
                >
                    Crear
                </button>
            </div>
        </form>
    );
}
export default DashboardPage;
