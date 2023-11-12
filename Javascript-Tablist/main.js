let cities = document.getElementsByClassName("cities");
let btn = document.getElementsByClassName("btn");
for(let i=0;i<btn.length;i++)
{
    btn[i].style.fontSize = "1.5rem";
    btn[i].style.border = "none";
    btn[i].style.padding = "10px";
}
let tabs = document.getElementById("btn-tabs");
tabs.style.display = "flex"
tabs.style.backgroundColor = "rgb(241,241,241)"
for(let i=0;i<cities.length;i++)
{
    cities[i].style.display = "none";
    cities[i].style.borderTop = "1px solid grey";
    cities[i].style.padding = "0 1rem";
}
function cityInfo(evt,cityName)
{
    let buttons = document.querySelectorAll("button")
    for(let i=0;i<buttons.length;i++)
    {
        if(buttons[i].classList.length>1)
        {
            buttons[i].classList.remove("active") 
        }
    }
    evt.currentTarget.classList.add("active")
    let cities = document.getElementsByClassName("cities");
    for(let i=0;i<cities.length;i++)
    {
        cities[i].style.display = "none";
    }
document.getElementById(cityName).style.display="block"
}
document.getElementById("defaultOpen").click();