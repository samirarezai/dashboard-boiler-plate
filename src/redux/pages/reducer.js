import type from 'redux/pages/type';

export const handleMenuReducer=(state = {menuKey:true,active_link:'Dashboard'}, action) =>{
    switch (action.type) {
        case type.MENU:
            return {...state,menuKey: !state.menuKey};

            case type.ACTIVE_LINK:
            return {...state,active_link: action.payload};

        default:
            return state;
    }
}
