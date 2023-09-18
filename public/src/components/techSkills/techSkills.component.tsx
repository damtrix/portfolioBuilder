import { useState } from 'react';
import cSharp from '../../assets/images/skills/cSharp.png';
import vb from '../../assets/images/skills/and-design.png';
import css from '../../assets/images/skills/css.png';
import git from '../../assets/images/skills/git.png';
import html from '../../assets/images/skills/html.png';
import js from '../../assets/images/skills/js.png';
import react from '../../assets/images/skills/react.png';
import toolkit from '../../assets/images/skills/toolKit.png';
import styled from '../../assets/images/skills/styled.png';
import bootstrap from '../../assets/images/skills/bootstrap.png';
import tail from '../../assets/images/skills/tailwind.png';
import Ts from '../../assets/images/skills/typescript.png';
import mui from '../../assets/images/skills/mui.jpg';
import node from '../../assets/images/skills/node.jpg';
import express from '../../assets/images/skills/express.jpg';
import mongo from '../../assets/images/skills/mongo.jpg';
import mongoose from '../../assets/images/skills/mongoose.jpg';

export const TectSkills = () => {
  let count = 100;
  const [imgArray] = useState([
    html,
    css,
    bootstrap,
    tail,
    styled,
    mui,
    js,
    Ts,
    react,
    toolkit,
    node,
    express,
    mongo,
    mongoose,
    cSharp,
    vb,
    git,
  ]);
  return (
    <div className=' mb-10'>
      <div className=' flex flex-col justify-center items-center'>
        <h1 className=' text-2xl md:text-6xl font-bold leading-10 font-IbarraReal text-blackBlue'>
          Technical Skills
        </h1>
        <div className=' mt-6 w-28 h-1 bg-blackBlue'></div>
      </div>
      <div className=' flex flex-wrap mt-10'>
        {imgArray.map((img, index) => {
          count += 100;
          return (
            <div
              className=''
              data-aos='fade-up'
              data-aos-delay={count}
              key={index}>
              <img
                className=' w-10 md:w-24 md:h-24 object-contain ml-8 mb-8'
                src={img}
                alt={img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
