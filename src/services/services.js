
export const getServices = () => {
    return fetch('https://assignment-concerto.herokuapp.com/assignment/services')
        .then(response => response.json())
        .then(data => data)
};
