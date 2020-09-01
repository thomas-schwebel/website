const puppeteer = require('puppeteer');

(async () => {
    // start local server on build

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/', {waitUntil: 'networkidle2'});
    await page.emulateMediaType('print');
    await page.pdf({path: 'public/resume.pdf', format: 'A4'});
    await browser.close();
})()