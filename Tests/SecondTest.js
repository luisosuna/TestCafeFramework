import { Selector } from 'testcafe';

const getElementsByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    const items = [];
    let item = iterator.iterateNext();
    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }
    return items;
});
export default function (xpath) {
    return Selector(getElementsByXPath(xpath));
}

fixture `Unosquare Suite`
    .page `https://www.unosquare.com/`;

test('Unosquare Test', async t => {
    await t
    .maximizeWindow()
    .expect(Selector('div.col-12>h2.subtitle').innerText).contains('Testimonials'.toUpperCase(), 'Element contains "Testimonials"')
    .expect(Selector('div.col-12>h2.subtitle').innerText).notContains('Testimonials123'.toUpperCase(), 'Element NOT contains "Testimonials123"')
    .expect(Selector('div.col-12>h2.subtitle').innerText).eql('Testimonials'.toUpperCase(), 'Element Text is equal to "Testimonials"')
    .expect(Selector('h2.subtitle').count).eql(2)
    .expect(Selector('header > div').getAttribute('class')).eql('container-fluid', "Checking the class name", { timeout: 500 })
    .expect(Selector('div.col-12>h2.subtitle').exists).ok()
    .expect(Selector('div.col-12>h2.subtitleFAIL').exists).ok();
});