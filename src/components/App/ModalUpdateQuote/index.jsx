"use client";
import React, { useState, useEffect } from "react";

function ModalUpdateQuote({ quoteId, onClose, isOpen }) {
    if (!isOpen) return null;
    const [quoteDetails, setQuoteDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [introductoryText, setIntroductoryText] = useState("");
    const [conclusionText, setConclusionText] = useState("");
    const [name, setName] = useState("");
    const [languageId, setLanguageId] = useState("");
    const [currencyId, setCurrencyId] = useState("");
    const [checkedStates, setCheckedStates] = useState({});
    const [productText, setProductText] = useState([]);

    const [products, setProducts] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [currency, setCurrency] = useState([]);

    const handleCheckboxChange = (productId, isChecked) => {
        setCheckedStates({ ...checkedStates, [productId]: isChecked });

        if (!isChecked) {
            // Si el checkbox está siendo desmarcado, elimina la información del producto
            setProductText((prevProductText) =>
                prevProductText.filter((item) => item.id !== productId)
            );
        }
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

    const handlePriceChange = (productId, price) => {
        const priceValue = price === "" ? null : Number(price);

        setProductText((prevProductText) => {
            const productIndex = prevProductText.findIndex(
                (item) => item.id === productId
            );

            if (productIndex >= 0) {
                // Si el producto ya está en la lista, actualiza su precio
                const updatedProductText = [...prevProductText];
                updatedProductText[productIndex] = {
                    ...updatedProductText[productIndex],
                    product_price: priceValue,
                };
                return updatedProductText;
            } else {
                // Si el producto no está en la lista, lo agrega con precio
                return [
                    ...prevProductText,
                    { id: productId, text: "", product_price: priceValue },
                ];
            }
        });
    };

    useEffect(() => {
        const fetchQuoteDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `/api/quote/details?id=${quoteId}`
                );
                const data = await response.json();
                setQuoteDetails(data.quote);
                setName(data.quote.name);
                setLanguageId(data.quote.language_id);
                setCurrencyId(data.quote.currency_id);
                setIntroductoryText(data.quote.introductory_text);
                setConclusionText(data.quote.conclusion_text);

                // Actualizar los estados con los productos de la cotización
                const newCheckedStates = {};
                const newProductText = [];
                data.quote.Quote_Product.forEach((product) => {
                    newCheckedStates[product.product_id] = true;
                    newProductText.push({
                        id: product.product_id,
                        text: product.product_text,
                        product_price: product.product_price,
                    });
                });

                setCheckedStates(newCheckedStates);
                setProductText(newProductText);

                setLoading(false);
            } catch (error) {
                console.error(
                    "Error al cargar los detalles de la cotización",
                    error
                );
                setLoading(false);
            }
        };
        fetchQuoteDetails();
    }, [quoteId]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("/api/product");
            const data = await response.json();
            setProducts(data.allProducts);
        };
        const fetchLanguages = async () => {
            const response = await fetch("/api/language");
            const data = await response.json();
            setLanguages(data.allLanguages);
        };
        const fetchCurrency = async () => {
            const response = await fetch("/api/currency");
            const data = await response.json();
            setCurrency(data.allCurrency);
        };
        fetchProducts();
        fetchLanguages();
        fetchCurrency();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Preparar los productos para la actualización
        const updatedProductsInQuote = productText.filter(
            (product) => checkedStates[product.id]
        );

        // Crear el objeto de la cotización para enviarlo al servidor
        const updatedQuote = {
            name,
            language: languageId,
            currency: currencyId,
            products_in_quote: updatedProductsInQuote,
            introductory_text: introductoryText,
            conclusion_text: conclusionText,
        };

        try {
            // Enviar la solicitud PUT al servidor para actualizar la cotización
            const response = await fetch(`/api/quote?id=${quoteId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedQuote),
            });
            const data = await response.json();
            if (response.status === 200) {
                console.log(data);
                onClose(); // Cierra el modal
            } else {
                throw new Error(
                    data.message || "Error al actualizar la cotización"
                );
            }
        } catch (error) {
            console.error("Error al actualizar la cotización:", error);
        } finally {
            setLoading(false);
        }
    };

    if (!quoteDetails) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-1/4">
                    Cargando...
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white  rounded-lg shadow-lg w-2/4 overflow-y-auto h-3/4">
                <div className="w-full flex justify-end">
                    {" "}
                    <button
                        className="text-red-500 font-semibold p-2"
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="w-full p-2">
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border min-h-96">
                        <div className="p-2">
                            <label
                                for="quote_name"
                                class="block text-sm text-gray-500"
                            >
                                Nombre de la cotización
                            </label>
                            <input
                                required
                                name="quote_name"
                                id="quote_name"
                                type="text"
                                placeholder="Nombre de la cotización"
                                value={name} // Estado que mantiene el nombre actual de la cotización
                                onChange={(e) => setName(e.target.value)}
                                class="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div className="p-2">
                            <label
                                for="language_select"
                                class="block text-sm text-gray-500"
                            >
                                Selecciona el idioma
                            </label>

                            <select name="language_select" id="language_select">
                                {languages.map((language) => {
                                    return (
                                        <option
                                            value={language.id}
                                            selected={languageId}
                                            onChange={(e) =>
                                                setLanguageId(e.target.value)
                                            }
                                        >
                                            {language.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="p-2">
                            <label
                                for="currency_select"
                                class="block text-sm text-gray-500"
                            >
                                Selecciona la moneda
                            </label>

                            <select name="currency_select" id="currency_select">
                                {currency.map((currency) => {
                                    return (
                                        <option
                                            value={currency.id}
                                            selected={currencyId}
                                            onChange={(e) =>
                                                setCurrencyId(e.target.value)
                                            }
                                        >
                                            {currency.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="p-2">
                            <label
                                for="introductory_text"
                                class="block text-sm text-gray-500"
                            >
                                Texto introductorio
                            </label>

                            <textarea
                                type="text"
                                required
                                placeholder="Escribe aquí..."
                                className="border rounded-md w-full"
                                rows={5}
                                id="introductory_text"
                                name="introductory_text"
                                value={introductoryText}
                                onChange={(e) =>
                                    setIntroductoryText(e.target.value)
                                }
                            />
                        </div>
                        <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                            {products.map((product) => {
                                const isChecked =
                                    checkedStates[product.id] || false;
                                const existingProduct = productText.find(
                                    (item) => item.id === product.id
                                );
                                const productTextValue = existingProduct
                                    ? existingProduct.text
                                    : "";
                                const productPriceValue = existingProduct
                                    ? existingProduct.product_price
                                    : 0;
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
                                                            checked={isChecked}
                                                            onChange={(e) =>
                                                                handleCheckboxChange(
                                                                    product.id,
                                                                    e.target
                                                                        .checked
                                                                )
                                                            }
                                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:n before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
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
                                                    required
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
                                                <input
                                                    type="number"
                                                    required
                                                    placeholder="Precio"
                                                    className="border rounded-md"
                                                    value={
                                                        productPriceValue || ""
                                                    } // Permite valores nulos o cadenas vacías
                                                    onChange={(e) =>
                                                        handlePriceChange(
                                                            product.id,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>
                        <div className="p-2">
                            <label
                                for="introductory_text"
                                class="block text-sm text-gray-500"
                            >
                                Conclusión
                            </label>

                            <textarea
                                type="text"
                                required
                                placeholder="Escribe aquí..."
                                className="border rounded-md w-full"
                                rows={5}
                                id="introductory_text"
                                name="introductory_text"
                                value={conclusionText}
                                onChange={(e) =>
                                    setConclusionText(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-button-primary-color text-white px-4 py-2 rounded-md mt-4"
                            disabled={loading}
                        >
                            Actualizar cotización
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalUpdateQuote;
