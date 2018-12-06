import puppeteer from "puppeteer";

const APP = "localhost:8080";
let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      //slowMo: 80,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
});

test("test with valid input", async () => {
  await page.goto(APP);
  await page.waitForSelector("#cm");
  await page.type("#cm", "123");
  await page.type("#kg", "123");
  await page.type("#waist", "123");
  await page.type("#hip", "123");
  await page.click("#male");
  await page.click("#submitButton");
  await page.waitForSelector("#resultNumber");

  let element = await page.$('#resultNumber');
  let text = await page.evaluate(x => x.textContent, element);
  expect(text).toEqual('81.3');
}, 16000);

test("Test with invalid input", async() => {
  await page.goto(APP);
  await page.waitForSelector("#cm");
  await page.type("#cm", "a");
  await page.type("#kg", "a"); 
  await Promise.all([
    page.click("#submitButton"),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  expect(page.url()).toMatch("localhost");
}, 16000);

afterAll(() => {
    browser.close();
});