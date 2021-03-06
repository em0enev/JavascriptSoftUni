const baseURL = 'https://baas.kinvey.com'
const appKey = 'kid_BkttuhPTB';
const appSecret = 'cdd286de1c5b44e283efd351b4bce258'

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

    if (x.status === 204) {
        return x;
    }
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