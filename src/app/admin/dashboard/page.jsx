import FormQuote from "../../../components/App/FormQuote";
import QuoteList from "../../../components/App/QuoteList";

export default function page() {
    return (
        <div className="flex">
            <FormQuote />
            <QuoteList />
        </div>
    );
}
