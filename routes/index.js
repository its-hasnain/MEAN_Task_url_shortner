const express = require('express');
const router = express.Router();
const Url = require('../model/dbschema')

// route for getting
router.get('/shortner/:shortUrl', async(req, res)=> {
  let code = req.params.shortUrl;
 const check = await Url.findOne({ shortUrl: code })
  if(check)
  {
    return res.status(200).json({message:"200", data: check.longUrl})
  }
});
// route for posting 
router.post('/shortner', async (req, res) => {
  
  try {
    const  link  = req.body.link
    if (link) {
    let longUrl = link;
    console.log("longurl",longUrl)
    let shortUrl  = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 8; i++ ) {
      shortUrl += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
   }
   const url = new Url({
    longUrl,
    shortUrl,
})
await url.save()
res.json(url)  
    } else {
      res.json({ success: false, message: "Missing required parameters" })
    }
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
});

module.exports = router;