// const num = 5;
// const secondNum = 10;
// const plusNum = num + secondNum;
 
// export default { num, secondNum, plusNum };


// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// const inputEl = document.querySelector("#datetime-picker");
// const btnStart = document.querySelector("[data-start]");
// const spanEl = document.querySelectorAll('span.value');

// btnStart.disabled = true;
// let deadLineTime = null;
// let intervalId = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//       if (selectedDates[0] < Date.now()) {
//           btnStart.disabled = true;
//           alert('Please choose a date in the future');
//           return;
//       }
//       deadLineTime = selectedDates[0].getTime();
//       btnStart.disabled = false;
//   },
// };
// flatpickr("#datetime-picker", options);

// btnStart.addEventListener('click', onBtnStartClick);

// function onBtnStartClick() {
//   btnStart.disabled = true;
//   inputEl.disabled = true;

//   intervalId = setInterval(() => {
//     const delta = deadLineTime - Date.now();
//     if (delta < 1000) {
//       clearInterval(intervalId);
//       return;
//     }
//     const data = convertMs(delta);
//     Object.entries(data).forEach(([name, value], index) => {
//       spanEl[index].textContent = pad(value);
//     });
//   }, 1000);
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(deadLineTime));


// const promise = new Promise((resolve, reject) => {
//   resolve(3);
// });

// promise.then((result) => {
//   console.log(result);
// });

// const value = 3;

// Promise.resolve(value).then((value) => {
//   console.log(value);
// });

// const num = 'Boo';

// Promise.reject(num).catch((value) => {
//   console.log(value);
// });
// console.log('hello');

// function shouldResolve() {
//   return Math.random() > 0.5;
// }

// const promise = new Promise((resolve, reject) => {
//   if (shouldResolve()) {
//     resolve('its true');
//   }
//   reject('its false');
// });

// promise.then((resolve) => {
//   console.log(resolve);
// }).catch((reject) => {
//   console.log(reject);
// });

// function delay(ms) {
//   const number = Math.random() > 0.5;

//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       if (number) {
//         resolve(ms);
//       }

//       reject('false error');
//     },ms);
//   });
// }

// delay(1000).then((resolve) => {
//   alert(`done after ${resolve} seconds`);
// }).catch((reject) => {
//   alert(reject);
// });


// const done = (resolve) => {
//   console.log(resolve);
// };

// const fail = (reject) => {
//   console.log(reject);
// };


// function makePromise(promise, callback1, callback2) {
//   promise.then(callback1).catch(callback2);
// }

// const promise = new Promise((resolve, reject) => {
//   const number = Math.random() > 0.5;

//   if (number) {
//     resolve('well done');
//   }

//   reject('error');
// });

// makePromise(promise, done, fail);

function makePromise(amount, time) {
  let timeMain = time;
  const arrPromise = [];

  for (let i = 1; i < amount; i++) {
    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (i % 2 !== 0) {
          resolve(time);
        }

        reject(time);
        
      }, timeMain);
    });

    promise.then((resolve) => {
      console.log("hello");
      
      }).catch((reject) => {
        console.log('hello');
      });
    
    timeMain += 1000;
  }

  return arrPromise;
}

const result = makePromise(10, 2000);
console.log(result);