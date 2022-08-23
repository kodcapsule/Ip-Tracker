let ipAddress = "8.8.8.8";
let region, country;
let city;
let lat, lng;

const apiKey = "at_Ov2GVrQ6HBuUqyCgKrK8zORRCnfIW";
const btn = document.querySelector(".btn");
const input_ip = document.querySelector(".input_ip");
const ipad = document.querySelector(".ip");
const locationCity = document.querySelector(".locattion");
const locationTimeZone = document.querySelector(".time-zone");
const isp = document.querySelector(".isp");

// class IpTracker {
//   // class fields
//   #ipAddress = "";
//   #coordinates;
//   #domains;
//   #region = "";
//   #country = "";
//   #city = "";
//   #timezone = "";
//   #isp = "";

//   constructor(ip = "8.8.8.8", apikey = apiKey) {
//     this.apikey = apikey;
//     this.ip = ip;
//   }

//   async getIpDetails() {
//     let url = "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=";
//     let http = await fetch(`${url}${this.apikey}&ipAddress=${this.ip}`);
//     ipData = await http.json();
//     this.#ipAddress = ipData.ip;
//     const {
//       region: region,
//       country: country,
//       city: city,
//       lat: lat,
//       lng: lng,
//       timezone: timezone,
//     } = ipData.location;
//     this.#coordinates = [lat, lng];
//     this.#domains = ipData.domains;
//     this.#region = region;
//     this.#country = country;
//     this.#city = city;
//     this.#timezone = timezone;
//     this.#isp = ipData.isp;
//   }

//   async renderMap() {
//     let map = L.map("map").setView(this.#coordinates, 15);
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       maxZoom: 19,
//       attribution: "© OpenStreetMap",
//     }).addTo(map);
//     var marker = L.marker(this.#coordinates).addTo(map);
//   }
// }

btn.addEventListener("click", (e) => {
  e.preventDefault();
  ipAddress = input_ip.value;
  if (ipAddress === "") {
    alert("input a value ");
  } else {
    (async () => {
      const { location: loc } = await getIpDetails(ipAddress);
      const { ip: ipadd } = await getIpDetails(ipAddress);
      const { isp: ispd } = await getIpDetails(ipAddress);
      renderMap(loc.lat, loc.lng, 17);
      ipad.innerText = ipadd;
      locationCity.innerText = loc.city;
      locationTimeZone.innerText = loc.timezone;
      isp.innerText = ispd;
      console.log(loc);
    })();
  }
});

async function getIpDetails(ip = "8.8.8.8", apikey = apiKey) {
  const url = "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=";
  let http = await fetch(`${url}${apikey}&ipAddress=${ip}`);
  const ipData = await http.json().then((data) => data);
  const ipAddress = ipData.ip;
  const {
    region: region,
    country: country,
    city: city,
    lat: lat,
    lng: lng,
    timezone: timezone,
  } = ipData.location;
  const domains = ipData.domains;
  const isp = ipData.isp;
  //   console.log(lat, lng, domains, city);
  return ipData;
}

function renderMap(lat, lng, zoom = 13) {
  let map = L.map("map").setView([lat, lng], zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);
  var marker = L.marker([lat, lng]).addTo(map);
}

// const data = getIpDetails("8.8.8.8");
// (async () => {
//   const { location: loc } = await getIpDetails("102.134.130.0");
//   renderMap(loc.lat, loc.lng);
//   console.log(loc);
// })();

// console.log(data);
// console.log(data.then(data) => data.as);
// const ipDetails = data
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// console.log(ipDetails);

// navigator.geolocation.getCurrentPosition((pos) => {
//   let { latitude: lat, longitude: log } = pos.coords;
//   console.log(lat, log);
//   let map = L.map("map").setView([lat, log], 15);
//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//     attribution: "© OpenStreetMap",
//   }).addTo(map);
//   var marker = L.marker([lat, log]).addTo(map);
// });

// const ipt = new IpTracker(ipAddress, apiKey);
// ipt.getIpDetails();
// ipt.renderMap();
