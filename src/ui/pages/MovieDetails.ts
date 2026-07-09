import {expect , Page} from "@playwright/test";
import { BasePage } from "./BasePage";
import { ROUTES } from "../../core/constants/routes";
export class MovieDetailsPage extends BasePage {

//Locators
private readonly addToWatchlistButton = this.page.locator('#watchlist');

    constructor(page: Page) {

        super(page);
    }

    async clickOnAddToWatchlistButton(): Promise<void> {
        await this.addToWatchlistButton.click();
    }

   

}
