import mongoose from 'mongoose'

const ServiceSchema = mongoose.Schema({
    name:String,
    projects : [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
    ]
})

const Service = mongoose.model("Service", ServiceSchema)

export default Service;