const express = require('express');
const validate = require('../utils/requestValidator');
const url = require('../models/url')
const generateShortId = require('../utils/generateShortId');
const {saveUrl, findAlreadyPresent} = require('../repository/urlRepository');

async function  shortenUrlHandler (req, res, next)
{
    const url = req.body.url;

    validate(req, res);

    try
    {
        const alreadyPresent = await findAlreadyPresent(url);
        
        console.log("Found URL", alreadyPresent);
        
        if (alreadyPresent)
        {
            res.json({
                message : "URL is already shortened",
                shortUrl : `https://${req.get('host')}/${alreadyPresent.shortUrl}`
            });
            return;
        }

        const shortId = generateShortId();

        const savedUrl = await saveUrl(shortId, url);

        console.log(`URL was converted successfully`);

        res.json({
            shortUrl : `https://${req.get('host')}/${savedUrl.shortUrl}`
        });
    }
    catch(error)
    {
        next(error);
    }
}

module.exports = shortenUrlHandler