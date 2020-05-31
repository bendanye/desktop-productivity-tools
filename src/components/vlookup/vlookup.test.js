const { runVlookup } = require('./vlookup')

describe('components/vlookup', () => {
    describe('runVlookup', () => {
        test('should succeed with one searchCriteria and one outputCol', () => {
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

        test('should succeed with two searchCriteria and one outputCol', () => {
            const dataSet = "email,name,address\njohn@test.com,john walker,abc\njohnwalk@test.com,john walker,test";
            const criteriaSet = "email,name,order\njohn@test.com,john walker,apple";
            const colsSearchBy = ["email", "name"];
            const colsOutput = ["order"];
            const result = runVlookup({
                dataSet, 
                criteriaSet,
                colsSearchBy,
                colsOutput
            });
            expect(result).toMatch("john@test.com,john walker,abc,apple");
            expect(result).toMatch("johnwalk@test.com,john walker,test");
        });

        test('should succeed with one searchCriteria and two outputCol', () => {
            const dataSet = "email,name,address\njohn@test.com,john walker,abc\njohnwalk@test.com,john walker,test";
            const criteriaSet = "email,name,order,type\njohn@test.com,john walker,apple,fruit";
            const colsSearchBy = ["email"];
            const colsOutput = ["order", "type"];
            const result = runVlookup({
                dataSet, 
                criteriaSet,
                colsSearchBy,
                colsOutput
            });
            expect(result).toMatch("john@test.com,john walker,abc,apple,fruit");
        });
    });
});