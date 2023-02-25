var XMLHttpRequest = require('xhr2');

const Http = new XMLHttpRequest();
const url='https://www.mit.edu/~ecprice/wordlist.10000';
Http.open("GET", url);

Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}