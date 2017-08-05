describe('palindrome-test', function () {
    it('should pass this canary test', function () {
        expect(true).to.be.true;
    });

    it('should return true for argument mom', function () {
        const aWOrd = 'mom';

        var result = isPalindrome(aWOrd);

        expect(result).to.be.true;
    });

    it('should return true for argument dad', function () {
        const aWOrd = 'dad';

        var result = isPalindrome(aWOrd);

        expect(result).to.be.true;
    });

    it('should return true for argument dude', function () {
        const aWOrd = 'dude';

        var result = isPalindrome(aWOrd);

        expect(result).to.be.false;
    });

    it('should return true for argument mom mom', function () {
        const aWOrd = 'mom mom';

        var result = isPalindrome(aWOrd);

        expect(result).to.be.true;
    });

    it('should return true for argument dad mom', function () {
        const aWOrd = 'dad mom';

        var result = isPalindrome(aWOrd);

        expect(result).to.be.false;
    });

    it('should return true for argument dad mom', function () {
        const aWOrd = 'dad mom';

        var result = isPalindrome(aWOrd);

        expect(result).to.be.false;
    });

    it('should return false when the argument is an empty string', function () {
        const aWOrd = '';

        var result = isPalindrome(aWOrd);

        expect(result).to.be.false;
    });

    it('should return false for argument with only two spaces', function () {
        const aWOrd = '  ';

        var result = isPalindrome(aWOrd);

        expect(result).to.be.false;
    });

    it('should throw an exception ifi argument is missing', function () {
        const call = function() {isPalindrome();};
        expect(call).to.throw(Error, 'Invalid argument');
    });
});