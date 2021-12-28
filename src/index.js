import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <h1>Art And Painting</h1>,
  document.querySelector("[class=\"generalText\"]")
);

ReactDOM.render(
  <img src="/Img/Art.jpg" alt="Error"/>,
  document.querySelector("[class=\"image\"]")
);

ReactDOM.render(
  <h5>You can visit the gallery to see more paintings and works of art.</h5>,
  document.querySelector("[class=\"text\"]")
);

