import { Header, NAV_ITEMS } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";
import Home from "./Home";
import Books from "./Books";
import Movies from "./Movies";
import Games from "./Games"

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState(NAV_ITEMS[0].itemName);

  const onNavItemClick = (itemName) => {
    setCurrentPage(itemName);
  };

  const renderCurrentPage = () => {
    if (currentPage === "HOME") {
      return <Home />;
    } else if (currentPage === "BOOKS") {
      return <Books />;
    } else if (currentPage === "MOVIES") {
      return <Movies />;
    } else if (currentPage === "VIDEO GAMES") {
      return <Games />;
    }

    for (const navItem of NAV_ITEMS) {
      if (currentPage === navItem.itemName) {
        return navItem.component;
      }
    }
  };

  return (
    <div>
      <Header onNavItemClick={onNavItemClick} />
      <section>{renderCurrentPage()}</section>
      <Footer />
    </div>
  );
}
