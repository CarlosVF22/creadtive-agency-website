import FormQuote from "../../../components/App/FormQuote";
import QuoteList from "../../../components/App/QuoteList";
import {
    getProducts,
    getCurrency,
    getLanguages,
} from "../../../libs/supabaseApi";

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
            <QuoteList
                products={products}
                currency={currency}
                languages={languages}
            />
        </div>
    );
}
