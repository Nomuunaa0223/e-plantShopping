import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, category: "Air Purifying", name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b77" },
  { id: 2, category: "Air Purifying", name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
  { id: 3, category: "Air Purifying", name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 4, category: "Air Purifying", name: "Aloe Vera", price: 14, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
  { id: 5, category: "Air Purifying", name: "Rubber Plant", price: 20, image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a" },
  { id: 6, category: "Air Purifying", name: "Boston Fern", price: 16, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411" },

  { id: 7, category: "Succulents", name: "Echeveria", price: 10, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc" },
  { id: 8, category: "Succulents", name: "Jade Plant", price: 13, image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb" },
  { id: 9, category: "Succulents", name: "Haworthia", price: 11, image: "https://images.unsplash.com/photo-1463320726281-696a485928c7" },
  { id: 10, category: "Succulents", name: "Burro Tail", price: 17, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
  { id: 11, category: "Succulents", name: "Zebra Plant", price: 12, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
  { id: 12, category: "Succulents", name: "String of Pearls", price: 19, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411" },

  { id: 13, category: "Tropical", name: "Monstera", price: 25, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
  { id: 14, category: "Tropical", name: "Pothos", price: 15, image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683" },
  { id: 15, category: "Tropical", name: "Philodendron", price: 22, image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f" },
  { id: 16, category: "Tropical", name: "Calathea", price: 21, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 17, category: "Tropical", name: "Bird of Paradise", price: 30, image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a" },
  { id: 18, category: "Tropical", name: "Fiddle Leaf Fig", price: 28, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" }
];

export default function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      <nav className="navbar">
        <a onClick={() => setPage("home")}>Home</a>
        <a onClick={() => setPage("plants")}>Plants</a>
        <a onClick={() => setPage("cart")}>Cart 🛒 {totalItems}</a>
      </nav>

      <div className="products">
        <h1>Houseplants</h1>

        {categories.map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="grid">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => {
                  const added = cart.some(item => item.id === plant.id);
                  return (
                    <div className="card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />
                      <h3>{plant.name}</h3>
                      <p>${plant.price}</p>
                      <button
                        disabled={added}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {added ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
