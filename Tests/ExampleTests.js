import page from '../PageObjects/ExamplePage/mainPage';
import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker', { replace: true })
        .expect(page.nameInput.value).eql('Paker');
});

test('Click check boxes and then verify their state', async t => {
    for (const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});

test('Submit a developer name and check the header', async t => {
    const header = Selector('#article-header');

    await page.submitName('Peter');

    await t.expect(header.innerText).eql('Thank you, Peter!');
});