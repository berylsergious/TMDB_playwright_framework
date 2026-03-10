import {test , expect, Locator} from "@playwright/test";
import { before } from "node:test";




test.describe("title of this test is tables test", () => {

   

    test("table test", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
        const table = await page.locator('table[name="BookTable"]');

        expect(table).toBeVisible();

         // Wait for at least one data row to appear
    await page.waitForSelector('table[name="BookTable"] tr:not(:first-child)', { 
        state: 'attached',
        timeout: 10000 
    });

        const columns = await table.locator('tr th').all();
        const columnCount = columns.length;
        for (let i=0; i<columnCount; i++){
            const columnText = await columns[i].innerText();
            console.log(`column ${i+1}: ${columnText}`);

        }

        
        console.log(`total columns: ${columnCount}`);

    })


    test ("verify total number of rows", async ({page}) =>
    {
        await page.goto("https://testautomationpractice.blogspot.com/");
        // Wait for table to be visible
    await page.waitForSelector('table[name="BookTable"]', { state: 'visible' });
    
    const table = page.locator('table[name="BookTable"]');
    
    // Wait for at least one data row to appear
    await page.waitForSelector('table[name="BookTable"] tr:not(:first-child)', { 
        state: 'attached',
        timeout: 10000 
    });

    
    const rows = await table.locator('tr:not(:first-child)').all();
    const rowCount = rows.length;
    console.log(`total rows in table including header: ${rowCount}`);
    
    expect(rowCount).toBe(6);

        for (let i=0; i<rows.length; i++){
            const rowText = await rows[i].innerText();
            console.log(`row ${i+1}: ${rowText}`);
        }   


    
    })
})