/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getById } from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";

function MenuItemDetail({ item }) {
  const navigate = useNavigate();

  // const [cart, setCart] = useState(null);

  // async function handleAddToOrder() {
  //   const updatedCart = await ordersAPI.addItemToCart(itemId);
  //   setCart(updatedCart);
  // }
  // useEffect(() => {
  //   if (!itemId) {
  //     console.error("itemId is undefined");
  //     return;
  //   }
  //   const fetchItem = async () => {
  //     try {
  //       console.log(`Fetching item with ID: ${itemId}`);
  //       const fetchedItem = await getById(itemId);

  //       setItemDetails(fetchedItem);
  //     } catch (error) {
  //       console.error("Error fetching menu item details:", error);
  //     }
  //   };
  //   fetchItem();
  // }, [itemId]);

  if (!item) {
    return <div>No menu item found</div>;
  }

  // function handleBackToMenu() {
  //   navigate("/menu");
  // }

  return (
    <div>
      <div>
        <h1>{item.name}</h1>
        {item.description && <h3> {item.description}</h3>}
        <p>Pirce: {item.price}</p>
        {item.img && (
          <>
            <img
              src={item.img}
              alt={item.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </>
        )}
      </div>

      {/* <button
        onClick={handleBackToMenu}
        style={{ height: "20px", width: "30px" }}
      >
        Back to Menu
      </button> */}
    </div>
  );
}
export default MenuItemDetail;
