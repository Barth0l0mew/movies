getElement = id => document.querySelector(id)
Date.prototype.getMonthName = function(){
    let monthNames = [ "January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December" ];   
                       return monthNames[this.getMonth()]
}
Date.prototype.getHoursFull = function(){
    if(this.getHours().length==1){
        return '0'+this.getHours()
    } else
    return this.getHours()
}
Date.prototype.getMinutesFull = function(){
    if (this.getMinutes().length==1){
        return '0'+this.getMinutes()
    }else 
    return this.getMinutes()
}

function time (){
let date = new Date()
getElement('.header__time-oclock').innerHTML = `${date.getHoursFull()}:${date.getMinutesFull()}`;
getElement('.header__time-day').innerHTML = `${date.getMonthName()} ${date.getDate()}`;
}

setInterval(time, 1000)