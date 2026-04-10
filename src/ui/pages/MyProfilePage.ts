import {expect , Page} from "@playwright/test";
import { BasePage } from "./BasePage";
import { ROUTES } from "../../core/constants/routes";

export class MyProfilePage extends BasePage {

    readonly pageMemberDetail = this.page.getByText('Member since April 2025');
    

    constructor(page: Page) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.page.goto(ROUTES.USER_PROFILE);
    }

    

    
  



    
}