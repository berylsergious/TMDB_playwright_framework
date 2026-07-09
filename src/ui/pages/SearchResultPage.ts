import {Page} from "@playwright/test";
import { BasePage } from "./BasePage";
import { ROUTES } from "../../core/constants/routes";






export class SearchResultPage extends BasePage {

    //Locators
    private readonly searchResultCards = this.page.locator('div.flex.flex-wrap.items-center.content-center.w-full.p-3:visible');
    private readonly movieTitles = this.searchResultCards.locator("h2");
    

    
    //Constructor
    constructor( page: Page) {
         super(page); 
        }  



    async clickOnmovieTitles(index: number): Promise<void> {
        await this.movieTitles.nth(index).click();
    }

    async getResultCount(): Promise<number> {
    return await this.searchResultCards.count();
}
    
}
    

