import blog from '../PageObjects/Unosquare/Blog';

fixture.disablePageReloads `Unosquare Fixture`
    .page `https://blog.unosquare.com/`
    .before( async ctx => {
        const userData = require("../DataFiles/SearchFile.json");

        ctx.Positive = userData.Positive;
        ctx.Negative = userData.Negative;
    });


    test('Search Feature Positive Scenario', async t => {
        await t
        .maximizeWindow()
        .wait(1000)
        await blog.searchInBlog(t.fixtureCtx.Positive);
    });

    test('Search Feature Negative Scenario', async t => {
        await t
        .wait(1000)
        await blog.searchInBlog(t.fixtureCtx.Negative);
    });