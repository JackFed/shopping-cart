
const StoreItem = ({ title }) => {

    return (
        <div className="store-item">
            <img src="#" alt="Album cover" />
            <h3>{title}</h3>
            <p>Artist name</p>
            <p># tracks</p>            
        </div>
    );
}

export default StoreItem;