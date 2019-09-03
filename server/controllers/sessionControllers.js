import Sessions from '../models/sessionModels';
import Mentors from '../models/mentorsModel';
 
class sessionsControllers {
  static getAllSessions(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: Sessions,
    });
  }

  static getSession(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: Sessions,
    });
  }

  static createSession(req, res) {
    const {
      mentorId, menteeId, questions, menteeEmail, status,
    } = req.body;
    console.log(req.body);

    const newSession = {
      id: Sessions.length + 1,
      mentorId,
      menteeId,
      questions,
      menteeEmail,
      status,
    };

    Sessions.push(newSession);
    return res.status(201).json({
      status: res.statusCode,
      data: newSession,
    });
  }

  // Approve sessiom
  static ApproveSession(req, res) {
    const session = Sessions.find((session) => session.id === req.params.id);
    if (session) {
      session.status = true;

      return res.status(200).json({
        status: res.statusCode,
        data: session,
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      error: 'Session not Found',
    });
  }
}
export default sessionsControllers;
