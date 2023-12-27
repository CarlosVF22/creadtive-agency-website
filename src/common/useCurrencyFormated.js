import { useMemo } from "react";

const useCurrencyFormatter = (amount) => {
    return useMemo(() => {
        const formatter = new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0, // Puedes ajustar el número de decimales
        });

        return formatter.format(amount);
    }, [amount]);
};

export default useCurrencyFormatter;
