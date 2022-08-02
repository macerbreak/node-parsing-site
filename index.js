import puppeteer from 'puppeteer'

const screenshot = async (page) => {
    await page.waitForTimeout(5000)
    await page.screenshot({path:"example.png"})
}
const start = async () =>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.youtube.com/channel/UCkUFua6WbuKcmMDrcxRpH7A")


    await page.waitForSelector(".style-scope.ytd-channel-name#text")
    const userName = await page.$eval(".style-scope.ytd-channel-name#text", (el)=>{
        return el.innerHTML
    })
    console.log({userName})
    await page.click("#tabsContent > tp-yt-paper-tab:nth-child(4)")
    await page.waitForSelector("#video-title")
    const firstVideoName = await page.$eval("#video-title", (el)=>{
        return el.innerHTML
    })
    console.log({firstVideoName})
    //await page.$eval("yourSelector", (el) =>el.value="yourValue") // set value for inputs
    // await screenshot(page)
    await browser.close()
}
start()