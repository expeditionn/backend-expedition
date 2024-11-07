import getDataByMail from "../../database/functions/getDataByMail.js";
import formatter from "../../helpers/formatter.js";
import createTicket from "../../database/functions/createTicket.js";

export default ({
    method: 'post',
    url: '/createTicket',
    func: async (req, res) => {
        var {type, title, place, show_name, description, seller, time, date, available, noOfTickets} = req.body;
        if(!type || !title || !place || !seller || !time || !date || !noOfTickets || !description){
            res.status(400).json({err: 'Bad Request'});d
            return;
        }
        try {
            const checkSeller = await getDataByMail(seller, "seller");
            if(checkSeller === false){
                res.status(500).json({err: 'Internal Server Error'});
                return;
            }
            if(checkSeller.err){
                res.status(404).json({err: checkSeller.err});
                return;
            }
            const result = await createTicket({
                type: type,
                title: title,
                place: place,
                show_name: show_name,
                description: description,
                seller: checkSeller.id,
                time: time,
                date: date,
                available: available,
                noOfTickets: noOfTickets
            });
            if(result.err){
                res.status(500).json({err: result.err});
                return;
            }
            res.status(200).json({id: result.id});
            return;
        } catch (error) {
            console.error('Error in createTicket.js:', error);
            res.status(500).json({err: 'Internal Server Error'});
            return;
        }
    }
})