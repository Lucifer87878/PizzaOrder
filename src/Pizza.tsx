import React, { useState } from 'react';

// Skapa en typ för dina data
interface CardData {
    dropdown1: string;
    dropdown2: string;
    dropdown3: string;
    dropdown4: string;
    dropdown5: string;
}

const Pizza: React.FC = () => {
    // Antag att du har dina olika arrayer här
    const array1: string[] = ["---", "Barn Pizza", "Vanlig Pizza", "Familje Pizza"];
    const array2: string[] = ["---", "Ost", "Skinka", "Bannan", "Gorgonzola", "Champinjoner", "Annanas"];
    const array3: string[] = ["---", "Ost", "Skinka", "Bannan", "Gorgonzola", "Champinjoner", "Annanas"];
    const array4: string[] = ["---", "Ost", "Skinka", "Bannan", "Gorgonzola", "Champinjoner", "Annanas"];
    const array5: string[] = ["---", "Ost", "Skinka", "Bannan", "Gorgonzola", "Champinjoner", "Annanas"];

    // States för att hålla valda värden från dropdowns
    const [selectedValues, setSelectedValues] = useState<CardData>({
        dropdown1: "",
        dropdown2: "",
        dropdown3: "",
        dropdown4: "",
        dropdown5: "",
    });

    // Funktion för att uppdatera kortet baserat på valen i dropdown-menyer
    const updateCard = (event: React.ChangeEvent<HTMLSelectElement>, dropdown: string) => {
        setSelectedValues({
            ...selectedValues,
            [dropdown]: event.target.value
        });
    }

    return (
        <div>
            {/* Dropdown-menyer */}
            <select onChange={(e) => updateCard(e, "dropdown1")}>
                {array1.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            <select onChange={(e) => updateCard(e, "dropdown2")}>
                {array2.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            <select onChange={(e) => updateCard(e, "dropdown3")}>
                {array3.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            <select onChange={(e) => updateCard(e, "dropdown4")}>
                {array4.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            <select onChange={(e) => updateCard(e, "dropdown5")}>
                {array5.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            {/* Kort för att visa valda värden */}
            <div>
                <p>Pizza Storlek: {selectedValues.dropdown1}</p>
                <p>Topping 2: {selectedValues.dropdown2}</p>
                <p>Dropdown 3: {selectedValues.dropdown3}</p>
                <p>Dropdown 4: {selectedValues.dropdown4}</p>
                <p>Dropdown 5: {selectedValues.dropdown5}</p>

                <button>Läggtill exta tillbehör eller ändra</button>
                <button>Lägg till korg</button>  
                {/* den lägger till chech out */}
            </div>
        </div>
    );
}

export default Pizza;
