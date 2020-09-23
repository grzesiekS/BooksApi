const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
    it('should throw Error if "fullName" is not a string', () => {
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname(22)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should throw Error if "fullName" does not have correct pattern', () => {
        expect(formatFullname('JohnDoe')).to.equal('Error');
        expect(formatFullname('John Doe Doe')).to.equal('Error');
    });
});