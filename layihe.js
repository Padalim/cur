let cur1 = document.querySelectorAll(".firstcur button");
let cur2 = document.querySelectorAll(".secondcur button");
document.querySelector(".firstcur button.right-rub").classList.add("select");
document.querySelector(".secondcur button.left-usd").classList.add("select");

cur1.forEach(function (button) {
    button.addEventListener("click", function () {
        cur1.forEach(function (btn) {
            btn.classList.remove("select");
        });
        button.classList.add("select");
        updateStavit2();
    });
});

cur2.forEach(function (button) {
    button.addEventListener("click", function () {
        cur2.forEach(function (btn) {
            btn.classList.remove("select");
        });
        button.classList.add("select");
        updateStavit();
    });
});

function updateStavit2() {
    let fromCurrency = document.querySelector(".secondcur button.select").textContent;
    let toCurrency = document.querySelector(".firstcur button.select").textContent;
    let apiKey = 'f0876aa710d339af099cae5e3981e276';
    let apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let exchangeRate = data.rates[toCurrency];
            let rateElement = document.querySelector(".stavit1");
            let rateElement2 = document.querySelector(".stavit2");
            rateElement2.textContent = `1 ${toCurrency} = ${exchangeRate} ${fromCurrency}`;
            rateElement.textContent = `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
            update2("secondid", "firsrtid", ".firstcur button.select", ".secondcur button.select", ".stavit1");
            update2("secondid", "firsrtid", ".secondcur button.select", ".firstcur button.select", ".stavit2");
        })
        .catch(error => console.error("Error", error));
}


document.getElementById("firsrtid").addEventListener("input", function () {
    document.getElementById("firsrtid").addEventListener("keyup", (event) => {
        if (event.target.value.split("")[0] == "." || event.target.value.split("")[0] == "-") {
            let arr = event.target.value.split("");
            arr.shift();
            event.target.value = Number(arr.join(""));
            update(Number(event.target.value, "secondid", ".secondcur button.select", ".firstcur button.select", ".stavit1"))

        } else {
            update("firsrtid", "secondid", ".secondcur button.select", ".firstcur button.select", ".stavit1");

        };
    })
});


updateStavit();

function updateStavit() {

    let toCurrency = document.querySelector(".secondcur button.select").textContent;
    let fromCurrency = document.querySelector(".firstcur button.select").textContent;
    let apiKey = 'f0876aa710d339af099cae5e3981e276';
    let apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let exchangeRate = data.rates[toCurrency];
            let rateElement = document.querySelector(".stavit1");
            let rateElement2 = document.querySelector(".stavit2");
            rateElement2.textContent = `1 ${toCurrency} = ${exchangeRate} ${fromCurrency}`;
            rateElement.textContent = `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
            update("firsrtid", "secondid", ".firstcur button.select", ".secondcur button.select", ".stavit2");
            update("firsrtid", "secondid", ".secondcur button.select", ".firstcur button.select", ".stavit1");
        })
        .catch(error => console.error("Error", error));
}
function updateStavit2() {
    let fromCurrency = document.querySelector(".secondcur button.select").textContent;
    let toCurrency = document.querySelector(".firstcur button.select").textContent;
    let apiKey = 'f0876aa710d339af099cae5e3981e276';
    let apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let exchangeRate = data.rates[toCurrency];
            let rateElement = document.querySelector(".stavit1");
            let rateElement2 = document.querySelector(".stavit2");
            rateElement2.textContent = `1 ${toCurrency} = ${exchangeRate} ${fromCurrency}`;
            rateElement.textContent = `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
            update2("secondid", "firsrtid", ".firstcur button.select", ".secondcur button.select", ".stavit1");
            update2("secondid", "firsrtid", ".secondcur button.select", ".firstcur button.select", ".stavit2");
        })
        .catch(error => console.error("Error", error));
}
function update(fromInputId, toInputId, fromCurrencySelector, toCurrencySelector, rateElementSelector) {
    let amountFrom = document.getElementById(fromInputId).value;
    let toCurrency = document.querySelector(fromCurrencySelector).textContent;
    let fromCurrency = document.querySelector(toCurrencySelector).textContent;
    let apiKey = 'f0876aa710d339af099cae5e3981e276';
    let apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let exchangeRate = data.rates[toCurrency];
            let convertedAmount = (isNaN(amountFrom) ? 0 : amountFrom) * exchangeRate;
            let toInputElement = document.getElementById(toInputId);
            toInputElement.value = convertedAmount.toFixed(4);

            if (toInputElement.value == 0.0000) {
                toInputElement.value = ''
            }

            document.querySelector(rateElementSelector).textContent = `1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`;
        })
        .catch(error => console.error("Error", error));
}




function update2(fromInputId, toInputId, fromCurrencySelector, toCurrencySelector, rateElementSelector) {
    let amountFrom = document.getElementById(fromInputId).value;
    let fromCurrency = document.querySelector(fromCurrencySelector).textContent;
    let toCurrency = document.querySelector(toCurrencySelector).textContent;


    let apiKey = 'f0876aa710d339af099cae5e3981e276';
    let apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let exchangeRate = data.rates[toCurrency];
            let convertedAmount = (isNaN(amountFrom) ? 0 : amountFrom) * exchangeRate;
            let toInputElement = document.getElementById(toInputId);

            toInputElement.value = convertedAmount.toFixed(4);
            if (toInputElement.value == 0.0000) {
                toInputElement.value = ''
            }
            document.querySelector(rateElementSelector).textContent = `1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`;
        })

        .catch(error => console.error("Error", error));
}