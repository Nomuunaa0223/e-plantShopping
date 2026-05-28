```jsx
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  {
    id: 1,
    category: "Air Purifying",
    name: "Snake Plant",
    price: 15,
    image: "https://source.unsplash.com/300x300/?snake-plant"
  },
  {
    id: 2,
    category: "Air Purifying",
    name: "Peace Lily",
    price: 18,
    image: "https://source.unsplash.com/300x300/?peace-lily"
  },
  {
    id: 3,
    category: "Air Purifying",
    name: "Spider Plant",
    price: 12,
    image: "https://source.unsplash.com/300x300/?spider-plant"
  },
  {
    id: 4,
    category: "Air Purifying",
    name: "Aloe Vera",
    price: 14,
    image: "https://source.unsplash.com/300x300/?aloe-vera"
  },
  {
    id: 5,
    category: "Air Purifying",
    name: "Rubber Plant",
    price: 20,
    image: "https://source.unsplash.com/300x300/?rubber-plant"
  },
  {
    id: 6,
    category: "Air Purifying",
    name: "Boston Fern",
    price: 16,
    image: "https://source.unsplash.com/300x300/?fern"
  },

  {
    id: 7,
    category: "Succulents",
    name: "Echeveria",
    price: 10,
    image: "https://source.unsplash.com/300x300/?succulent"
  },
  {
    id: 8,
    category: "Succulents",
    name: "Jade Plant",
    price: 13,
    image: "https://source.unsplash.com/300x300/?jade-plant"
  },
  {
    id: 9,
    category: "Succulents",
    name: "Haworthia",
    price: 11,
    image: "https://source.unsplash.com/300x300/?cactus"
  },
  {
    id: 10,
    category: "Succulents",
    name: "Burro Tail",
    price: 17,
    image: "https://source.unsplash.com/300x300/?succulent-pot"
  },
  {
    id: 11,
    category: "Succulents",
    name: "Zebra Plant",
    price: 12,
    image: "https://source.unsplash.com/300x300/?zebra-plant"
  },
  {
    id: 12,
    category: "Succulents",
    name: "String of Pearls",
    price: 19,
    image: "https://source.unsplash.com/300x300/?string-of-pearls-plant"
  },

  {
    id: 13,
    category: "Tropical",
    name: "Monstera",
    price: 25,
    image: "https://source.unsplash.com/300x300/?monstera"
  },
  {
    id: 14,
    category: "Tropical",
    name: "Pothos",
    price: 15,
    image: "https://source.unsplash.com/300x300/?pothos"
  },
  {
    id: 15,
    category: "Tropical",
    name: "Philodendron",
    price: 22,
    image: "https://source.unsplash.com/300x300/?philodendron"
  },
  {
    id: 16,
    category: "Tropical",
    name: "Calathea",
    price: 21,
    image: "https://source.unsplash.com/300x300/?calathea"
  },
  {
    id: 17,
    category: "Tropical",
    name: "Bird of Paradise",
    price: 30,
    image: "https://source.unsplash.com/300x300/?bird-of-paradise-plant"
  },
  {
    id: 18,
    category: "Tropical",
    name: "Fiddle Leaf Fig",
    price: 28,
    image: "https://source.unsplash.com/300x300/?fiddle-leaf-fig"
  }
];

export default function ProductList({ setPage }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div>
      <nav className="navbar">
        <a href="#" onClick={() => setPage("home")}>
          Home
        </a>

        <a href="#" onClick={() => setPage("plants")}>
          Plants
        </a>

        <a href="#" onClick={() => setPage("cart")}>
          Cart 🛒 {totalItems}
        </a>
      </nav>

      <div className="products">
        <h1>Houseplants</h1>

        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>

            <div className="grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const added = cart.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div className="card" key={plant.id}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>

                      <p>${plant.price}</p>

                      <button
                        disabled={added}
                        onClick={() =>
                          dispatch(addToCart(plant))
                        }
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
```
