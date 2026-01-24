const Url = require('../models/url');

async function saveUrl (shortId, originalUrl)
{
    const newUrl = new Url({shortUrl : shortId, originalUrl : originalUrl});

    return await newUrl.save();
}

async function getUrlByShortId (shortId)
{
    return await Url.findOne({shortUrl: shortId});
}

async function incrementCount (shortId)
{
    try
    {
        const updatedUrl = await Url.findOne({shortId});

        if (updatedUrl)
        {
            updatedUrl.clickCount++;
            return await updatedUrl.save();
        }

        console.log("No url found");
    }
    catch (error)
    {
        console.log("Error in incrementing click count", error);
    }
}

async function findAlreadyPresent (url)
{
    return await Url.findOne({originalUrl : url});
}

module.exports = {saveUrl, getUrlByShortId, incrementCount, findAlreadyPresent}