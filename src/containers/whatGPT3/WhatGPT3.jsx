import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Libero enim sed faucibus turpis. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Explore the endless possibilities of knowledge</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Ut morbi tincidunt augue interdum velit. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Amet est placerat in egestas erat imperdiet sed." />
      <Feature title="Knowledgebase" text="Amet dictum sit amet justo donec enim diam. Quis auctor elit sed vulputate. Nunc id cursus metus aliquam eleifend mi." />
      <Feature title="Education" text="Dui nunc mattis enim ut tellus elementum sagittis vitae et. Sem viverra aliquet eget sit amet tellus. Nibh tortor id aliquet lectus." />
    </div>
  </div>
);

export default WhatGPT3;
