import React, { useState, useEffect } from 'react';

interface DropdownOption {
    name: string;
    price: number;
}

const Pizza: React.FC = () => {
    const [selectedValues, setSelectedValues] = useState({
        dropdown1: "",
        dropdown2: "",
        dropdown3: "",
        dropdown4: "",
        dropdown5: "",
    });

    const [totalPrice, setTotalPrice] = useState(0);
    const [options, setOptions] = useState<DropdownOption[][]>([]);
    const [cart, setCart] = useState<{ name: string; price: number }[]>([]);

    useEffect(() => {
        fetchDropdownOptions();
    }, []);

    const fetchDropdownOptions = async () => {
        try {
            const response = await fetch('./src/pizzaOptions.json');
            const data = await response.json();

            const dropdownOptions: DropdownOption[][] = [
                data.sizes,
                data.toppings,
                data.toppings,
                data.toppings,
                data.toppings
            ];

            setOptions(dropdownOptions);
        } catch (error) {
            console.error('Error fetching dropdown options:', error);
        }
    };

    const updateCard = (event: React.ChangeEvent<HTMLSelectElement>, dropdown: string) => {
        setSelectedValues({
            ...selectedValues,
            [dropdown]: event.target.value
        });
    }

    const calculateTotalPrice = (values: typeof selectedValues) => {
        let price = 0;
        for (const dropdownName in values) {
            const selectedOption = values[dropdownName as keyof typeof values];
            if (selectedOption) {
                const option = options.find((dropdownOptions) =>
                    dropdownOptions.some((o) => o.name === selectedOption)
                )?.find((o) => o.name === selectedOption);
                if (option) {
                    price += option.price;
                }
            }
        }
        return price;
    }

    const addToCart = () => {
        const itemPrice = calculateTotalPrice(selectedValues);
        const newItem = {
            name: "Pizza", // Du kan lägga till logik för att bestämma namnet baserat på valda värden om det behövs
            price: itemPrice
        };

        setCart([...cart, newItem]);
        setTotalPrice(totalPrice + itemPrice);
        resetValues();
    }

    const removeFromCart = (index: number) => {
        const newCart = [...cart];
        const removedItem = newCart.splice(index, 1)[0];
        setCart(newCart);
        setTotalPrice(totalPrice - removedItem.price);
    }

    const resetValues = () => {
        setSelectedValues({
            dropdown1: "",
            dropdown2: "",
            dropdown3: "",
            dropdown4: "",
            dropdown5: "",
        });
    }

    return (
        <div>
            {options.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <>
                    {options.map((dropdownOptions, index) => (
                        <select key={index} onChange={(e) => updateCard(e, `dropdown${index + 1}`)}>
                            <option value="">---</option>
                            {dropdownOptions.map((option, optionIndex) => (
                                <option key={optionIndex} value={option.name}>{option.name}</option>
                            ))}
                        </select>
                    ))}

                    <button onClick={addToCart}>Lägg till i korg</button>
                    <div>
                        <h2>Varukorg</h2>
                        {cart.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}: {item.price} kr</p>
                                <button onClick={() => removeFromCart(index)}>Ta bort</button>
                            </div>
                        ))}
                        <p>Totalpris: {totalPrice} kr</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Pizza;
