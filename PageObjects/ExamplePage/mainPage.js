import { Selector } from 'testcafe';

class Feature {
    constructor (text) {
        this.label    = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

class Page {
    constructor () {
        this.nameInput = Selector('#developer-name');
        this.featureList = [
            new Feature('Support for testing on remote devices'),
            new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Easy embedding into a Continuous integration system')
        ];
    }
}

export default new Page();