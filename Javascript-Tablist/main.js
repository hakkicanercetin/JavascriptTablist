let cities = document.getElementsByClassName("cities");
        for(let i=0;i<cities.length;i++)
        {
            cities[i].style.display = "none";
            cities[i].style.borderTop = "1px solid grey";
        }
        function cityInfo(evt,cityName)
        {
            let buttons = document.querySelectorAll("button")
            for(let i=0;i<buttons.length;i++)
            {
                console.log(buttons[i].classList.length)
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