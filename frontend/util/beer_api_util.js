
export const fetchBeers = () => (
    $.ajax({
        url: '/api/beers'
    })
);

export const fetchBeer = (beerId) => (
    $.ajax({
        url: `/api/beers/${beerId}`
    })
);

export const createBeer = (beer) => {
    return(
    $.ajax({
        method: "post",
        url: "api/beers",
        data: { beer },
    })
)};
export const updateBeer = (formData, id) => {
    return(
    $.ajax({
        method: "patch",
        url: `api/beers/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
)};
export const deleteBeer = (beerId) => (
    $.ajax({
        method: "delete",
        url: `api/beers/${beerId}`,
    })
);
