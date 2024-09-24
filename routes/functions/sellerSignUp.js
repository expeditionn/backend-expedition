import logger from "../../logger/index.js";
import createSeller from "../../database/functions/createSeller.js"


export default({
    method: 'post',
    url: '/createSeller',
    func: async (req, res) => {
        if(!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.phone || !req.body.password || !req.body.works_at || !req.body.position){
            res.status(400).json({err: 'Bad Request'});
            return;
        }
        try{
            const result = await createSeller(req.body);
            if(result === false){
                res.status(500).json({err: 'Internal Server Error'});
                return;
            }
            res.status(200).json({msg: 'Seller created successfully', email: req.body.email, token: result.id});
            return;
        }catch(error){
            logger.errLogger(error, 'sellerSignup.js');
            console.error('Error in Seller signup.js:', error);
            res.status(500).json({err: 'Internal Server Error'});
            return;
        }
    }
});