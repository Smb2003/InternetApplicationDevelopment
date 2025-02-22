import { useSelector, useDispatch } from "react-redux";
import { generateQuote } from "./redux/quoteSlice";
import "./styles.css";

const QuoteGenerator = () => {
    const quote = useSelector((state) => state.quote.quote);
    
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Random Quote Generator</h1>
            <p className="quote">{quote}</p>
            <button onClick={() => dispatch(generateQuote())}>New Quote</button>
        </div>
    );
}
export default QuoteGenerator;