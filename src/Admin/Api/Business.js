import Api from "./Api";
export const ListBusiness = (page, perPage, keyword)=>
Api({
    url: 'businesses/list',
    params: {
        page: page,
        per_page: perPage,
        keyword: keyword
    }
}).then(data=>data);

export const DetailBusiness = (id) =>
Api({
    url:'businesses/'+id
}).then(data=>data);

export const UpdateBusiness = (data)=>
Api({
    method: 'POST',
})