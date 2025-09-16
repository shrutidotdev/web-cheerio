import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://shruti.dev";

async function scrapeWebsite(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const siteHeading = $("h1").text();

        const pageHead = $('head').html();
        const pageBody = $('body').html();

        // link
        const internalLinks = [];
        const externalLinks = [];

        console.log(pageHead);
        console.log(siteHeading);

        console.log({ pageHead , pageBody })

        $('a').each((_, el) => {
            const link = $(el).attr('href');
            if(link?.startsWith('/')) {
                internalLinks.push(link)
            } else {
                externalLinks.push(link)
            }
            console.log(link);
            console.log(externalLinks);
            console.log(internalLinks);
        })
    } catch (error) {
        console.error("Error fetching the website:", error);
    }
}

scrapeWebsite('https://shruti.dev/')