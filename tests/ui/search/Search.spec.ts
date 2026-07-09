import {expect, test } from "../../../src/core/fixtures/test-fixtures";
import { ReportUtil } from "../../../src/core/utils/ReportUtil";


test.describe("Search Functionality", () => {

    test("Search suggestions appear when clicking the search icon", async ({ authenticatedUser, myProfilePage },testInfo) => {
        await myProfilePage.waitForPageLoad();
        await myProfilePage.header.clickSearchIcon(); 

        await expect(myProfilePage.header.searchSugguestionsList.first()).toBeVisible();
        const suggestions = await myProfilePage.header.getSearchSuggestions();
       
        for (let i = 0; i < suggestions.length; i++) {
            console.log("Search suggestion: ", suggestions[i]);
        }
        const count = suggestions.length;
        expect(count).toBe(10);

        await ReportUtil.attachScreenshot(
        myProfilePage.getPage(),
        testInfo,
        "Search Suggestions"
        );
    });


    test("Search for a movie and verify results", async (
    { authenticatedUser, myProfilePage },
    testInfo
  ) => {    
        // 1. Wait for the network to settle
        await myProfilePage.waitForPageLoad();
        await myProfilePage.header.search("Inception"); 

        await ReportUtil.attachScreenshot(
        myProfilePage.getPage(),
        testInfo,
        "Movie Search Results"
        );

    });

    test("Search for a TV show and verify results", async (
    { authenticatedUser, myProfilePage },
    testInfo
  ) => {
        // 1. Wait for the network to settle
        await myProfilePage.waitForPageLoad();
        await myProfilePage.header.search("Breaking Bad");
        
        await ReportUtil.attachScreenshot(
        myProfilePage.getPage(),
        testInfo,
        "TV Show Search Results"
        );
    });

});
