var DemoPage = require('../pages/demo-page.js');

describe('angularjs homepage', function () {
    var page;

    beforeEach(function () {
        page = new DemoPage();
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function () {
        page.firstNumber.sendKeys(1);
        page.secondNumber.sendKeys(2);
        page.goButton.click();
        expect(page.latestResult.getText()).toEqual('3');
    });

    it('should add four and six', function () {
        page.firstNumber.sendKeys(4);
        page.secondNumber.sendKeys(6);
        page.goButton.click();
        expect(page.latestResult.getText()).toEqual('10');
    });
});