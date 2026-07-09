import { Page } from "@playwright/test";


export class HeaderComponent {


   
    private readonly tmdbLogo;
    private readonly searchIcon;
    private readonly searchbar;
    private readonly searchCloseIcon;

    readonly searchSugguestionsList;


    protected readonly page: Page;
    

    constructor( page: Page) {
        this.page = page;
        this.tmdbLogo = this.page.getByRole("img", { name: "The Movie Database (TMDb)" });
        this.searchbar = this.page.locator("//input[@id='search_v4' and contains(@placeholder,'Search for a ')]");
        this.searchIcon = this.page.locator("a.search:not(.hide)");
        this.searchCloseIcon = this.page.locator("a.close:not(.hide)");
        this.searchSugguestionsList = this.page.locator("//li[@class='k-list-item']");
    
      }




 //actions
 async clickLogo() {
    await this.tmdbLogo.click();
  }
    
 async search(query: string) {
  await this.clickSearchIcon();
    await this.searchbar.fill(query);
    await this.searchbar.press("Enter");
  }

  async clickSearchIcon() {
    await this.searchIcon.click();
  }

  async clickSearchCloseIcon() {
    await this.searchCloseIcon.click();
  }

  async getSearchSuggestions() {
    return await this.searchSugguestionsList.allTextContents();
  }




    
}