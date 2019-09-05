import Mentors from '../models/mentorsModel';


class mentorsControllers {
  static getAllMentors(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: Mentors,
    });
  }

  static getSpecificMentor(req, res) {
    const mentorId = req.params.id;
    // eslint-disable-next-line no-shadow

    // eslint-disable-next-line eqeqeq
    const mentor = Mentors.find((mentor) => mentor.id == mentorId);
    if (mentor) {
      return res.status(200).json({
        status: res.statusCode,
        data: mentor,
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      error: 'Mentor not Found',
    });
  }

  static ChangeMentorRole(req, res) {
    // eslint-disable-next-line eqeqeq
    const mentor = Mentors.find((mnt) => mnt.id == req.params.id);
    if (mentor) {
      mentor.mentorrole = true;

      return res.status(200).json({
        status: res.statusCode,
        data: mentor,
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      error: 'Mentor not Found',
    });
  }
}


export default mentorsControllers;
