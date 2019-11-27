const username = 'em0enev';
const password = 'em0enev';

const appKey = 'kid_HkHwUdz3B';
const appSecret = 'ceae8df010a94ba9b75d833cf592b747'
const baseURL = 'https://baas.kinvey.com'

function makeHeaders(httpMethod, data) {
    const headers = {
        method: httpMethod,
        headers: {
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
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
        console.log("ERRRRRRRRRRRORRRRR")
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

export function get(kinveyModule, endpoint) {
    const headers = makeHeaders("GET");
    return fetchData(kinveyModule, endpoint, headers)
}

export function post(kinveyModule, endpoint, data) {
    const headers = makeHeaders("POST", data);
    return fetchData(kinveyModule, endpoint, headers)
}

export function put(kinveyModule, endpoint, data) {
    const headers = makeHeaders("PUT", data);
    return fetchData(kinveyModule, endpoint, headers)
}

export function del(kinveyModule, endpoint) {
    const headers = makeHeaders("DELETE");
    return fetchData(kinveyModule, endpoint, headers)
}