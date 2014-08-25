var DemoPage = function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
};

DemoPage.prototype = Object.create({}, {
    firstNumber: {get: function () {
        return element(by.model('first'));
    }},
    secondNumber: {get: function () {
        return element(by.model('second'));
    }},
    goButton: {get: function () {
        return element(by.id('gobutton'));
    }},
    latestResult: {get: function () {
        return element(by.binding('latest'));
    }}
});

module.exports = DemoPage;