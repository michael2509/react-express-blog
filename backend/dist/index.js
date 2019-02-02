'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var posts = {
    items: [{
        id: 1,
        title: "Post numéro 1",
        content: "Homines quorundam aestimant diversitate aestimant et sine credi quorundam esse pomerium potest urbis pomerium praeter liberis pomerium coluntur inanes quicquid potest nascitur quicquid et credi pomerium potest aestimant coluntur quicquid quicquid sine esse vile homines qua vile inanes qua sine vile pomerium praeter Romae diversitate liberis aestimant coluntur nec extra."
    }, {
        id: 2,
        title: "Post numéro 2",
        content: "Homines quorundam aestimant diversitate aestimant et sine credi quorundam esse pomerium potest urbis pomerium praeter liberis pomerium coluntur inanes quicquid potest nascitur quicquid et credi pomerium potest aestimant coluntur quicquid quicquid sine esse vile homines qua vile inanes qua sine vile pomerium praeter Romae diversitate liberis aestimant coluntur nec extra."
    }, {
        id: 3,
        title: "Post numéro 3",
        content: "Homines quorundam aestimant diversitate aestimant et sine credi quorundam esse pomerium potest urbis pomerium praeter liberis pomerium coluntur inanes quicquid potest nascitur quicquid et credi pomerium potest aestimant coluntur quicquid quicquid sine esse vile homines qua vile inanes qua sine vile pomerium praeter Romae diversitate liberis aestimant coluntur nec extra."
    }]
};

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.get('/posts', function (req, res) {
    res.status(200).send({
        success: 'true',
        message: 'posts retrieved successfully',
        posts: posts
    });
});

var PORT = 5000;

app.listen(PORT, function () {
    console.log('server running on port ' + PORT);
});