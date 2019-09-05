import Sessions from '../models/sessionModels';

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
      mentorId, menteeId, questions, menteeEmail,
    } = req.body;
    console.log(req.body);

    const newSession = {
      id: Sessions.length + 1,
      mentorId,
      menteeId,
      questions,
      menteeEmail,
      status: 'pending',
    };

    Sessions.push(newSession);
    return res.status(201).json({
      status: res.statusCode,
      data: Sessions,
    });
  }

  // Approve sessiom
  static ApproveSession(req, res) {
    // eslint-disable-next-line no-shadow
    const session = Sessions.find((session) => session.id === req.params.id);
    console.log(session);
    if (session) {
      session.status = 'accepted';

      return res.status(200).json({
        status: res.statusCode,
        data: session.status,
      });
    }
    return res.status(204).json({
      status: res.statusCode,
      error: 'Session not created',
    });
  }

  // reject session
  static rejectSession(req, res) {
    // eslint-disable-next-line eqeqeq
    const findSession = Sessions.find((session) => session.id == req.params.id);
    if (findSession) {
      findSession.session.status = 'rejected';
      return res.status(200).json({
        status: 200,
        data: findSession,
      });
    }
    return res.send(204).json({
      status: 204,
      error: 'not created',
    });
  }
}
export default sessionsControllers;
