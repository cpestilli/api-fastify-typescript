import http from 'k6/http';
import { sleep } from 'k6';
import { crypto } from "k6/experimental/webcrypto";



export const options = {
  vus: 100,
  duration: '100s',
  iterations: 1000,
};

// export const options = {
//   startTime: '2s', // the ramping API test starts a little later
//   timeUnit: '1s', // we start at 5 iterations per second
//   startRate: 5,
//   startVUs: 0,
//   stages: [
//     { duration: '5s', target: 250 },
//     { duration: '5s', target: 500 },
//     { duration: '5s', target: 0 },
//   ],
// };


//export const options = {
//  discardResponseBodies: true,

//   scenarios: {
//     contacts: {
//       executor: 'ramping-arrival-rate',

//       // Start iterations per `timeUnit`
//       startRate: 300,

//       // Start `startRate` iterations per minute
//       timeUnit: '1s',

//       // Pre-allocate necessary VUs.
//       preAllocatedVUs: 1000,

//       stages: [
//         // Start 300 iterations per `timeUnit` for the first minute.
//         { target: 300, duration: '3s' },

//         // Linearly ramp-up to starting 600 iterations per `timeUnit` over the following two minutes.
//         { target: 600, duration: '3s' },

//         // Continue starting 600 iterations per `timeUnit` for the following four minutes.
//         { target: 900, duration: '5s' },

//         // Linearly ramp-down to starting 60 iterations per `timeUnit` over the last two minutes.
//         { target: 0, duration: '5s' },
//       ],
//     },
//   },
// };


export default function () {
 
  const url = 'http://localhost:3000/videos';
  const UUID = crypto.randomUUID();

  const payload = JSON.stringify({
    title: "video title" + UUID,
    description: "video description" + UUID,
    duration: 100
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
  sleep(1);
}


