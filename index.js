const puppeteer = require('puppeteer');

console.log('Bem vindo ao Bot conversor 🤖💰');

async function robo(){
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  const moedaBase = 'dolar';
  const moedaFinal = 'real';
  const qualquerUrl = `https://www.google.com/search?client=opera&q=${moedaBase}+para+${moedaFinal}&sourceid=opera&ie=UTF-8&oe=UTF-8`;
  await page.goto(qualquerUrl);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
}

robo();
