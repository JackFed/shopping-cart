// Component for displaying the items available for purchase
import { useState } from "react";

export default function StoreItems() {
    
    const [inventory, setInventory] = useState(["Item1", "Item2"]); // Potentially useState to save api called items to local storage
    // Albums: { name: AlbumName, release: Release date (Specify day/year), id, imageUrl, artists}
    // artists: { id, name, externalUrl(spotify page)}
    // call get album from album id to get all tracks and info

    // TODO: Create function calls to fetch images and values for list items
    // Add UUI to each inventory item to use for React's key property
    
    return (
        <div className="inventory">
            <ul className="inventory-list">
                {inventory.map( (product, index) => {
                    return (
                    <li key={index}>
                        {product}
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}