/**
 * Contains the miscellaneous route handlers.
 * @author TIMOTHY, Goodluck N. <https://github.com/Nekagte>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
