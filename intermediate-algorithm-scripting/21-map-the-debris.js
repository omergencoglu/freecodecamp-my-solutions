/** Map the Debris
 *
 * Return a new array that transforms the elements' average altitude into their orbital periods (in seconds)
 *
 * return [ { name: 'iss', orbitalPeriod: 5557 },
  { name: 'hubble', orbitalPeriod: 5734 },
  { name: 'moon', orbitalPeriod: 2377399 } ]
 */

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const pi = Math.PI;
  const result = [];

  for (let i in arr) {
    const orbitPer = Math.round(
      2 * pi * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM)
    );
    result.push({ name: arr[i].name, orbitalPeriod: orbitPer });
  }

  return result;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
