"use client";
import React, { useState, useEffect } from "react";

function ModalUpdateQuote({ quoteId, onClose }) {
    const [quoteDetails, setQuoteDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [languageId, setLanguageId] = useState("");
    const [currencyId, setCurrencyId] = useState("");
    const [productsInQuote, setProductsInQuote] = useState([]);

    useEffect(() => {
        // Cargar los detalles de la cotización cuando el componente se monte
        // Asumiendo que tienes un endpoint para obtener los detalles de una cotización específica
        const fetchQuoteDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/quote/details/${quoteId}`);
                const data = await response.json();
                setQuoteDetails(data.quote);
                setName(data.quote.name);
                setLanguageId(data.quote.language_id);
                setCurrencyId(data.quote.currency_id);
                setProductsInQuote(data.quote.products_in_quote);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Crear el objeto de la cotización para enviarlo al servidor
        const updatedQuote = {
            name,
            language: languageId,
            currency: currencyId,
            products_in_quote: productsInQuote,
        };

        try {
            // Enviar la solicitud PUT o PATCH al servidor para actualizar la cotización
            const response = await fetch(`/api/quote/${quoteId}`, {
                method: "PUT", // o PATCH
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedQuote),
            });
            const data = await response.json();
            if (response.status === 200) {
                alert("Cotización actualizada con éxito");
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
        return <div>Cargando...</div>;
    }

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                {/* Aquí van los campos del formulario, similar a tu componente de creación de cotizaciones */}
                {/* Nombre, idioma, moneda, productos, etc. */}
                {/* Utiliza los estados (name, languageId, currencyId, etc.) para controlar los inputs */}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {/* ... otros campos del formulario ... */}
                <button type="submit" disabled={loading}>
                    Actualizar Cotización
                </button>
            </form>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
}

export default ModalUpdateQuote;
