const _ = require('underscore');
const { readString, jsonToCSV } = require('react-papaparse');
const jmespath = require('jmespath');

const parseOptions = {
    header: true,
    skipEmptyLines: true
};

const runVlookup = (params) => {

    const { dataSet, criteriaSet } = params
    
    const parsedDataSet = readString(dataSet, parseOptions);
    const parsedCriteriaSet= readString(criteriaSet, parseOptions);

    _.each(parsedDataSet.data, obj => {

        let idByEmail = `data[?email=='${obj.email}'].order | [0]`;
        obj.found = jmespath.search(parsedCriteriaSet, idByEmail);
        console.log(jmespath.search(parsedCriteriaSet, idByEmail))
    });

    return jsonToCSV(parsedDataSet.data);
}

module.exports = {
    runVlookup
}