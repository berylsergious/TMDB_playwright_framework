import {expect, test } from "../../../src/core/fixtures/test-fixtures";
import { ReportUtil } from "../../../src/core/utils/ReportUtil";


test.describe("Watchlist Functionality", () => {

    test("Add a movie to Watchlist and verify it appears in the Watchlist", async ({ authenticatedUser, myProfilePage, watchlistPage },testInfo) => {   
        // 1. Wait for the network to settle
        await myProfilePage.waitForPageLoad();
        await myProfilePage.header.search("Inception"); 
        //click on movie card that has inception as title
        //click on add to watchlist button

        await watchlistPage.navigate();

        //verify that the movie is in the watchlist
        //expect the movie card with title inception to be visible in the watchlist page
    }
    );

});