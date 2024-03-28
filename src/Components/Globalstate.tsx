import React, { useReducer, createContext } from "react";

import uuid from "react-uuid";
// Skapa en type av size som kan vara ett av tre alternativ
type PizzaSize = "small" | "large" | "family";

// kopplia ihop pizzatype med pizza size
type PizzaType = {
  id: string;
  size: PizzaSize;
  name: string;
  price: number;
  topping: Array<string>;
};
type GlobalState = {
  PizzaList: PizzaType[];
};
const initialState: GlobalState = {
  //  hur sätter vi vad en small ska kosta?
  PizzaList: [],
};
// skapa metoder för att byta storlek på pizzan och lägga till, ta bort toppings
type Action =
  | { type: "Switch size"; payload: PizzaSize }
  | { type: "Add Topping"; payload: string }
  | { type: "Remove Topping"; payload: string };
