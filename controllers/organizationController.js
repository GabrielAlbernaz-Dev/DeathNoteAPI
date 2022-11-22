//Model
const Organization = require('../models/Organization');

const organizationsController = {
    getOrganizations : async (req, res) => {
        try {
            const organizations = await Organization.find();
            const length = Array.from(await Organization.find()).length
            res.status(200).json({count:length,results:organizations});
    
        } catch (err) {
            res.status(404).json({error:'An error occurred while accessing the organization list!'});
        }
    }, 

    getOrganization : async (req, res, next) => {
        const id = req.params.id;
        try {
            const organization = await Organization.findById(id);
            res.status(200).json(organization);
        } catch (error) {
            res.status(422).json({error:'The organization does not exist in our data storage'});
        }
    }, 

    insertOrganization : async (req,res,next)=>{
        const {name,description,members} = req.body;
        const length = Array.from(await Organization.find()).length
        const fullUrl = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
        const organization = {
            name,
            url: `${fullUrl.href}/${length}`,
            description,
            members
        }
    
        try {
            await Organization.create(organization);
            res.status(201).json({message: 'Organization Post was successfully created'})
        } catch (err) {
            console.log(err);
            res.status(500).json({error:'Passed data is empty or incorrect, please check and try again'});
        }
    },

    editOrganization : async (req, res, next) => {
        const id = req.params.id;
        const {name,description,members} = req.body;
        const organization = {
            name,
            description,
            members
        }
    
        try {
            const updatedorganization = await Organization.updateOne({_id: id},organization);
            if(updatedorganization.matchedCount === 0) res.json({error:'organization cannot be updated, because body was empty'});
            res.status(200).json(organization);
        } catch (err) {
            res.status(500).json({error:'An error occurred when changing organization data, check your boy request'});
        }
    }, 

    deleteOrganization : async (req, res) => {
        const id = req.params.id;
        const organization = await Organization.findOne({id: id});
        if(!organization) {
            res.status(422).json({msg:'Organization not found or id is invalid'});
            return
        }
    
        try {
            await Organization.deleteOne();
            res.status(200).json({msg:'Organization deleted successfully'});
        } catch (err) {
            res.status(500).json({msg:'Organization not found or id is invalid'});
        }
    
    }


}



module.exports = organizationsController