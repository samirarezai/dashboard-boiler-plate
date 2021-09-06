import type from 'redux/pages/type';

export const handleMenu = () => ({
    type: type.MENU,
})
export const handleActiveLink = (payload) => ({
    type: type.ACTIVE_LINK,
    payload
})
