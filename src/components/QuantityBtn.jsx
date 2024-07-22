import "../styles/QuantityBtn.css";

const QuantityBtn = ({ quant }) => {

    return (
        <div className="amount">
            <button>-</button>
            <div className="quantity">{quant}</div>                    
            <button>+</button>
        </div>
    );
}

export default QuantityBtn;