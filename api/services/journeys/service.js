import Journey from './model';
import Image from '../../../utils/Image';

const Journeys = {
  index(req, res) {
    req.user.journeys().exec((err, journeys) => res.json(journeys));
  },

  show(req, res) {
    Journey.findOne(this.getJourney(req))
        .select('title description lat lng image starts_at ends_at public')
        .then((journey) => res.json(journey))
        .catch(() => res.sendStatus(404));
  },

  create(req, res) {
    this.journey = new Journey(this.params(req));
    this.saveImage()
      .then((journey) => res.json(journey))
      .catch((err) => res.status(422).json(err));
  },

  async update(req, res) {
    Journey.update(this.getJourney(req))
        .then((journey) => {
          this.journey = journey;
        })
        .then(this.saveImage)
        .then((journey) => res.json(journey))
        .catch((err) => res.status(422).json(err));
  },

  destroy(req, res) {
    Journey.remove(this.getJourney(req)).then(() => res.sendStatus(200));
  },

  saveImage() {
    if (!this.journey.image || this.journey.image.length < 200) return this.journey.save();
    const path = `journeys/${this.journey._id}.jpg`;
    return Image.upload(this.journey.image, 1600, 900, path)
                .then(image => {
                  this.journey.image = image;
                  return this.journey.save();
                });
  },

  params(req) {
    const params = req.parameters.permit(
      'title', 'description', 'image', 'lng', 'lat', 'starts_at', 'ends_at', 'public'
    ).value();
    return Object.assign({ user: req.user }, params);
  },

  getJourney(req) {
    return { _id: req.params.id, user: req.user };
  },
};

export default Journeys;
