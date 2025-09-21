import React from "react";
import "./TopSellingProducts.css";
import { useTheme } from '../../App';



const products = [
    { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
    { name: "Marco Lightweight Shirt", price: 128.5, quantity: 37, amount: 4754.5 },
    { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
    { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

const TopSellingProducts = () => {

    const { isDarkMode } = useTheme();

    return (
        <div className={`card ${isDarkMode ? "darkmode" : "lightmode"}`}>
            <span className={`title-table  ${isDarkMode ? "lightmode-text" : "darkmode-text"}`}>Top Selling Products</span>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody className={`${isDarkMode ? "lightmode-text" : "darkmode-text"}`}>
                    {products.map((p, i) => (
                        <tr key={i}>
                            <td>{p.name}</td>
                            <td>${p.price.toFixed(2)}</td>
                            <td>{p.quantity}</td>
                            <td>${p.amount.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopSellingProducts;
