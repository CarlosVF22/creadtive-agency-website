"use client";
import React, { useState, useEffect, useRef } from "react";

function DashboardPage() {
    const [checkedStates, setCheckedStates] = useState({});
    const [productText, setProductText] = useState([]);
    const [loading, setLoading] = useState(false);

    const messageRef = useRef(null);

    // variables states from fetch API
    const [products, setProducts] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [currency, setCurrency] = useState([]);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        setLoading(true);
        if (messageRef.current) {
            messageRef.current.innerHTML = "Loading..."; // Mensaje de carga
            messageRef.current.style.backgroundColor = "#67e8f9";
            messageRef.current.style.color = "#FFFF";
            messageRef.current.style.textAlign = "center";
            messageRef.current.style.fontWeight = "bold";
            messageRef.current.style.borderRadius = "10px";
        }

        try {
            const body = {
                quote: {
                    name: formData.get("quote_name"),
                    language: parseInt(formData.get("language_select")),
                    currency: parseInt(formData.get("currency_select")),
                    products_in_quote: productText,
                    introductory_text: formData.get("introductory_text"),
                    conclusion_text: formData.get("conclusion_text"),
                },
            };
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            setLoading(false);
            const data = await response.json();
            if (response.status === 200) {
                if (messageRef.current) {
                    // Verifica que messageRef.current no es null
                    messageRef.current.innerHTML = `Cotización creada, visitala en el siguiente enlace <a href="${process.env.NEXT_PUBLIC_APP_URL}${data.quote.url_path}" target="_blank" rel="noopener noreferrer" style="color: #464545; text-decoration: underline;">${process.env.NEXT_PUBLIC_APP_URL}${data.quote.url_path}</a>`;
                    messageRef.current.style.backgroundColor = "#b3d37a";
                    messageRef.current.style.color = "#464545";
                    messageRef.current.style.textAlign = "center";
                    messageRef.current.style.fontWeight = "bold";
                    messageRef.current.style.borderRadius = "10px";
                }
                window.location.reload();
            } else {
                throw new Error("Cotización no creada");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
            if (messageRef.current) {
                messageRef.current.innerHTML = `Error al crear la cotización`; // Mensaje de error
                messageRef.current.style.backgroundColor = "#FF8369";
                messageRef.current.style.color = "#FFFF";
                messageRef.current.style.textAlign = "center";
                messageRef.current.style.fontWeight = "bold";
                messageRef.current.style.borderRadius = "10px";
            }
        }
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

    const handleRecurringCharge = (productId, isChecked) => {
        setProductText((prevProductText) => {
            const productIndex = prevProductText.findIndex(
                (item) => item.id === productId
            );

            if (productIndex >= 0) {
                // Si el producto ya está en la lista, actualiza o elimina la propiedad recurring
                const updatedProductText = [...prevProductText];
                if (isChecked) {
                    updatedProductText[productIndex] = {
                        ...updatedProductText[productIndex],
                        recurring: true,
                    };
                } else {
                    const { recurring, ...rest } =
                        updatedProductText[productIndex];
                    updatedProductText[productIndex] = rest;
                }
                return updatedProductText;
            } else {
                // Si el producto no está en la lista y el checkbox está marcado, lo agrega con la propiedad recurring
                if (isChecked) {
                    return [
                        ...prevProductText,
                        { id: productId, text: "", recurring: true },
                    ];
                } else {
                    return prevProductText;
                }
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-2/4">
            <div>
                <p ref={messageRef}></p>
            </div>
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border min-h-96">
                <div className="p-2">
                    <label
                        for="quote_name"
                        class="block text-sm text-gray-500 "
                    >
                        Nombre de la cotización
                    </label>

                    <input
                        required
                        name="quote_name"
                        id="quote_name"
                        type="text"
                        placeholder="John Doe"
                        class="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
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
                                <option value={language.id}>
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
                                <option value={currency.id}>
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
                    />
                </div>
                <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                    {products.map((product) => {
                        const isChecked = checkedStates[product.id] || false;
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
                                                    onChange={(e) =>
                                                        handleCheckboxChange(
                                                            product.id,
                                                            e.target.checked
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
                                        {product.name_es} <br />
                                        <small className="italic">
                                            ({product.name_en})
                                        </small>
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
                                        <div>
                                            <input
                                                type="number"
                                                required
                                                placeholder="Precio"
                                                className="border rounded-md"
                                                value={productPriceValue || ""} // Permite valores nulos o cadenas vacías
                                                onChange={(e) =>
                                                    handlePriceChange(
                                                        product.id,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <div>
                                                <input
                                                    id="recurring_charge"
                                                    type="checkbox"
                                                    className="rounded-md"
                                                    onChange={(e) =>
                                                        handleRecurringCharge(
                                                            product.id,
                                                            e.target.checked
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="recurring_charge"
                                                    className="pl-2"
                                                >
                                                    <small>
                                                        Cobro recurrente
                                                    </small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
                <div className="p-2">
                    <label
                        for="conclusion_text"
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
                        id="conclusion_text"
                        name="conclusion_text"
                    />
                </div>
            </div>
            <div>
                <p ref={messageRef}></p>
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
