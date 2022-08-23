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
