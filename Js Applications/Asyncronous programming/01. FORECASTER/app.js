function attachEvents() {
    const getWeatherBtn = document.getElementById("submit")
    const location = document.getElementById("location")
    const forecast = document.getElementById("forecast")
    const current = document.getElementById("current")
    const upcoming = document.getElementById("upcoming")

    const conditions = {
        Rain: "&#x2614;",
        Sunny: "&#x2600;",
        PartlySunny: "&#x26C5;",
        Overcast: "&#x2601;",
        Degrees: "&#176;",
        "Partly sunny": "&#x26C5;"
    }

    const classListTable = {
        forecast: "forecast",
        condition: "condition",
        symbol: "symbol",
        forecastData: "forecast-data",
        forecastInfo: "forecast-info",
        upcoming: "upcoming"
    }

    getWeatherBtn.addEventListener("click", getLocationsAsync)

    async function getLocationsAsync() {
        let response = await fetch(`https://judgetests.firebaseio.com/locations.json`)
            .then(res => res.json())

        let locationObj = Object
            .values(response)
            .filter(l => l.name === location.value)[0]

        clearOldData()
        getCurrentConditionAsync(locationObj.code)
        ThreeDayForecast(locationObj.code)
    }

    async function getCurrentConditionAsync(locationCode) {
        let response = await fetch(`https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`)
            .then(res => res.json())

        forecast.style = "display:visible"

        let mainDiv = createElement("div", classListTable.forecast)
        let mainSpan = createElement("span", classListTable.condition)

        let symbolSpan = createElement("span", classListTable.condition, classListTable.symbol)
        symbolSpan.innerHTML = `${conditions[response.forecast.condition]}`;

        let spanName = createElement("span", classListTable.forecastData)
        spanName.textContent = `${response.name}`

        let spanTemp = createElement("span", classListTable.forecastData)
        spanTemp.innerHTML = `${response.forecast.low}${conditions["Degrees"]}/${response.forecast.high}${conditions["Degrees"]}`;

        let spanInfo = createElement("span", classListTable.forecastData)
        spanInfo.innerHTML = `${response.forecast.condition}`

        mainSpan.appendChild(spanName)
        mainSpan.appendChild(spanTemp)
        mainSpan.appendChild(spanInfo)

        current.appendChild(mainDiv)
        mainDiv.appendChild(symbolSpan)
        mainDiv.appendChild(mainSpan)
    }

    async function ThreeDayForecast(locationCode) {
        let { forecast } = await fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`)
            .then(x => x.json())

        let mainDiv = createElement("div", classListTable.forecastInfo)
        for (let obj of forecast) {
            let mainSpan = createElement("span", classListTable.upcoming)

            let symbolSpan = createElement("span", classListTable.symbol)
            symbolSpan.innerHTML = `${conditions[obj.condition]}`;

            let tempSpan = createElement("span", classListTable.forecastData)
            tempSpan.innerHTML = `${obj.low}${conditions["Degrees"]}/${obj.high}${conditions["Degrees"]}`

            let infoSpan = createElement("span", classListTable.forecastData)
            infoSpan.innerHTML = `${obj.condition}`

            mainSpan.appendChild(symbolSpan)
            mainSpan.appendChild(tempSpan)
            mainSpan.appendChild(infoSpan)
            mainDiv.appendChild(mainSpan)
        }

        upcoming.appendChild(mainDiv)
    }

    function createElement(elementType, ...classNames) {
        let element = document.createElement(elementType)

        if (classNames.length !== 0) {
            for (const name of classNames) {
                element.classList.add(name)
            }
        }

        return element
    }

    function clearOldData() {
        let divCurrent = document.querySelector(`html body div#content div#forecast div#current div.forecast`)
        let divForecast = document.querySelector("html body div#content div#forecast div#upcoming div.forecast-info")

        if (divCurrent !== null)
            divCurrent.parentNode.removeChild(divCurrent)

        if (divForecast !== null)
            divForecast.parentNode.removeChild(divForecast)
    }

}

attachEvents();