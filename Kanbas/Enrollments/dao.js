import Database from "../Database/index.js";
export function findCoursesForUser(userId) {
    const { enrollments, courses } = Database; 
    const userCourseIds = enrollments
        .filter((enrollment) => enrollment.user === userId)
        .map((enrollment) => enrollment.course);
    return courses.filter((course) => userCourseIds.includes(course._id));
}
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(
        (enrollment) => enrollment.user !== userId || enrollment.course !== courseId
    );
}
export function findEnrollmentsByUser(userId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.user === userId);
}
export function findUserByCourse(courseId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.course === courseId);
}