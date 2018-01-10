'use strict';

const puppeteer = require('puppeteer');

const port = 3000;

const tasks = [
  {
    page: '',
    viewport: {
      width: 1750,
      height: 951
    },
    name: 'home-long',
    fullPage: true
  },
];

const project = 'ranger';

const puppetMaster = (p, v) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport(v.viewport);
    await page.goto(`http://127.0.0.1:${port}/${v.page}`);
    await page.waitFor(2000);
    await page.screenshot({
      path: `./images/${p}-${v.name}.png`,
      fullPage: v.fullPage 
    });
    
    await browser.close();
  })();
};

tasks.forEach((v) => puppetMaster(project, v));
