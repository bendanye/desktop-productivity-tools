const { runVlookup } = require('../../../src/components/vlookup/vlookup')

describe('components/vlookup', () => {
    describe('runVlookup', () => {
        test('should succeed', () => {
            const dataSet = "email,name,address\njohn@test.com,john walker,abc";
            const criteriaSet = "email,order\njohn@test.com,apple";
            const colsSearchBy = ["email"];
            const colsOutput = ["order"];
            const result = runVlookup({
                dataSet, 
                criteriaSet,
                colsSearchBy,
                colsOutput
            });
            expect(result).toMatch("john@test.com,john walker,abc,apple");
        });
    });
});