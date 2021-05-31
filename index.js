const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem vindo ao Bot conversor 🤖💰');

async function robo(){
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  const moedaBase = readlineSync.question ('Informa uma moeda Base: ') || 'dolar';
  const moedaFinal = readlineSync.question ('Informa uma moeda desejada: ') || 'real';
  const qualquerUrl = `https://www.google.com/search?client=opera&q=${moedaBase}+para+${moedaFinal}&sourceid=opera&ie=UTF-8&oe=UTF-8`;
  await page.goto(qualquerUrl);
  //await page.screenshot({ path: 'example.png' });

  const resultado = 

  await page.evaluate(() => {
    return  document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;  
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)
  await browser.close();
}

robo();
