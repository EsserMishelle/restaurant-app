import styles from "./MenuListItem.module.css";
// import { Link } from "react-router-dom";
export default function MenuListItem({ menuItems }) {
  const items = menuItems.map((item, _id) => (
    <div className={styles.MenuListItem} key={_id}>
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          style={{ maxWidth: "150px", height: "auto" }}
        />
      )}
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <h1>${item.price}</h1>
    </div>
  ));
  return <main className={styles.MenuListItem}>{items}</main>;
}

//   <div className={styles.MenuListItem}>
//     <Link to={`/menu/category/${menuItems._id}`} className="menu-item-link">
//     <div className={styles.img + " " + "flex-ctr-ctr"}>
//       {menuItems.img && <img
//         src={menuItems.img}
//         alt={menuItems.name}
//         style={{ maxWidth: "150px", height: "auto" }}
//       />}
//     </div>
//     <div className={styles.name}>{menuItems.name}</div>
//     </Link>
//     <div className={styles.buy}>
//       <span>${menuItems.price.toFixed(2)}</span>

//       <button
//         className="btn-sm"
//         onClick={() => handleAddToOrder(menuItems._id)}
//       >
//         ADD
//       </button>
//     </div>
//   </div>
// );

// console.log(items);
//   return <main className={styles.MenuListItem}>{items}</main>;}
