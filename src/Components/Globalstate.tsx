import React, { useReducer, createContext } from "react";

import uuid from "react-uuid";
// Skapa en type av size som kan vara ett av tre alternativ
type PizzaSize = "small" | "large" | "family";
// hela ordern
type PizzaOrder ={
    PizzaType:[{ id:"",price:null}],
}

// kopplia ihop pizzatype med pizza size
type PizzaType = {
  id: string;
  size: PizzaSize;
  //name: 
  price: number;
  topping: Array<string>;// döp om till ingridients?
};
//lagra alla pizzor i totalorder med typen PizzaOrder
type GlobalState = {
  PizzaList: PizzaType[];
  TotalOrder:PizzaOrder[];
};
const initialState: GlobalState = {
  //  hur sätter vi vad en small ska kosta?
  PizzaList: [],
  //Totala kostnaden för hela ordern
  TotalOrder:[],
};
// skapa metoder för att byta storlek på pizzan och lägga till, ta bort toppings
//lägg till metod för att räkna ihop pizzorna
type Action =
  | { type: "Switch_size"; payload: PizzaSize }
  | { type: "Add_Topping"; payload: string }
  | { type: "Remove_Topping"; payload: string }
  | {type: "Add_Pizza_to_order"; payload:PizzaType } // via onclick checkout, lägg till pizza skapad med pizza type i order 
  | {type: "Sum_Order"; payload:PizzaType} // räkna ihop pizzorna i totalorder/ varukorgen
  
  // switch 

  export const GlobalStateContext = createContext <{state:GlobalState;
  }>({


  });


