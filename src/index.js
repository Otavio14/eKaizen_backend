/**
 * Using the provided random number generator function implementation,
 * along with the given seed,
 * you should:
 * - Instantiate a Map class
 * - Iterate 9 times, from 0 to 8
 * - On each iteration save the index as a key on the Map instance and as a value call the random function
 * - Iterate through the Map's keys using the "keys" method
 * - For each key, print it's associated value on the Map instance.
 * - For each number generated insert into the array of numbers
 * - Fix some bugs at checkRandomNumber function
 * - Send an array of numbers to the checkRandomNumber function
 * - Create an object like the structure bellow:
 *    { name: 'yourName',
 *      "email": 'yourEmail',
 *      response: 'return from checkRandonumber',
 *      "numbers": ['All numbers generated']}
 * - OBS: First create the object and then insert the necessary returns
 * - Print Object on console as result
 * - Run this code in Node.js localy
 */

import -> random, seed, checkRandomNumber -> from ./randomNumberGenerator;

seed(192837465);
//const numbers = [];
//let object = {};
