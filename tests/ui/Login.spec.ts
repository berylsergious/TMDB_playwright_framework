import {test, expect } from "../../src/core/fixtures/test-fixtures";
import { NEGATIVE_LOGIN_DATA, AUTH_DATA } from "../../src/testdata/uiTestDataFactory";



test.describe("Login Functionality", () => {

    // Positive test case for successful login       
    test("Successful login with valid credentials", async ({loginPage, myProfilePage}) => {
        
        // 1. Wait for the network to settle
        await loginPage.waitForPageLoad();
        await loginPage.navigate();
        await loginPage.login(AUTH_DATA.username, AUTH_DATA.password);

       // Add assertions to verify
        await myProfilePage.waitForPageLoad();
        await expect(myProfilePage.pageMemberDetail).toBeVisible();
    });


    // Data-driven tests for negative login scenarios
    for (const data of NEGATIVE_LOGIN_DATA) {
    test(`Fail login: ${data.scenario}`, async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(data.username, data.password);
        // Add assertions to verify error message is displayed, e.g., check for error notification

        
    });
    }


});
