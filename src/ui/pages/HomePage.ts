import { Page } from "@playwright/test";   
import { BasePage } from "./BasePage";
import { ROUTES } from "../../core/constants/routes";


export class HomePage extends BasePage {


    constructor(page: Page) {
        super(page);
    }




}
