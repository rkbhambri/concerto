
export const parseData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const validateValues = (value) => {
    var regex = /^[a-zA-Z0-9!@#$%^&*)(. _-]{0,16}$/;
    return regex.test(value);
};

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const isEmpty = (item) => {
    if (typeof item === 'number') {
        return false;
    }
    return item.trim() === '';
};

export const isArrayNotEmpty = (arr) => {
    return arr.length > 0;
};

export const getCookie = (key) => {
    const pattern = RegExp(key + "=.[^;]*")
    const matched = document.cookie.match(pattern);
    if (matched) {
        var cookie = matched[0].split('=')
        return cookie[1];
    }
    return false;
};

export const setCookie = (key, value) => {
    document.cookie = `${key}=${value}`;
};
