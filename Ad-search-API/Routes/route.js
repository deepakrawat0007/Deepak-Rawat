const router = require("express").Router();
const Company = require("../Modal/companyModal");
const Ad = require("../Modal/adModal");

//Add companys in db

router.post("/api/addCompany" , async (req , res)=>{

    try{
        const {name , url} = req.body

        const company = new Company({
            name:name,
            url:url
        })
        await company.save()

        return res.status(200).json({
            message:"New Company Added"
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
})

//Get All Companies

router.get("/api/companies" , async (req , res)=>{

    try{
        const companies = await Company.find() 
        
        return res.status(200).json({
            companies:companies
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
})

//Add new company's Ad

router.post("/api/addAd" , async (req , res)=>{

    try{
        const {companyId,primaryText , headline,description,CTA,image} = req.body

        const ad = new Ad({
            companyId:companyId,
            primaryText:primaryText,
            headline:headline,
            description:description,
            CTA:CTA,
            image:image
        })
        await ad.save()

        return res.status(200).json({
            message:"New Ad Added"
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
})

// get all ads

router.get("/api/ads" , async (req , res)=>{

    try{
        const ads = await Ad.find() 
        
        return res.status(200).json({
            ads:ads
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
})




module.exports = router