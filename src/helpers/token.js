const getToken = () => {
    let token = localStorage.getItem('')
    return `bearer ${token}`;
}

export default getToken;