import React from 'react';
import './ProductQuantityButton.scss';

const ProductQuantityButton = ({ minQuantity = 1, maxQuantity = 10, quantity = 1, setQuantity = () => {} }) => {
    const increase = (e) => {
        e.preventDefault();
        if (quantity + 1 <= maxQuantity) setQuantity(quantity + 1);
    };

    const decrease = (e) => {
        e.preventDefault();
        if (quantity - 1 >= minQuantity) setQuantity(quantity - 1);
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (minQuantity < parseInt(e.target.value) && parseInt(e.target.value) < maxQuantity) {
            setQuantity(e.target.value);
        } else if (parseInt(e.target.value) >= maxQuantity) {
            setQuantity(maxQuantity);
        } else if (parseInt(e.target.value) <= minQuantity) {
            setQuantity(minQuantity);
        }
    };

    return (
        <div className="qty-input">
            <button
                disabled={quantity === minQuantity}
                className="qty-count qty-count--minus"
                data-action="minus"
                type="button"
                onClick={(e) => decrease(e)}
            >
                -
            </button>
            <input
                className="product-qty"
                type="number"
                name="product-qty"
                min={minQuantity}
                max={maxQuantity}
                value={quantity}
                onChange={(e) => handleChange(e)}
            />
            <button
                disabled={quantity === maxQuantity}
                className="qty-count qty-count--add"
                data-action="add"
                type="button"
                onClick={(e) => increase(e)}
            >
                +
            </button>
        </div>
    );
};

export default ProductQuantityButton;
