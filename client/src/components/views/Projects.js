import React from 'react';
import Css3 from '../svgs/Css3';
import Javascipt from '../svgs/Javascript';
import PageLayout from './PageLayout';
import ProjectList from './ProjectList';

function Projects() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/projectsList")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <PageLayout page="projects">
        <section id='projects'>
          <h1>Projects</h1>
          <div className='projectsIntro'>
            <p>Take a look at the Projects I’ve been working on, from building simple to complex pictures using CSS, to seeing what I can make in JavaScript.</p>
            <p>I’m always adding to this so keep coming back to check on what’s new!</p>
          </div>

          <div className='projectSection'>
            <Javascipt/><h2>JavaScript</h2>
            <ProjectList props={!data ? null : data.filter(getJavaScriptProjects)}/>
          </div>

          <div className='projectSection'>
            <Css3/><h2>CSS</h2>
            <div className='projects_container'>
              <ProjectList props={!data ? null : data.filter(getCSSProjects)}/>
            </div>
          </div>
        </section>
      </PageLayout>
  );
}

function getJavaScriptProjects(project) {
  return project.type === 'javascript';
}

function getCSSProjects(project) {
  return project.type === 'css';
}

export default Projects;