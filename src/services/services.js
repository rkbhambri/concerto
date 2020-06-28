
export const getServices = () => {
    return fetch('https://assignment-concerto.herokuapp.com/assignment/services')
        .then(response => response.json())
        .then(data => data)
};

export const guestHitService = (data) => {
    return fetch('https://assignment-concerto.herokuapp.com/assignment/guest_hit', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => data)
};
