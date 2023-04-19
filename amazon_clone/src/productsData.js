import db from "./firebase";

const products = [
  {
    image:
      "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    price: 142900,
    rating: 5,
    title:
      "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/5108FS%2B7Y9L._SL1500_.jpg",
    price: 41990,
    rating: 5,
    title:
      "LG 437 L 2 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-T432APZY, Shiny Steel, Convertible)",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_UY327_FMwebp_QL65_.jpg",
    price: 79899,
    rating: 4,
    title: "New Apple iPhone 12 (64GB) - Green",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81CQWK4ytrL._AC_UL480_FMwebp_QL65_.jpg",
    price: 5999,
    rating: 4,
    title:
      "AGARO - 33310 Marvel Series 48-Litre Oven Toaster Griller with Motorized Rotisserie & 3 Heating Modes (Black)",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71lzebmm77L._SL1500_.jpg",
    price: 14490,
    rating: 5,
    title:
      "Whirlpool 7 Kg 5 Star Royal Plus Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL PLUS 7.0, Grey, Hard Water Wash)",
  },
];

products.forEach((product) => {
  db.collection("products").add(product);
});
