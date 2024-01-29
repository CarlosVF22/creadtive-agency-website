import FormQuote from "../../../components/App/FormQuote";
import QuoteList from "../../../components/App/QuoteList";

const supabaseUrl = "https://uxuzervjxytasyjkwvyh.supabase.co/rest/v1"; // URL de la API de Supabase para obtener productos
const supabaseKey = process.env.SUPABASE_KEY; // Tu clave de Supabase

const headers = new Headers();
headers.append("apikey", supabaseKey);
headers.append("Authorization", `Bearer ${supabaseKey}`);
headers.append("Content-Type", "application/json");
headers.append("Prefer", "return=representation");

const requestOptions = {
    method: "GET",
    headers: headers,
    cache: "no-store", // Especifica que no se guarde en caché
};

async function getProducts() {
    try {
        const response = await fetch(`${supabaseUrl}/Product`, requestOptions);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Devolver un array vacío en caso de error
    }
}
async function getCurrency() {
    try {
        const response = await fetch(`${supabaseUrl}/Currency`, requestOptions);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const currency = await response.json();
        return currency;
    } catch (error) {
        console.error("Error fetching currency:", error);
        return []; // Devolver un array vacío en caso de error
    }
}
async function getLanguages() {
    try {
        const response = await fetch(`${supabaseUrl}/Language`, requestOptions);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const languages = await response.json();
        return languages;
    } catch (error) {
        console.error("Error fetching currency:", error);
        return []; // Devolver un array vacío en caso de error
    }
}
export default async function page() {
    const products = await getProducts();
    const currency = await getCurrency();
    const languages = await getLanguages();
    return (
        <div className="flex">
            <FormQuote
                products={products}
                currency={currency}
                languages={languages}
            />
            <QuoteList />
        </div>
    );
}
