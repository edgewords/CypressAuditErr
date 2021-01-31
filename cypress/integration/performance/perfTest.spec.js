describe('Performance Tests', function () {
    it.only('should check performance - standard options', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/');
        cy.lighthouse(); //Performance
        cy.pa11y(); //Accessibility
    });

    it('should check performance - custom options', function () {
        const customThresholds = {
            performance: 75,
            accessibility: 95,
            'best-practices': 93,
            seo: 90
        };
        const desktopConfig = {
            formFactor: 'desktop',
            screenEmulation: {
                mobile: false,
                width: 1920,
                height: 1200,
                deviceScaleFactor: 1,
                disabled: false,
            }
        };

        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/');
        cy.lighthouse(customThresholds, desktopConfig); //Performance
        cy.pa11y(); //Accessibility
    });
});