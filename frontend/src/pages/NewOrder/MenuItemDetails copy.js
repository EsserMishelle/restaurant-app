import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getById } from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
function MenuItemDetail() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [cart, setCart] = useState(null);
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }
  useEffect(() => {
    const fetchItem = async () => {
      try {
        // console.log(`Fetching item with ID: ${itemId}`);
        const fetchedItem = await getById(itemId);
        // console.log("Fetched item:", fetchedItem);
        setItem(fetchedItem);
      } catch (error) {
        console.error("Error fetching menu item details:", error);
      }
    };
    fetchItem();
  }, [itemId]);
  function handleBackToMenu() {
    navigate("/menu");
  }
  if (!item) {
    return <div>No menu item found</div>;
  }
  return (
    <div>
      <h1>{item.name}</h1>
      {item.description && <h3> {item.description}</h3>}
      <p>Pirce: {item.price}</p>
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
      <button onClick={handleAddToOrder}>Add to Cart</button>
      <button onClick={handleBackToMenu}>Back to Menu</button>
    </div>
  );
}
export default MenuItemDetail;
