function getInfo() {
    const api = id => `https://judgetests.firebaseio.com/businfo/${id}.json`;
    const busStationName = document.getElementById("stopName");
    const busses = document.getElementById("buses");
    const stopId = document.getElementById("stopId");

    busStationName.textContent = "";
    while (busses.firstChild) {
        busses.removeChild(busses.firstChild);
    }

    fetch(api(stopId.value))
        .then(x => x.json())
        .then(data => renderData(data))
        .catch(() => { busStationName.textContent = `Error` })

    function renderData(data) {
        busStationName.textContent = data.name;
        
        Object
            .keys(data.buses)
            .forEach(b => {
                let li = document.createElement("li")
                li.textContent = `Bus ${b} arrives in ${data.buses[b]} minutes`;
                busses.appendChild(li)
            })
    }
}