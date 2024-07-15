
const StoreItem = ({ title }) => {

    return (
        <button className="store-item">
            <img src="#" alt="Album cover" />
            <h3>{title}</h3>
            <p>Artist name</p>
            <p># tracks</p>            
        </button>
    );
}

export default StoreItem;