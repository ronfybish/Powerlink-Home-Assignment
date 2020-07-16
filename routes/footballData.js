const router = require('express').Router();

const { getTeams, getTeamById } = require('../controller/footballData');
router.get('/', getTeams);
router.get('/:id', getTeamById);

module.exports = router;
