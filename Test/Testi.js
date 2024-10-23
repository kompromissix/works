function Daysfunction(Days) {
    const Daysoftheweek= ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

    if (Days >= 1 && Days <= 7) {
        return Daysoftheweek[Days - 1]
    }
    else{
        throw new Error('some error')
    }
    
}

module.exports = Daysfunction