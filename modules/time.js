const startOfTheDay = strToTime('08:40');
const startLunch = strToTime('12:00');
const endtLunch = strToTime('12:45');
const fri = 'yes'//document.getElementById('fri').value;

let endOfTheDay = fri == 'yes' ? strToTime('16:10') : strToTime('17:20');
// if (fri === 'yes') {
//   endOfTheDay = strToTime('16:10');
// } else {
//   endOfTheDay = strToTime('17:20');
// }


//функция преобразовывает миллисекунды в строку формата HH:mm
function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes;
}
//функция преобразовывает строку HH:mm в миллисекунды 
function strToTime(duration) {
  duration = duration.split(':');
  var minutes = Math.floor(duration[1] * 1000 * 60),
    hours = Math.floor(duration[0] * 1000 * 60 * 60);
  return hours + minutes;
}

// let OfXTheDay = strToTime('00:10'),
//   OfYTheDay = strToTime('00:51'),
//   sum = OfXTheDay + OfYTheDay,
//   sumtxt = msToTime(sum);

module.exports = {
  startOfTheDay, startLunch, endtLunch, endOfTheDay
};

