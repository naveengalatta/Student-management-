const { StudentService } = require("../service/StudentDetailsService");

exports.StudentController = {
  init: function (studentRouter) {
    studentRouter.get("/", (req, res) =>
      returnResponse(req, res, StudentService.getAllStudent(req, res))
    );

    studentRouter.get("/:id", (req, res) =>
      returnResponse(req, res, StudentService.getByIdStudent(req, res))
    );

    studentRouter.post("/save", (req, res) =>
      returnResponse(req, res, StudentService.saveStudent(req, res))
    );

    studentRouter.put("/update", (req, res) =>
      returnResponse(req, res, StudentService.updateStudent(req, res))
    );

    studentRouter.delete("/delete/:id", (req, res) =>
      returnResponse(req, res, StudentService.deleteStudent(req, res))
    );

    studentRouter.delete("/delete", (req, res) =>
      returnResponse(req, res, StudentService.deleteAllStudent(req, res))
    );

    return studentRouter;
  },
};
