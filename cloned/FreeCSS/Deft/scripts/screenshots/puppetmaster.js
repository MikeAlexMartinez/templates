'use strict';

const puppeteer = require('puppeteer');

const port = 3000;

const tasks = [
  {
    page: '',
    viewport: {
      width: 800,
      height: 2500
    },
    name: 'home-long',
    fullPage: true
  },
  {
    page: '',
    viewport: {
      width: (951 * 2),
      height: 951
    },
    name: 'home-short',
    fullPage: false
  }
];

const project = 'deft';

const puppetMaster = (p, v) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    if(v.emulate) {
      await page.emulate(v.emulate);
    } else {
      await page.setViewport(v.viewport);
    }
    await page.goto(`http://127.0.0.1:${port}/${v.page}`);
    await page.waitFor(1000);

    await page.screenshot({
      path: `./images/${p}-${v.name}.png`,
      fullPage: v.fullPage 
    });
    
    await browser.close();
  })();
};

tasks.forEach((v) => puppetMaster(project, v));
