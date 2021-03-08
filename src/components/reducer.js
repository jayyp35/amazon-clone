export const initialState = {
    basket: [],
    basketTotal:0.00,
    user:null,
    books:[],
    electronics:[],
    tv:[]
};

//Selector
const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET' : 
            return {
                ...state,
                basket: [...state.basket,action.item],
                basketTotal: state.basketTotal + action.item.price
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]
            let newTotal = state.basketTotal
            if(index >= 0) {
                newTotal = newTotal - state.basket[index].price
                newBasket.splice(index,1)
            } else {
                console.log("No such product exists in Cart");
            }

            return {
                ...state,
                basket: newBasket,
                basketTotal:newTotal
            }
        
        case 'SET_USER' :
            return {
                ...state,
                user:action.user
            }
        
        case 'SET_STORE' :
            return {
                ...state,
                books:action.books,
                electronics:action.electronics,
                tv:action.tv
            }

         
        default:
            return state;
    }
}

export default reducer;