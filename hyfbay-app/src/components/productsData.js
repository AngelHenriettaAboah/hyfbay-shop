import LapImage from "./lap4.jpg";
import Tpack from "./Tpack.jpg";
import SneakerImage from "./sneaker 2.jpg";

const productsData = [
  {
    id: 1,
    name: "Laptop",
    description: "Powerful laptop for all your needs",
    category: "Electronics",
    price: 999,
    quantity: 5,
    image: LapImage,
  },
  {
    id: 2,
    name: "T-shirt",
    description: "Comfortable cotton t-shirt",
    category: "Clothing",
    price: 20,
    quantity: 10,
    image: Tpack,
  },
  {
    id: 3,
    name: "Sneakers",
    description: "Stylish footwear for all seasons",
    category: "Household Goods",
    price: 15,
    quantity: 20,
    image: SneakerImage,
  },
];

export default productsData;
