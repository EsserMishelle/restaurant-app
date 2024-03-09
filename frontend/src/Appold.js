//imports
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { getUser } from "./utilities/users-service";
import * as itemsAPI from "./utilities/items-api";
//pages
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import NewOrder from "./pages/NewOrder/NewOrder";
import CategoryMenu from "./pages/Menu/CategoryMenu";
import MenuListItem from "./components/MenuListItem/MenuListItem";
import Menu from "./pages/NewOrder/Menu";
import CategoryList from "./components/CategoryList/CategoryList";
import LineItem from "./components/LineItem/LineItem";
import MenuItemDetail from "./pages/NewOrder/MenuItemDetail";
import MenuList from "./components/MenuList/MenuList";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import AdminDash from "./pages/AdminDash/AdminDash";
function App() {
  const [user, setUser] = useState(getUser());
  const [activeCat, setActiveCat] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();
  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, []);
  useEffect(() => {
    if (user && user.role === "admin") {
      navigate("/admin");
    } else if (user && user.role === "customer") {
      navigate("/orders/new");
    } else if (!user) {
      navigate("/");
    }
    // Add dependencies array to re-run effect when user changes
  }, [user, navigate]);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/users" element={<Auth setUser={setUser} />} />
        {user ? (
          <>
            {user.role === "admin" && (
              <Route path="/admin" element={<AdminDash />} />
            )}
            <Route
              path="/orders/new"
              element={<NewOrder user={user} setUser={setUser} />}
            />
            <Route
              path="/history"
              element={<OrderHistory user={user} setUser={setUser} />}
            />
          </>
        ) : (
          <>
            <Route
              path="/menu"
              element={
                <CategoryMenu
                  user={user}
                  categories={categoriesRef.current}
                  activeCat={activeCat}
                  setActiveCat={setActiveCat}
                />
              }
            />
            <Route
              path="/menu/:categoryId"
              element={
                <MenuListItem
                  menuItems={menuItems.filter(
                    (item) => item.category.name === activeCat
                  )}
                />
              }
            />
          </>
        )}

        {/* <Route
              path="/menu/:categoryId/:itemId"
              element={<MenuItemDetail />}
            /> */}
      </Routes>
    </div>
  );
}

export default App;
