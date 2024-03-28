import React, { useReducer, createContext } from "react";

import uuid from "react-uuid";
// Skapa en type av size som kan vara ett av tre alternativ
type PizzaSize = "small" | "large" | "family";

type PizzaOrder ={
    PizzaType:[{ id:"",price:''}],


}

// kopplia ihop pizzatype med pizza size
type PizzaType = {
  id: string;
  size: PizzaSize;
  name: string;
  price: number;
  topping: Array<string>;
};
//lagra alla pizzor i totalorder med typen PizzaOrder
type GlobalState = {
  PizzaList: PizzaType[];
  TotalOrder:PizzaOrder[];
};
const initialState: GlobalState = {
  //  hur sätter vi vad en small ska kosta?
  PizzaList: [],
  TotalOrder:[],
};
// skapa metoder för att byta storlek på pizzan och lägga till, ta bort toppings
//lägg till metod för att räkna ihop pizzorna
type Action =
  | { type: "Switch_size"; payload: PizzaSize }
  | { type: "Add_Topping"; payload: string }
  | { type: "Remove_Topping"; payload: string }
  | {type: "Add_Pizza_to_order"; payload:PizzaType }
  | {type: "Sum_Order"; payload:PizzaType}


  export const GlobalStateContext = createContext <{state:GlobalState;
  }>({


  });


