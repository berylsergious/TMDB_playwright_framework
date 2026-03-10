import { Page, Locator } from "@playwright/test";
import {test, expect } from "../../src/core/fixtures/test-fixtures";




test.describe("Automation Testing Practice - Form Tests", () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
  });

  test.afterAll(async () => {
    await page.close();
  });




    
    test("fill Forms", async ({  }) => {

        const  elements = {
            nameInput: page.getByPlaceholder("Enter Name"),
            emailInput: page.locator('#email'),
            phoneInput: page.locator('#phone'),
            addressInput: page.getByRole("textbox", { name: "Address:" }),
            genderRadioMale: page.locator('#male'),
            genderRadioFemale: page.locator('#female'),
            
        };

        await page.goto("https://testautomationpractice.blogspot.com/");
        
        await elements.nameInput.fill("Sergious");
        await elements.emailInput.fill("sergious@example.com");
        await elements.phoneInput.fill("1234567890");
        await elements.addressInput.fill("123 Main St, Anytown, USA");
        await elements.genderRadioMale.check();

        await expect(elements.nameInput).toHaveValue("Sergious");
        await expect(elements.emailInput).toHaveValue("sergious@example.com");
        await expect(elements.phoneInput).toHaveValue("1234567890");
        await expect(elements.addressInput).toHaveValue("123 Main St, Anytown, USA");
        await expect(elements.genderRadioFemale).not.toBeChecked();
        
    });


    
    
    test("select days", async ({  }) => {
      
    await page.goto("https://testautomationpractice.blogspot.com/");

        const weeksCheckbox : Locator = page.locator('input.form-check-input[type="checkbox"]');
        const daysCount = await weeksCheckbox.count();
        console.log(`Total checkboxes found: ${daysCount}`);
        

        for (let i = 0; i < daysCount; i++) {
            await weeksCheckbox.nth(i).check();
            console.log(`checked: ${await weeksCheckbox.nth(i).inputValue()}`);
            await expect(weeksCheckbox.nth(i)).toBeChecked();
        }
    
       

    });
    }


);
