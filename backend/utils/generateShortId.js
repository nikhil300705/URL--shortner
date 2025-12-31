
function generateShortId ()
{
    let shortId = "";
    let count1 = 4;
    let count2 = 2;
    let index1 = (Math.floor(10 * Math.random())) % 6;
    let index2 = (Math.floor(10 * Math.random())) % 6;
    
    if (index1 == index2)
    {
        index2--;
    }

    let i = 0;

    while (count1 || count2)
    {
        if (i == index1 || i == index2)
        {
            shortId += `${Math.floor(10 * Math.random()) % 10}`;
            count2--;
        }
        else
        {
            shortId += `${String.fromCharCode(97 + Math.floor(100 * Math.random()) % 26)}`;
            count1--;
        }

        i++;
    }

    return shortId;
}

module.exports = generateShortId