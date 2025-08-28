import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({

username : {
    type : String,
    required : true, 
    unique: true,


},

email : {
    type : String,
    required : true, 
    unique: true,


},

password : {
    type : String,
    required : true, 
   


}
},{timestamps : true});//this is going to store two times --1> time of creation
                                                            //20time of updation
                                                            
                            const  User = mongoose.model('User', userSchema);
                            
                            
                            export default User;
                            










