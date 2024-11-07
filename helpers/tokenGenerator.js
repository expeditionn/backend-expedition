import {v4} from 'uuid';
const tokenGenerator = async () => {
    try{
        return v4();
    }catch(err){
        console.log(err);
        return false;
    }
}

export default tokenGenerator;