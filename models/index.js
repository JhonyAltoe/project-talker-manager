const getAllSpeakers = require('./getAllSpeakers');
const getSpeakerById = require('./getSpeakerById');
const loginAndReturnToken = require('./loginAndReturnToken');
const postAddSpeaker = require('./postAddSpeaker');
const addCurrentToken = require('./addCurrentToken');
const updateSpeaker = require('./updateSpeaker');
const deleteSpeaker = require('./deleteSpeaker');

module.exports = {
  getAllSpeakers,
  getSpeakerById,
  loginAndReturnToken,
  postAddSpeaker,
  addCurrentToken,
  updateSpeaker,
  deleteSpeaker,
};