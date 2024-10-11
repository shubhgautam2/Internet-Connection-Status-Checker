window.addEventListener("load",checkInternetConnection);
function checkInternetConnection()
{
    const statusText=document.getElementById("statusText");
    const ipaddressText=document.getElementById("ipaddressText");
    const networkstrenghtText=document.getElementById("networkStrengthText");

statusText.textContent="Checking...";
if(navigator.onLine)
 {
    fetch("https://api.ipify.org?format=json")
    .then((Response)=>Response.json())
    .then((data)=>{
        ipaddressText.textContent=data.ip;
        statusText.textContent="Connected"
        const connection=navigator.connection;
        const networkStrength=connection?connection.downlink + "MBPS": "unknown";
        networkStrengthText.textContent=networkStrength;
    })
    .catch(()=>{
        statusText.textContent="Disconnected";
        ipaddressText.textContent="-";
        networkstrenghtText ="-";
    })

 }
 else
 {
    statusText.textContent="Disconnected"
    ipaddressText.textContent="-";
    networkstrenghtText.textContent="-";

 }

}