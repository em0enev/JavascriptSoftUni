const baseURL = 'https://baas.kinvey.com'
const appKey = 'kid_SyBQC6GaS';
const appSecret = '5cf55c843a744f5398d3adf79c95dbba'

function createAuthorization(type) {
    return type === "Basic"
        ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
        : `Kinvey ${sessionStorage.getItem('authtoken')}`
}

function createHeader(httpMethod, data, type) {
    const headers = {
        method: httpMethod,
        headers: {
            'Authorization': createAuthorization(type),
            'Content-Type': 'application/json'
        }
    }

    if (httpMethod === "POST" || httpMethod === "PUT") {
        headers.body = JSON.stringify(data)
    }
    return headers
}

function handleError(e) {
    if (!e.ok) {
        throw new Error(e.statusText)
    }
    return e
}

function serializeData(x) {
    return x.json();
}

function fetchData(kinveyModule, endpoint, headers) {
    const url = `${baseURL}/${kinveyModule}/${appKey}/${endpoint}`

    return fetch(url, headers)
        .then(x => serializeData(x))
        .catch(e => handleError(e))
}

export function get(kinveyModule, endpoint, type) {
    const headers = createHeader("GET", type);
    return fetchData(kinveyModule, endpoint, headers)
}

export function post(kinveyModule, endpoint, data, type) {
    const headers = createHeader("POST", data, type);
    return fetchData(kinveyModule, endpoint, headers)
}

export function put(kinveyModule, endpoint, data, type) {
    const headers = createHeader("PUT", data, type);
    return fetchData(kinveyModule, endpoint, headers)
}

export function del(kinveyModule, endpoint, type) {
    const headers = createHeader("DELETE", type);
    return fetchData(kinveyModule, endpoint, headers)
}