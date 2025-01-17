"use strict";
const link = "https://infinitely-native-lamprey.ngrok-free.app/apis/getAd?key=3d9f02b58d448847784beba26393ac04fe7a1b4508690fd9a0fa315a6db43e77&link=https://www.example.com";
var Header = "ngrok-skip-browser-warning': 'true'";
function GetData() {
    return fetch(link, {
        "method": 'GET', "headers": {
            "ngrok-skip-browser-warning": "69420"
        }
    })
        .then(res => res.json())
        .then(res => showData(res))
        .catch(err => console.log(err));
}
function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
} //var data:Promise<Data[]>=  GetData();
GetData();
async function showData(data) {
    console.log(data);
    var counter = 0;
    var counatiner = document.getElementById("Ad_container");
    let Atag = document.createElement('a');
    let Div = document.createElement('div');
    let Ptag = document.createElement('p');
    let Htapg = document.createElement('h1');
    let imagetag = document.createElement('img');
    Atag.style.cssText = "text-decoration: none; color:black; ";
    Div.style.cssText = div_style;
    imagetag.alt = "Loading";
    Ptag.style.cssText = pstyle;
    Htapg.style.cssText = hstyle;
    for (let i = 0; i < data.length; i++) {
        Htapg.innerText = data[i]["name"];
        Ptag.innerText = data[i]["details"];
        Atag.href = data[i]["link"];
        for (let j = 0; j < data[i]["images"].length; j++) {
            let ratio = 6 / data[i]["images"].length;
            const imlink = `https://infinitely-native-lamprey.ngrok-free.app/files/image?imgName=${data[i]["images"][j]}&type=adpics`;
            imagetag.src = `https://infinitely-native-lamprey.ngrok-free.app/files/image?imgName=${data[i]["images"][j]}&type=adpics`;
            imagetag.style.cssText = img_style;
            imagetag.onerror = () => {
                return fetch(imlink, {
                    "method": 'GET', "headers": {
                        "ngrok-skip-browser-warning": "69420"
                    }
                })
                    .then(res => res.blob())
                    .then(d => imagetag.src = window.URL.createObjectURL(d));
            };
            Div.appendChild(Htapg);
            Div.appendChild(Ptag);
            Div.appendChild(imagetag);
            Atag.appendChild(Div);
            counatiner.appendChild(Atag);
            await delay(ratio * 10000);
        }
        await delay(60000);
    }
}
const div_style = `     width: 300px; /* Adjust as needed */
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background: #f9f9f9;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      font-family: Arial, sans-serif;

  `;
const img_style = `
      width: 100%; /* Make the image responsive */
      height: auto;
      border-radius: 8px;

  `;
const hstyle = `  font-size: 1.5rem;
      color: #333;
      margin: 10px 0;
  
`;
const pstyle = `
      font-size: 1rem;
      color: #666;
      margin: 10px 0;
`;
