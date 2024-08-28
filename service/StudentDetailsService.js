const Student = require("../model/StudentDetails");

exports.StudentService = {
  getAllStudent: function (req, res) {
    return new Promise((resolve, reject) => {
      try {
        Student.findAll()
          .then((result) => resolve(result))
          .catch((err) => reject);
      } catch (err) {
        reject({ message: "Cannot read Details" });
      }
    });
  },

  getByIdStudent: function (req, res) {
    return new Promise(async (resolve, reject) => {
      try {
        const studentFound = await Student.findByPk(req.params.id);
        if (studentFound) {
          resolve(studentFound);
        } else {
          reject({ message: "Id " + req.params.id + " not found" });
        }
      } catch (err) {
        reject(err);
      }
    });
  },

  saveStudent: function (req, res) {
    return new Promise((resolve, reject) => {
      try {
        Student.create({
          name: req.body.name,
          gender: req.body.gender,
          parent: req.body.parent,
          address: req.body.address,
          dateOfBirth: req.body.dateOfBirth,
          email: req.body.email,
          section: req.body.section,
          phoneNumber: req.body.phoneNumber,
          rollNumber: req.body.rollNumber,
        })
          .then((result) => {
            console.log("Created successfully");
            console.log(result);
          })
          .catch((error) => {
            console.log("Error occured");
            console.log(error);
          });
        resolve(req.body);
      } catch (err) {
        reject(err);
      }
    });
  },

  updateStudent: function (req, res) {
    return new Promise(async (resolve, reject) => {
      try {
        const studentFound = await Student.findByPk(req.body.id)
          .then((student) => {
            (student.name = req.body.name),
              (student.gender = req.body.gender),
              (student.parent = req.body.parent),
              (student.address = req.body.address),
              (student.dateOfBirth = req.body.dateOfBirth),
              (student.email = req.body.email),
              (student.section = req.body.section),
              (student.phoneNumber = req.body.phoneNumber),
              (student.rollNumber = req.body.rollNumber);
            return student.save();
          })
          .then((result) => {
            console.log("Updated student");
            resolve("Updated student");
          })
          .catch((err) => {
            throw { message: req.body.id + " is invalid ID" };
          });
      } catch (err) {
        reject(err);
      }
    });
  },

  deleteStudent: function (req, res) {
    return new Promise(async (resolve, reject) => {
      try {
        Student.findByPk()
        const StudentFound = await Student.findByPk(req.params.id);
        if (StudentFound) {
          return Student.destroy({ where: { id: req.params.id } })
            .then((result) => {
              resolve({ message: req.params.id + " Deleted successfully" });
            })
            .catch((err) => {
              reject({ message: "Error occured while deleting - " + err });
            });
        } else {
          reject({ message: "Id " + req.params.id + " not found" });
        }
      } catch (err) {
        reject(err);
      }
    });
  },

  deleteAllStudent: function (req, res) {
    return new Promise((resolve, reject) => {
      try {
        Student.destroy({ truncate: true })
          .then((result) => {
            resolve({ message: "All details deleted" });
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  },
};
