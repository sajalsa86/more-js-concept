const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log(num)
    if (num < 5) {
        resolve(5555);
    }
    else {
        reject('No Data Available')
    }
})
//getData.then(data => console.log(data));
getData
    .then(data => console.log(data + 5))
    .catch(err => console.log('ERR: ', err))

//example-2
const ride = new Promise((resolve, reject) => {
    const arrived = true;
    if (arrived) {
        resolve('Driver Arrived')
    } else {
        reject('Driver Bailed')
    }
})
ride
    .then(value => console.log(value))
    .catch(error => console.log(error))