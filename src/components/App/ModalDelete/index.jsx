"use client";
import React from "react";

const ModalDelete = ({ isOpen, onClose, onDelete, quoteId, quoteName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold">Eliminar Cotización</h2>
                <p className="my-2">
                    ¿Estás seguro de que deseas eliminar esta cotización con
                    nombre <span className="font-bold">{quoteName}</span> ?
                </p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded bg-gray-200"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => onDelete(quoteId)}
                        className="px-4 py-2 rounded bg-red-500 text-white"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;
