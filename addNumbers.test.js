const addNumbers = require('./addNumbers');

describe('addNumbers', () => {
    it('should add numbers correctly', () => {
        expect(addNumbers(1, 1)).toEqual(2);
    });
});
