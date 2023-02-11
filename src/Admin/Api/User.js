import api from "./Api";
export const ListUserApi  = (page,per_page =10) =>
    api({
        method: 'GET',
        url: 'users',
        params: {
            page: page,
            per_page: per_page
        }
    }).then(result => result);