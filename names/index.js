const people = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (people) => {
  return getFirstNames(people);
};

module.exports = getPeopleInCity;
