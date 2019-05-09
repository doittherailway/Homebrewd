export const searchBeers = (query) => {
    return (
        $.ajax({
            method: "get",
            url: "api/search",
            data: { query },
        })
    );
};