import mongoose from 'mongoose'

const UserProject = mongoose.Schema({
    projectOwnerUser: {
        type: String,
        required: true
    },
   
    kesif: {
        type: Array,        
    },
    createDate: {
        type: Date,
        default:new Date()
    },
    arsaAdresi: {
        type: String,
    },
    cepTel: {
        type: String,
    },
    mail: {
        type: String,
    },
   

})

export default mongoose.model('projeler', UserProject)