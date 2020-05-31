const { runFilter } = require('./filter')

describe('components/filter', () => {
    describe('runFilter', () => {
        test('should succeed with one searchCriteria', () => {
            const dataSet = "email,name,address\njohn@test.com,john walker,abc\njohnwalker@test.com,john walker,def";
            const criteriaSet = "email,name\njohn@test.com,john walker";
            const colsSearchBy = ["email"];
            const result = runFilter({
                dataSet, 
                criteriaSet,
                colsSearchBy,
            });

            const resultArr = result.split("\n");
            expect(resultArr.length).toBe(2);
            expect(resultArr[1]).toMatch("john@test.com,john walker,abc");
        });

        test('should succeed with two searchCriteria', () => {
            const dataSet = "email,name,address\njohn@test.com,john walker,abc\njohnwalker@test.com,john walker,def";
            const criteriaSet = "email,name\njohn@test.com,john walker";
            const colsSearchBy = ["email", "name"];
            const result = runFilter({
                dataSet, 
                criteriaSet,
                colsSearchBy,
            });

            const resultArr = result.split("\n");
            expect(resultArr.length).toBe(2);
            expect(resultArr[1]).toMatch("john@test.com,john walker,abc");
        });

    });
});