import "../styles/QuantityBtn.css";

const QuantityBtn = ({ quant, setQuant }) => {

    const addQuant = () => {
        setQuant(prev => prev + 1);
    }

    const subQuant = () => {
        if ( quant > 0) {
            setQuant(prev => prev - 1);
        }
    }

    return (
        <div className="amount">
            <button onClick={subQuant}>-</button>
            <div className="quantity">{quant}</div>                    
            <button onClick={addQuant}>+</button>
        </div>
    );
}

export default QuantityBtn;