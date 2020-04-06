import React, { Component } from 'react';
import spaceNerdPic from './images/space-nerd-pic.png';
import socialistPic from './images/socialist.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import { SRLWrapper } from 'simple-react-lightbox';



class Projects extends Component {

   


    render() { 
        return ( 
<React.Fragment>
    <div className="inline-display">
        <SRLWrapper>
        <img src= {spaceNerdPic} alt="space-nerd" className="img-thumbnail float-left mr-4 picture" ref={React.createRef()} />
        <img src= {socialistPic} alt="Socialist" className="img-thumbnail picture" ref={React.createRef()} />
        </SRLWrapper>
        </div>
        
</React.Fragment>
         );
    }
}
 
export default Projects;