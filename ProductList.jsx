import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

const plants = [
  // Category 1
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Air Purifying Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 5,
    name: "Boston Fern",
    category: "Air Purifying Plants",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Air Purifying Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },

  // Category 2
  {
    id: 7,
    name: "Monstera",
    category: "Tropical Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1614594575929-b7f2f7e6b7d5",
  },
  {
    id: 8,
    name: "Calathea",
    category: "Tropical Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 9,
    name: "Bird of Paradise",
    category: "Tropical Plants",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1597055181300-a7b668ea1f3c",
  },
  {
    id: 10,
    name: "Philodendron",
    category: "Tropical Plants",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1614594575929-b7f2f7e6b7d5",
  },
  {
    id: 11,
    name: "Dieffenbachia",
    category: "Tropical Plants",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  },
  {
    id: 12,
    name: "Croton",
    category: "Tropical Plants",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },

  // Category 3
  {
    id: 13,
    name: "Jade Plant",
    category: "Succulent Plants",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Succulent Plants",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 15,
    name: "Haworthia",
    category: "Succulent Plants",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 16,
    name: "String of Pearls",
    category: "Succulent Plants",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112",
  },
  {
    id: 17,
    name: "Zebra Haworthia",
    category: "Succulent Plants",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 18,
    name: "Panda Plant",
    category: "Succulent Plants",
    price: 21,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying Plants",
    "Tropical Plants",
    "Succulent Plants",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      {/* Product Listing */}
      <div className="product-container">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
