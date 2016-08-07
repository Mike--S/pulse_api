module.exports = {
  compareDates: function(oneDate, anotherDate, dayOffset) {
    console.log()
    return oneDate.getFullYear() === anotherDate.getFullYear() &&
      oneDate.getMonth() === anotherDate.getMonth() &&
      oneDate.getDate() === anotherDate.getDate() - (dayOffset || 0)
  }
};