import StoreItems from "./StoreItems";

const HomePage = () => {

    return (
        <div className="home-page">
            <h1>Home</h1>
            <div className="search">
                <img src="#" alt="Search icon" />
                <input type="text" name="seach-albums" id="seach-albums" placeholder="Search"/>
            </div>
            <div className="products">
                <h2>Shop latest hits</h2>
                <StoreItems />
            </div>
        </div>
    );
}

export default HomePage;