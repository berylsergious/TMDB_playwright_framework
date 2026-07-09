import {expect , Page} from "@playwright/test";
import { BasePage } from "./BasePage";
import { ROUTES } from "../../core/constants/routes";

export class MyProfilePage extends BasePage {

    
    

    constructor(page: Page) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.page.goto(ROUTES.USER_PROFILE);
    }
    
    async verifyUserProfileLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/u\/SentinalSergious/);
}
    

    
  



    
}