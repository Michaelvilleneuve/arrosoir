import Sample from './model';

const Samples = {
  index(req, res) {
    Sample.findAll();
    res.sendStatus(200);
  },

  create(req, res) {
    res.sendStatus(200);
  },

  params: (req) => req.parameters.permit('value').value()
};

export default Samples;
