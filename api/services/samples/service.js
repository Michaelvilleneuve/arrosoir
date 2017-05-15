import Sample from './model';
import Spray from '../sprays/model';

const Samples = {
  index(req, res) {
    Sample.find({})
      .then((samples) => res.json(samples));
  },

  create(req, res) {
    const sample = new Sample(this.params(req));
    sample.save().then(s => res.json(s));
    if (sample.humidity < 40) {
      new Spray().save();
    }
  },

  params: (req) => req.parameters.permit('humidity').value()
};

export default Samples;
