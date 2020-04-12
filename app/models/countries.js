const countries = require('countries-list');

const getAllContinents = () => JSON.stringify(countries.continents);

const getAllLanguages = () => countries.languages;

const getAllCountries = () => countries.countries;

const getAll = () => countries;

module.exports.getAllContinents = getAllContinents;
module.exports.getContgetAllinentID = getAll;
module.exports.getAllLanguages  = getAllLanguages;
module.exports.getAllCountries  = getAllCountries;
