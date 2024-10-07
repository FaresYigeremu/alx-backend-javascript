/**
 * Retrieves a list of students.
 * @author Timothy Goodluck <https://github.com/Nekgate>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((items) => items.id);
  }
  return [];
}
