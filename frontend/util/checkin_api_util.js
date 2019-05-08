

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

export const createCheckin = (formData) => {
    return (
        $.ajax({
            method: "post",
            url: "/api/checkins",
            data: formData,
            contentType: false,
            processData: false
        })
    );
};

export const deleteCheckin = (checkinId) => (
    $.ajax({
        method: "delete",
        url: `api/checkins/${checkinId}`,
    })
);
