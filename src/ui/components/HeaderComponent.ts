import { Page } from "@playwright/test";


export class HeaderComponent {


   
    private readonly tmdbLogo;


    protected readonly page: Page;
    

    constructor( page: Page) {
        this.page = page;
        this.tmdbLogo = this.page.getByRole("img", { name: "The Movie Database (TMDb)" });

    }




 //actions
 async clickLogo() {
    await this.tmdbLogo.click();
  }
     


    
}