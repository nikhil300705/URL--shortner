const express = require ('express');
const shortenUrlHandler = require('../service/urlService');
const {getUrlByShortId, incrementCount} = require('../repository/urlRepository');
const router = express.Router();

router.post('/shorten', shortenUrlHandler);

router.get('/:shortId', async(req, res) => {
    try
    {
        const shortId = req.params.shortId;
        const originalUrl = await getUrlByShortId(shortId);
        res.redirect(originalUrl.originalUrl);
    }
    catch (error)
    {
        if (error.message === 'Url not found')
        {
            return res.status(404).json({
                error : {
                    message : 'Short URL not found'
                }
            })
        }

        return res.send("Some error occurred");
    }
});

module.exports = router;