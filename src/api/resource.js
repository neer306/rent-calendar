import data from './data.json';


const TIMEOUT = 100;

export default {
    getData: (callback) => setTimeout(() => callback(data), TIMEOUT),
}
