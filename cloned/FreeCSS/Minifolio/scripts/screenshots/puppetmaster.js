'use strict';

const puppeteer = require('puppeteer');

const pages = ['','about','contact'];

const project = 'minifolio';

const puppetMaster = (p, l) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1300,
      height: 1753
    });
    await page.goto(`http://127.0.0.1:3000/${l}`);
    await page.waitFor(1000);
    await page.screenshot({
      path: `./images/${p}-${l ? l : 'home'}.png`,
      fullPage: true 
    });
    
    await browser.close();
  })();
};

pages.forEach((v) => puppetMaster(project, v));
