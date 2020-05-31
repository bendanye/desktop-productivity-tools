const _ = require('underscore');
const { readString, jsonToCSV } = require('react-papaparse');
const jmespath = require('jmespath');

const parseOptions = {
    header: true,
    skipEmptyLines: true
};

const runVlookup = (params) => {

    const { dataSet, criteriaSet, colsSearchBy, colsOutput } = params
    
    const parsedDataSet = readString(dataSet, parseOptions);
    const parsedCriteriaSet= readString(criteriaSet, parseOptions);

    _.each(parsedDataSet.data, obj => {

        let subSearchQuery = `${colsSearchBy[0]}==${obj[colsSearchBy[0]]}`;

        //console.log(searchQuery)

        const searchQuery = `data[?'${subSearchQuery}'].${colsOutput[0]} | [0]`;
        obj[colsOutput[0]] = jmespath.search(parsedCriteriaSet, searchQuery);
    });

    return jsonToCSV(parsedDataSet.data);
}

module.exports = {
    runVlookup
}