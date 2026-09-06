import { memo, useMemo, useState, lazy, Suspense } from "react";
import "./App.css";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function Product({ product }) {
    console.log("Rendering:", product.name);

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
        </div>
    );
}

// React.memo prevents unnecessary re-rendering
const MemoProduct = memo(Product);

const products = [
    { name: "Laptop", price: 60000 },
    { name: "Smartphone", price: 30000 },
    { name: "Headphones", price: 5000 },
    { name: "Keyboard", price: 2000 },
    { name: "Mouse", price: 1000 }
];

function App() {
    const [count, setCount] = useState(0);
    const [showHeavy, setShowHeavy] = useState(false);

    // useMemo avoids recalculating this value unnecessarily
    const totalPrice = useMemo(() => {
        console.log("Calculating total price...");

        return products.reduce(
            (total, product) => total + product.price,
            0
        );
    }, []);

    return (
        <div className="container">
            <h1>React Performance Demo</h1>

            <p>
                This project demonstrates techniques used to
                optimize React application performance.
            </p>

            <div className="counter">
                <h2>Counter: {count}</h2>

                <button onClick={() => setCount(count + 1)}>
                    Increase Counter
                </button>
            </div>

            <h2>Products</h2>

            <div className="products">
                {products.map((product) => (
                    <MemoProduct
                        key={product.name}
                        product={product}
                    />
                ))}
            </div>

            <h3>Total Price: ₹{totalPrice}</h3>

            <button onClick={() => setShowHeavy(!showHeavy)}>
                {showHeavy ? "Hide" : "Load"} Heavy Component
            </button>

            {showHeavy && (
                <Suspense fallback={<p>Loading component...</p>}>
                    <HeavyComponent />
                </Suspense>
            )}
        </div>
    );
}

export default App;
