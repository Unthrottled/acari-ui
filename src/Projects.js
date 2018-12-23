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
    title: 'Resilient Applications',
    exerpt:
      'Applications today need to be able to respond in the face of adverse conditions. The circuit breaker pattern is a great place to start.',
    reach: reach_blue,
    color: blue[500],
    displayImage: hystrix,
    link: 'https://hystrix.acari.io',
    linkText: 'Visit the site',
    descriptions: [
      'Much like the actual devices embedded into residential, commercial, and industrial structures.The latter is designed to prevent a massive surge of electricity from flowing through your circuits. While the former prevents your application from trying to execute commands that are going to fail or take a really long time to respond. It is better to fail fast respond with something, than to never respond at all!',
      "Both are employed to protect the user and in the end that is the part that counts.",
      "This project was designed to highlight a portion of Hystrix's (Netflix's circuit breaker) features. It makes use of the real time metric analysis  that is fed to the dashboard. The data is generated (successfully or unsuccessfully) by a constant stream of command invocations controlled by you!",
      "Lastly, it took me way too long to realize that the Hystrix mascot is a porcupine.",
    ],
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
