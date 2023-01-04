import { Selector, t } from 'testcafe';

class Blog {
    constructor () {

        this.breadCrumb = Selector('ol.breadcrumb');

        this.searchBar = Selector('input#search-bar');

        this.searchIcon = Selector('img.search-icon');

        this.nameInput = Selector('#developer-name');
    }


    
    async searchInBlog (toSearch) {
        await t
        .expect(this.breadCrumb.exists).ok()
        .typeText(this.searchBar,toSearch)
        .click(this.searchIcon);
    }
}

export default new Blog();