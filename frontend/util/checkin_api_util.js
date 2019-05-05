

export const fetchCheckins = () => (
    $.ajax({
        url: '/api/checkins'
    })
);

export const fetchResourceCheckins = (resourceType, resourceId) => (
    $.ajax({
        url: `/api/checkins`,
        data: {
            resource_type: resourceType,
            resource_id: resourceId
        }
    })
);

export const createCheckin = (checkin) => {
    return (
        $.ajax({
            method: "post",
            url: "api/checkins",
            data: { checkin },
        })
    );
};