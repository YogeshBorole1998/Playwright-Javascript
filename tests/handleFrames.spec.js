const { test, expect } = require('@playwright/test');

test('Handling Frames OR iFrames : https://playwright.dev/docs/frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Available Frames
    const allFrames = await page.frames();
    console.log('Number of Frames: ', allFrames.length);

    // Approach-1 : Using name or url
    // const frame = await page.frame('name'); // If name is present 
    const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    await frame1.fill("//input[@name='mytext1']", 'Hello');

    // Approach-2 : Using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
    await inputBox.fill('Hello');

    await page.close();
});
