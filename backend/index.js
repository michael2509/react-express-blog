import express from 'express';
import cors from 'cors';

const posts = {
  items: [
      {
          id: 1,
          title: "Post numéro 1",
          content: "Homines quorundam aestimant diversitate aestimant et sine credi quorundam esse pomerium potest urbis pomerium praeter liberis pomerium coluntur inanes quicquid potest nascitur quicquid et credi pomerium potest aestimant coluntur quicquid quicquid sine esse vile homines qua vile inanes qua sine vile pomerium praeter Romae diversitate liberis aestimant coluntur nec extra."
      },
      {
          id: 2,
          title: "Post numéro 2",
          content: "Homines quorundam aestimant diversitate aestimant et sine credi quorundam esse pomerium potest urbis pomerium praeter liberis pomerium coluntur inanes quicquid potest nascitur quicquid et credi pomerium potest aestimant coluntur quicquid quicquid sine esse vile homines qua vile inanes qua sine vile pomerium praeter Romae diversitate liberis aestimant coluntur nec extra."
      },
      {
          id: 3,
          title: "Post numéro 3",
          content: "Homines quorundam aestimant diversitate aestimant et sine credi quorundam esse pomerium potest urbis pomerium praeter liberis pomerium coluntur inanes quicquid potest nascitur quicquid et credi pomerium potest aestimant coluntur quicquid quicquid sine esse vile homines qua vile inanes qua sine vile pomerium praeter Romae diversitate liberis aestimant coluntur nec extra."
      }
  ]
};

const app = express();

app.use(cors());

app.get('/posts', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'posts retrieved successfully',
    posts: posts
  })
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})