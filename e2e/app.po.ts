import { browser, element, by } from 'protractor';

export class TmpPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        //noinspection TypeScriptUnresolvedFunction
        return element(by.css('app-root h1')).getText();
    }
}