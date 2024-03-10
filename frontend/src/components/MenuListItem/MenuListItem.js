import styles from "./MenuListItem.module.css";
// import { Link } from "react-router-dom";
import MenuItemModal from "../Modal/MenuItemModal";
import MenuItemDetail from "../../pages/Menu/MenuItemDetail";
import { useState } from "react";

export default function MenuListItem({ menuItems }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const items = menuItems.map((item, _id) => (
    <div
      className={styles.MenuListItem}
      key={_id}
      onClick={() => handleItemClick(item)}
      style={{ cursor: "pointer" }}
    >
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          style={{ maxWidth: "250px", height: "auto", border: "1px solid red" }}
        />
      )}
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <h1>${item.price}</h1>
    </div>
  ));
  return (
    <main className={styles.MenuListItem}>
      {items}
      <MenuItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedItem && <MenuItemDetail item={selectedItem} />}
      </MenuItemModal>
    </main>
  );
}
