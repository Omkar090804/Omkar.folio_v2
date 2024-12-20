import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, link }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <a href={link}>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
      </a>
    </Tilt>
  );
};

const About = () => {
  return (
    <div
      style={{
        background: 'url("path_to_hero_image.jpg") no-repeat center center/cover', // Background image
        backgroundColor: '#000000', // Fallback color in case the image doesn't load
        padding: '20px',
        width: '100%',
        minHeight: '100vh', // Full viewport height
      }}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Motivated individual with proficiency in Core Java programming and web development, coupled
        with acumen and willingness to take on challenging roles. Tech-savvy and quick to learn, with
        technical know-how and social media expertise. Eager to create robust applications using my Java
        programming skills and web development, and excel as a leader who can efficiently lead a team.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-4 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
