import {Page} from "@playwright/test";
import { BasePage } from "./BasePage";
import { ROUTES } from "../../core/constants/routes";






export class LoginPage extends BasePage {

    //Locators
    private readonly usernameInput = this.page.getByRole("textbox", { name: "username"});
    private readonly passwordInput = this.page.getByLabel("password");
    private readonly loginButton = this.page.getByRole("button", { name: "Login" });
    

    
    //Constructor
    constructor( page: Page) {
         super(page); 
        }  


    //Action Methods
    async navigate() : Promise<void> {
        await this.page.goto(ROUTES.LOGIN);
        
    }

    async login(username: string, password: string) : Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    
}