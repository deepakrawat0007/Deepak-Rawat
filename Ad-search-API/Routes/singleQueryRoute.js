const router = require("express").Router()
const Company = require("../Modal/companyModal");
const Ad = require("../Modal/adModal");

router.get("/api/V8/companyAds" , async (req, res)=>{
    try{
        const searchItem = req.query.searchItem
        const regEx = new RegExp(searchItem , 'i') // for checking both upper and lower case words
        // return res.status(200).send(searchItem)
        const ads = await Ad.aggregate([
            {
                $lookup:{
                    from:'companys',
                    localField:'companyId',
                    foreignField:'_id',
                    as:"company"
                }
            },
            {$unwind :'$company'}
            ,{
                $match:{
                    $or:[
                        {'company.name' :{$regex : regEx}},
                        {headline:{$regex : regEx}},
                        {primaryText : {$regex :regEx}},
                        {description :{$regex :regEx}}
                    ]
                }
            }
            ,{
                $project:{
                    _id:1,
                    headline:1,
                    primaryText:1,
                    description:1,
                    image:1,
                    'company.name':1,
                    'company.url':1
                }
            }
        ]);

        return res.status(200).json({
            ads:ads
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
})

module.exports = router;