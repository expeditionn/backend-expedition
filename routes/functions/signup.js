import createUser from "../../config/functions/createUser.js"


export default({
    method: 'post',
    url: '/createUser',
    func: async (req, res) => {
        if(!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.phone || !req.body.password){
            res.status(400).json({err: 'Bad Request'});
            return;
        }
        try{
            const result = await createUser(req.body);
            if(result === false){
                res.status(500).json({err: 'Internal Server Error'});
                return;
            }
            res.status(200).json({msg: 'User created successfully', email: req.body.email, token: result.id});
            return;
        }catch(error){
            console.error('Error in signup.js:', error);
            res.status(500).json({err: 'Internal Server Error'});
            return;
        }
    }
});