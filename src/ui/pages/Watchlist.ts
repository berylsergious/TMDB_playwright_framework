import {expect , Page} from "@playwright/test";
import { BasePage } from "./BasePage";
import { ROUTES } from "../../core/constants/routes";
export class WatchlistPage extends BasePage {

//Locators



    constructor(page: Page) {

        super(page);
    }


    async navigate(): Promise<void> {
        await this.page.goto(ROUTES.WATCHLIST);
    }

}
