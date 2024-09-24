import logger from "../../logger/index.js";
import getUserById from "../../database/functions/getDataById.js";
import checkTicketAvailability from "../../database/functions/checkTicketAvailability.js";
import buyTicket from "../../database/functions/buyTicket.js";

export default ({
    method: 'post',
    url: '/buyTicket',
    func: async (req, res) => {
        const {user_id, ticket_id} = req.body;
        if(!user_id || !ticket_id){
            res.status(400).json({err: 'Bad Request'});
            return;
        }
        try{
            const checkUser = await getUserById(user_id, 'user');
            if(checkUser.err){
                res.status(404).json({err: 'User not found'});
                return;
            }
            // Buy ticket

            const checkAvailability = await checkTicketAvailability(ticket_id);
            if(checkAvailability.err){
                res.status(404).json({err: 'Ticket not found'});
                return;
            }
            if(checkAvailability.available === 0){
                res.status(400).json({err: 'Ticket not available'});
                return;
            }

            // Update ticket availability and buy ticket

            const ticketStatus = await buyTicket(ticket_id, user_id);




        }catch(err){
            logger.errLogger(err, 'buyTicket.js');
            console.error('Error in buyTicket.js:', err);
            res.status(500).json({err: 'Internal Server Error'});
            return;
        }
    }
})