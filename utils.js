module.exports = {
  compareDates: function(oneDate, anotherDate, dayOffset) {
    return oneDate.getFullYear() === anotherDate.getFullYear() &&
      oneDate.getMonth() === anotherDate.getMonth() &&
      oneDate.getDate() === anotherDate.getDate() - dayOffset || 0
  }
};