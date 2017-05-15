import Sample from './model';
import Spray from '../sprays/model';

const Samples = {
  index(req, res) {
    Sample.find({})
      .then((samples) => res.json(samples));
  },

  create(req, res) {
    const sample = new Sample({ humidity: req.params.value });
    sample.save().then(s => res.json(s));
    if (sample.humidity < 40) {
      new Spray().save();
    }
  }
};

export default Samples;
