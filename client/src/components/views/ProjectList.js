import React from "react";
import ProjectTile from "../ProjectTile";
import Javascipt from '../svgs/Javascript';
import Css3 from '../svgs/Css3';

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }

    getIcon(type) {
        switch (type) {
            case 'javascript':
                return <Javascipt/>;
            case 'css':
                return <Css3/>;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className='projects_container'>
                {!this.props.props ? "Loading..." : this.props.props.map((project) => (
                    <ProjectTile title={project.title} icon={this.getIcon(project.type)} date={project.date} link={project.link}/>
                ))}
            </div>
        );
    }
}

export default ProjectList;
