import Spray from './model';

const Sprays = {
  index(req, res) {
    Spray.find({}).then((sprays) => res.json(sprays));
  }
};

export default Sprays;
