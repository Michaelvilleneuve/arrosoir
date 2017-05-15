import express from 'express';
import Samples from './service';

const router = express.Router();

router.route('/')
      .get((req, res) => Samples.index(req, res))

router.route('/:value')
      .post((req, res) => Samples.create(req, res));

export default router;
