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

        let subSearchQuery = `${colsSearchBy[0]} == '${obj[colsSearchBy[0]]}' `;

        for(let i = 1; i<colsSearchBy.length; i++) {
            subSearchQuery += ` && ${colsSearchBy[i]} == '${obj[colsSearchBy[i]]}'`
        }

        for(let i in colsOutput) {
            const searchQuery = `data[?${subSearchQuery}].${colsOutput[i]} | [0]`;
            console.log(jmespath.search(parsedCriteriaSet, searchQuery))
            obj[colsOutput[i]] = jmespath.search(parsedCriteriaSet, searchQuery);
        }
    });

    return jsonToCSV(parsedDataSet.data);
}

module.exports = {
    runVlookup
}