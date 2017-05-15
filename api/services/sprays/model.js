import mongoose from 'mongoose';
import fetch from 'node-fetch';

const schema = mongoose.Schema({}, { timestamps: true });

schema.pre('save', function (next) {
  fetch('https://devices/salon', {
    method: 'POST'
  });
  next();
});

const Spray = mongoose.model('Spray', schema);

export default Spray;
