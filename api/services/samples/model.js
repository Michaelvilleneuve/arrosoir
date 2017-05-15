import mongoose from 'mongoose';

const schema = mongoose.Schema({
  humidity: Number
}, { timestamps: true });

const Sample = mongoose.model('Sample', schema);

export default Sample;
