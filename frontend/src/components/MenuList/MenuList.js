import React, { useState } from "react";
import styles from "./MenuList.module.css";

import MenuItemModal from "../Modal/MenuItemModal";
import MenuItemDetail from "../../pages/Menu/MenuItemDetail";

// import { Link } from "react-router-dom";

export default function MenuList({ menuItems, handleAddToOrder }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const items = menuItems.map((item) => (
    <div
      key={item._id}
      onClick={() => handleItemClick(item)}
      style={{ cursor: "pointer" }}
    >
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          style={{
            maxWidth: "250px",
            height: "auto",
            border: "1px solid #648565",
          }}
        />
      )}

      <div className={styles.name}>{item.name}</div>
      <p className={styles.description}>{item.description}</p>
      <span className={styles.price}>${item.price}</span>
      <button
        className={styles.add}
        onClick={(e) => {
          e.stopPropagation(); // Prevent the modal from opening when the button is clicked
          handleAddToOrder(item._id);
        }}
      >
        ADD
      </button>
    </div>
  ));

  return (
    <main className={styles.MenuList}>
      {items}
      <MenuItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedItem && <MenuItemDetail item={selectedItem} />}
      </MenuItemModal>
    </main>
  );
}
