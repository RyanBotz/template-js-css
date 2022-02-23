// fetch('https://api.countapi.xyz/hit/mysite.com/visits?callback=cb');
// https://api.countapi.xyz/get/test
// https://api.countapi.xyz/get/nonexisting
// https://api.countapi.xyz/update/mysite.com/test?amount=-879
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/visits");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('visi').innerText = this.response.value;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/test");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('uniq').innerText = this.response.value;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nonexisting");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('member').innerText = this.response.value;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/update/mysite.com/test?amount=-879");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('prem').innerText = this.response.value;
}
xhr.send();