import {expect, test } from "../../../src/core/fixtures/test-fixtures";
import { ReportUtil } from "../../../src/core/utils/ReportUtil";
import { SearchResultPage } from "../../../src/ui/pages/SearchResultPage";


test.describe("Watchlist Functionality", () => {

    test("Add a movie to Watchlist and verify it appears in the Watchlist", async ({ authenticatedUser, myProfilePage, watchlistPage, searchResultPage, movieDetailsPage },testInfo) => {   
        // 1. Wait for the network to settle
        await myProfilePage.waitForPageLoad();
        await myProfilePage.header.search("Inception"); 
        await searchResultPage.waitForPageLoad();

        const resultCount = await searchResultPage.getResultCount();
        expect(resultCount).toBe(20);
        await searchResultPage.clickOnmovieTitles(0); // Click on the first movie title (Inception)

        await movieDetailsPage.waitForPageLoad();
        await movieDetailsPage.clickOnAddToWatchlistButton(); // Click on the "Add to Watchlist" button

        //click on movie card that has inception as title
        //click on add to watchlist button

        await watchlistPage.navigate();

        

        //verify that the movie is in the watchlist
        //expect the movie card with title inception to be visible in the watchlist page
    }
    );

});