import mongoose from 'mongoose'

const genelSchema = mongoose.Schema({

   UyeGiris: {
      type: String,
      default:true
   }, 
   UyeKayit: {
      type: String,
      default:true
   }, 
 
})

export default mongoose.model('Genel', genelSchema)