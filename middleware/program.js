const startProgramModel = require('../models/startProgram');

const checkProgramStarted = async (req, res, next) => {
  try {
    const program = await startProgramModel.findOne();

    if (program && program.startProgram === false) {
      next();
    } else {
      return res.status(403).json({
        success: false,
        message: 'Program is started .',
      });
    }
  } catch (error) {
    console.error('Error checking program status:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while checking program status.',
    });
  }
};

module.exports = checkProgramStarted;
