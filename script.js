let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()

let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let monthAndYear = document.getElementById('monthAndYear')
showCalendar(currentMonth,currentYear)

function showCalendar(month,year){
    let firstDay = new Date(year,month).getDate()
    let daysInMonth = 32 - new Date(year,month,32).getDate()
    
    let tbl = document.getElementById('calendar-body');
    tbl.innerHTML = ""
    monthAndYear.innerHTML = months[month] + " " + year
 
    let date = 0;

    for(let i = 0; i < 6; i++){
        let row = document.createElement('tr')

        for(let j=0; j < 7; j++){
            let cell = document.createElement('td')

        if(i === 0 && j < firstDay){
            let cellText = document.createTextNode("");
            cell.appendChild(cellText)
            row.appendChild(cell)
        }
        else if(date>daysInMonth){
            break;

        }else{
            let cellText = document.createTextNode(date)
            cell.appendChild(cellText)
            row.appendChild(cell);
        }
        date++;
    }
    tbl.appendChild(row);

}
}


function previous(){
    currentYear = (currentMonth === 0) ? currentYear: currentYear -1
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1
    showCalendar(currentMonth,currentYear);
}

function next(){
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear
    currentMonth = (currentMonth + 1) % 12
    showCalendar(currentMonth,currentYear);
}