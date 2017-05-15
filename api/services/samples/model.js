import mongoose from 'mongoose';

const schema = mongoose.Schema({
  value: { type: String, required: true, },
  created_at: Date,
});

const Sample = mongoose.model('Sample', schema);

export default Sample;
