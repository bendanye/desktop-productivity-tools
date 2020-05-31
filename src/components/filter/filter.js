const _ = require('underscore');
const { readString, jsonToCSV } = require('react-papaparse');
const jmespath = require('jmespath');

const parseOptions = {
    header: true,
    skipEmptyLines: true
};

const runFilter = (params) => {

    const { dataSet, criteriaSet, colsSearchBy } = params
    
    const parsedDataSet = readString(dataSet, parseOptions);
    const parsedCriteriaSet= readString(criteriaSet, parseOptions);

    let result = [];

    _.each(parsedDataSet.data, obj => {

        let subSearchQuery = `${colsSearchBy[0]} == '${obj[colsSearchBy[0]]}' `;

        for(let i = 1; i<colsSearchBy.length; i++) {
            subSearchQuery += ` && ${colsSearchBy[i]} == '${obj[colsSearchBy[i]]}'`
        }

        const searchQuery = `data[?${subSearchQuery}] | [0]`;
        if (jmespath.search(parsedCriteriaSet, searchQuery)) {
            result.push(obj);
        }
    });

    return jsonToCSV(result);
}

module.exports = {
    runFilter
}