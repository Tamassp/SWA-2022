const tick = Date.now();
const log = (message) => console.log(`${message} (${Date.now() - tick}ms)`);

// const thisTakesTime = () => {
//     let i = 0;
//     while (i < 1000000000) {i++;}
//     return "This took time";
// }

// log("Start");

// log(thisTakesTime());

// log("End");

/*
Start (1ms)
This took time (369ms)
End (369ms)
*/

// const thisTakesTime = () => {
//     return new Promise((resolve, reject) => {
//         let i = 0;
//         while (i < 1000000000) {i++;}
//         //only resolve is async so the while loop is blocking
//         resolve("This took time");
//     })
// }

// log("Start");

// log(thisTakesTime());

// log("End");

/*
Start (0ms)
[object Promise] (492ms)
End (492ms)
*/

const thisTakesTime = () => {
    return Promise.resolve().then(v => {
        let i = 0;
        while (i < 1000000000) {i++;}
        return 'This took time';
    })
}

log("Start");

thisTakesTime().then(log)

log("End");

/*
Start (0ms)
End (3ms)
This took time (364ms)
*/