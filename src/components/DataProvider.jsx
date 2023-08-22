import React, { createContext, useState, useEffect } from "react";

// SPECIAL DESSERTS
import menu1 from "/src/assets/images/menu/image1.png";
import menu2 from "/src/assets/images/menu/image2.png";
import menu3 from "/src/assets/images/menu/image3.png";
import menu4 from "/src/assets/images/menu/image4.png";
import menu5 from "/src/assets/images/menu/image5.png";
import menu6 from "/src/assets/images/menu/image6.png";

// APPETIZERS
import menu7 from "/src/assets/images/menu/image7.png";
import menu8 from "/src/assets/images/menu/image8.png";
import menu9 from "/src/assets/images/menu/image9.png";
import menu10 from "/src/assets/images/menu/image10.png";
import menu11 from "/src/assets/images/menu/image11.png";
import menu12 from "/src/assets/images/menu/image12.png";

// VEGAN DESSERTS
import menu13 from "/src/assets/images/menu/image13.png";
import menu14 from "/src/assets/images/menu/image14.png";
import menu15 from "/src/assets/images/menu/image15.png";
import menu16 from "/src/assets/images/menu/image16.png";
import menu17 from "/src/assets/images/menu/image17.png";
import menu18 from "/src/assets/images/menu/image18.png";

// ORDERDessertS
import menu19 from "/src/assets/images/order/image19.png";
import menu20 from "/src/assets/images/order/image20.png";
import menu21 from "/src/assets/images/order/image21.png";

export const DataContext = createContext();
export default function DataProvider(props) {
  // SPECIAL DESSERTS LIST
  const [specialDesserts, setSpecialDesserts] = useState([
    {
      _id: "01",
      count: 1,
      price: 4_000,
      image: menu1,
      title: "Small Chops",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "02",
      count: 1,
      price: 3_000,
      image: menu2,
      title: "Bean/Plantain Waffles",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "03",
      count: 1,
      price: 4_000,
      image: menu3,
      title: "Donkwa",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "04",
      count: 1,
      price: 2_000,
      image: menu4,
      title: "Peanut Butter Cookies",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "05",
      count: 1,
      price: 4_000,
      image: menu5,
      title: "Banana/Almond Butter Cake",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "06",
      count: 1,
      price: 4_000,
      image: menu6,
      title: "Nakia (Rice cake)",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
  ]);

  // APPETIZERS LIST
  const [appetizers, setAppetizers] = useState([
    {
      _id: "07",
      count: 1,
      price: 4_500,
      image: menu7,
      title: "Plantain Chips",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "08",
      count: 1,
      price: 2_000,
      image: menu8,
      title: "Peanut Butter Cookies",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "09",
      count: 1,
      price: 1_500,
      image: menu9,
      title: "Gulisua",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "10",
      count: 1,
      price: 1_200,
      image: menu10,
      title: "Chin Chin",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "11",
      count: 1,
      price: 3_200,
      image: menu11,
      title: "Coconut Cookies",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "12",
      count: 1,
      price: 2_000,
      image: menu12,
      title: "Rouge Dessert",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
  ]);

  // VEGAN DESSERTS LIST
  const [veganDesserts, setVeganDesserts] = useState([
    {
      _id: "13",
      count: 1,
      price: 3_500,
      image: menu13,
      title: "Bean Cake (Akara)",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "14",
      count: 1,
      price: 1_500,
      image: menu14,
      title: "Mango Cream Dessert",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "15",
      count: 1,
      price: 5_000,
      image: menu15,
      title: "Plantain Chocolate Fudge Cake",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "16",
      count: 1,
      price: 2_000,
      image: menu16,
      title: "Cookie Crisp",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "17",
      count: 1,
      price: 4_000,
      image: menu17,
      title: "Masa",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "18",
      count: 1,
      price: 3_000,
      image: menu18,
      title: "Shaku Shaku",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
  ]);

  // ORDERDessertS LIST
  const [orderDesserts, setOrderDesserts] = useState([
    {
      _id: "19",
      count: 1,
      price: 2_500,
      image: menu19,
      title: "Akara Crepes",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "20",
      count: 1,
      price: 3_000,
      image: menu20,
      title: "Akara with pepper sauce",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
    {
      _id: "21",
      count: 1,
      price: 3_500,
      image: menu21,
      title: "Akara Pancake",
      alt: "Delicious Delicacy",
      description:
        "Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.",
    },
  ]);

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);

  // ADD TO CART FOR SPECIAL DESSERTS LIST

  const addSpecialDesserts = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = specialDesserts.filter((specialDessert) => {
        return specialDessert._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  // ADD TO CART FOR APPETIZERS LIST
  const addAppetizers = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = appetizers.filter((appetizer) => {
        return appetizer._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  // VEGAN DESSERTS LISTS
  const addVeganDesserts = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = veganDesserts.filter((veganDessert) => {
        return veganDessert._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  // ORDERDessertS LISTS
  const addOrderDesserts = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = orderDesserts.filter((order) => {
        return order._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  // LOCAL STORAGE PERSIST
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    appetizers: [appetizers, setAppetizers],
    orderDesserts: [orderDesserts, setOrderDesserts],
    veganDesserts: [veganDesserts, setVeganDesserts],
    specialDesserts: [specialDesserts, setSpecialDesserts],

    cart: [cart, setCart],
    addAppetizers: addAppetizers,
    addOrderDesserts: addOrderDesserts,
    addVeganDesserts: addVeganDesserts,
    addSpecialDesserts: addSpecialDesserts,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
