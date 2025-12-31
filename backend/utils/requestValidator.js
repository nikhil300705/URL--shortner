
function validate (req, res)
{
    try
    {
        const url = req.body.url;

        if (url === null || url.length === 0)
        {
            res.status(400).send("URL Body cannot be null");
        }
    }
    catch (error)
    {
        console.log(error);
        res.send("Error validating input");
    }
}

module.exports = validate;