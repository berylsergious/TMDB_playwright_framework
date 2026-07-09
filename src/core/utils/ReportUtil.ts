import { Page, TestInfo } from "@playwright/test";

export class ReportUtil {

    static async attachScreenshot(
        page: Page,
        testInfo: TestInfo,
        name: string
    ): Promise<void> {

        const screenshot = await page.screenshot({
            fullPage: true
        });

        await testInfo.attach(name, {
            body: screenshot,
            contentType: "image/png"
        });
    }
}