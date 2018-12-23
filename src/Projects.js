import lambda from './images/lambda.svg';
import reach_blue from "./images/reach_blue.png";
import reach_green from "./images/reach_green.png";
import reach_purple from "./images/reach_purple.png";
import reach_red from "./images/reach_red.png";
import purple from "@material-ui/core/es/colors/purple";
import blue from "@material-ui/core/es/colors/blue";
import green from "@material-ui/core/es/colors/green";
import red from "@material-ui/core/es/colors/red";
import hystrix from './images/hystrix.png';
import vertx from './images/Vert.x_Logo.svg'
import pen from './images/pen.svg'
import A from './images/A.svg';

const projects = [
  {
    title: 'Functional Programming',
    exerpt: 'Are you curious about functional programming? If so this is a great place to start your declarative journey!',
    reach: reach_purple,
    color: purple[500],
    displayImage: lambda,
    link: 'http://learn.acari.io',
    linkText: 'Visit the Site',
    descriptions: [
      'Sometimes words are not enough to convey a concept. However, they say that a picture is worth a thousand words.  So then just maybe words are satisfactory!',
      'Anyways, this is a project that combines word and moving images to help explain functional and declarative programming paradigms as well as many other things!'
    ],
  },
  {
    title: 'Featured post',
    exerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: reach_blue,
    color: blue[500],
    displayImage: hystrix,
    link: 'https://acari.io',
    linkText: 'Visit the site',
    descriptions: ["aoeuaoeu", "aoeuaoeuaoeuauoeuaoetsuhsaoetu hsato ehsaot e", "aosetuh lacoebu satoeuhs aoeunsstah satoenshu "],
  },
  {
    title: 'Post title 1',
    exerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: reach_green,
    color: green[500],
    displayImage: vertx,
    link: 'https://acari.io',
    linkText: 'Visit the site',
    descriptions: ["aoeuaoeu", "aoeuaoeuaoeuauoeuaoetsuhsaoetu hsato ehsaot e", "aosetuh lacoebu satoeuhs aoeunsstah satoenshu "],
  },
  {
    title: 'Post title 3',
    exerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: reach_purple,
    color: purple[500],
    displayImage: pen,
    link: 'https://acari.io',
    linkText: 'Visit the site',
    descriptions: ["aoeuaoeu", "aoeuaoeuaoeuauoeuaoetsuhsaoetu hsato ehsaot e", "aosetuh lacoebu satoeuhs aoeunsstah satoenshu "],
  },
  {
    title: 'Post title 4',
    exerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: reach_red,
    color: red[500],
    displayImage: A,
    link: 'https://acari.io',
    linkText: 'Visit the site',
    descriptions: ["aoeuaoeu", "aoeuaoeuaoeuauoeuaoetsuhsaoetu hsato ehsaot e", "aosetuh lacoebu satoeuhs aoeunsstah satoenshu "],
  },
]

export default projects;
