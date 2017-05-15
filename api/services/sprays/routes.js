import express from 'express';
import Sprays from './service';

const router = express.Router();

router.route('/').get((req, res) => Sprays.index(req, res));

export default router;
