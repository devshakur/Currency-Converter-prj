document.addEventListener("DOMContentLoaded", () => {
 getCountryCurrency();
});
function currencyValue(){
  document
  .querySelector("#currency-converter")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    let headers = new Headers();
    headers.append("apikey", "1jiXjVDMTL6p9xUZRaNKYTVjNCWhQa6s");

    const {
      target: { from, to, amount },
    } = event;

    const requestOptions = {
      method: "Get",
      headers,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`,
      requestOptions
    ).then((response) => {
      response
        .json()
        .then((data) => {
          let {
            result,
            query: { to },
          } = data;
          document.querySelector(
            ".result"
          ).textContent = `Result:${result.toFixed(2)}${to}`;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}
currencyValue();

function getCountryCurrency() {
    let headers = new Headers();
    headers.append("apikey", "1jiXjVDMTL6p9xUZRaNKYTVjNCWhQa6s");

    const requestOptions = {
      method: "GET",
      headers,
    };

    fetch(
      "https://api.apilayer.com/exchangerates_data/symbols",
      requestOptions
    ).then((response) => {
      response
        .json()
        .then((data) => {
          let allSymbols = data;
          const {symbols} = data;
          
          // The Object.keys() method returns an Array Iterator object with the keys of an object.
          const keys = Object.keys(symbols).map((v)=>{
            return {
              value: v,
              label: symbols[v]
            }
          })
          
          let innerHTML = keys.map((e)=>`<option value= ${e.value}>${e.label}</option>`)
        
          document.querySelector(
            "#js-drop-down"
          ).innerHTML = innerHTML;
        })
        .catch((error) => {
          console.log(error);
        });
    });
}


let sum = 5;
let result;
result = sum * 2


