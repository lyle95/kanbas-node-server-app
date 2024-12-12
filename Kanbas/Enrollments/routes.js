
import * as enrollmentDao from "./dao.js";
import * as courseDao from "../Courses/dao.js";

export default function EnrollmentsRoutes(app) {
    app.post("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        enrollmentDao.enrollUserInCourse(userId, courseId);
        res.sendStatus(200);
    });
    app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        enrollmentDao.unenrollUserFromCourse(userId, courseId);
        res.sendStatus(200);
    });
    /*
    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params;
        const courses = enrollmentDao.findEnrollmentsByUser(userId).map((enrollment) =>
            courseDao.findAllCourses().find((course) => course._id === enrollment.course)
        );
        res.json(courses);
    });*/
}