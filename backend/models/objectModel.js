import mongoose from "mongoose";

const planetSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
    terrain: {
        type: String,
        required: true,
    },
    climate: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
)

export const Planet = mongoose.model('Planet', planetSchema)