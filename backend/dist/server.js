"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _db = _interopRequireDefault(require("./db/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.get('/posts', function (req, res) {
  res.status(200).send({
    success: 'true',
    message: 'posts retrieved successfully',
    posts: _db.default
  });
});
var PORT = 5000;
app.listen(PORT, function () {
  console.log("server running on port ".concat(PORT));
});