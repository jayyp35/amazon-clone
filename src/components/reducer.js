export const initialState = {
    basket: [],
    basketTotal:0.00,
    user: {
        auth:null,
        name:null,
        phone:null,
        email:null,
        address1:null,
        address2:null,
    },
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
        
        case 'SET_USER_REG' :
            return {
                ...state,
                user: {
                    auth:action.user.auth,
                    name:action.user.name,
                    phone:action.user.phone,
                    email:action.user.email,
                    address1:action.user.address1,
                    address2:action.user.address2,
                }
            }

        case 'SET_USER' :
            return {
                ...state,
                user: {
                    ...state.user,
                    auth:action.auth
                }
            }
        
        case 'SET_STORE' :
            return {
                ...state,
                books:action.books,
                electronics:action.electronics,
                tv:action.tv
            }
        case 'SET_USER_LOGIN' :
            return {
                ...state,
                user:action.user,
            }
        

        case 'LOG_OUT' :
            return {
                ...state,
                user: {
                    auth:null,
                    name:null,
                    phone:null,
                    email:null,
                    address1:null,
                    address2:null,
                }
            }
            
        
         
        default:
            return state;
    }
}

export default reducer;