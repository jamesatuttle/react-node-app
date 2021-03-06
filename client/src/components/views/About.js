import React from 'react';
import Graduate from '../svgs/Graduate';
import Computer from '../svgs/Computer';
import Swimming from '../svgs/Swimming';
import Star from '../svgs/Star';
import PageLayout from './PageLayout';
import JobList from './JobList';

class About extends React.Component {

  render() {
    return (
      <PageLayout page="home">
        <section id='about'>
          <h1>About me</h1>

          <Graduate/><h2 id='education'>Education</h2>
          <h3>Northumbria University, Newcastle</h3>
          <p>BSc. Computer Science 2013 - 2017</p>


          <Computer/><h2 id='work'>Where I've Worked</h2>
          <JobList />

          <Swimming/><h2 id='hobbies'>Hobbies</h2>
          <p>I love keeping fit with swimming, the gym, and rock climbing. I also love Console and PC gaming, playing Dungeons and Dragons, and travelling to experience the world and finding awesome street art.</p>

          <Star/><h2 id='ambition'>Ambition</h2>
          <p>My ambition is to focus primarily on Frontend Development with a bit of backend, maybe one day transitioning to a full stack developer.</p>

        </section>
      </PageLayout>
    );
  }
};

export default About;