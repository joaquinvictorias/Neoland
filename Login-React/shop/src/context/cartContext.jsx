import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext(
    {
        items: [],
        addItem: (item) => { },
        removeItem: (id) => { },
        clearCart: () => { }
    }
);

const getInitialState = () => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? { items: JSON.parse(savedItems) } : { items: [] };
};

function reducer(state, action) {
    if (action.type === "increase") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = updatedItems[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({
                ...action.item,
                quantity: 1,
            });
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    if (action.type === "decrease") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    if (action.type === "restart") {
        return {
            ...state,
            items: []
        };
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, null, getInitialState);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(state.items));
    }, [state.items]);

    function addItem(item) {
        dispatch({ type: "increase", item });
    }

    function removeItem(id) {
        dispatch({ type: "decrease", id });
    }

    function clearCart() {
        dispatch({ type: "restart" });
    }

    const cartCtxValue = {
        items: state.items,
        addItem,
        removeItem,
        clearCart
    }

    return (
        <CartContext.Provider value={cartCtxValue}>
            {children}
        </CartContext.Provider>
    );
}