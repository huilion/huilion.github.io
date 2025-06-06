import { Card, Button,} from 'react-bootstrap';
import './Components.css'

const Projects = () => {
    return(
      <div id="projects">
      <h3>Projects</h3>
      <div id="projects-container">
        
         <Card id="project-card" style={{ width: '23rem' }}>
      <Card.Img variant="top" src="src\assets\inkwell.png" />
      <Card.Body>
        <Card.Title>Inkwell</Card.Title>
        <Card.Text>
          Blogging-like website that has a feed, login system, and ability to like posts
        </Card.Text>
        <Button variant="primary" href="https://project3-khouw-6b0b3a3a19a1.herokuapp.com/" target="_blank">Check it out</Button>
      </Card.Body>
    </Card>
      <Card id="project-card" style={{ width: '23rem' }}>
      <Card.Img variant="top" src="src\assets\ischool.png" />
      <Card.Body>
        <Card.Title>iSchool Website</Card.Title>
        <Card.Text>
          Consumed an API about RIT's iSchool department and utilized React and Vite
        </Card.Text>
        <Button variant="primary" href="https://people.rit.edu/ejk2827/340/p2/" target="_blank">Check it out</Button>
      </Card.Body>
    </Card>
          <Card id="project-card" style={{ width: '23rem' }}>
      <Card.Img variant="top" src="src\assets\fishybusiness.png" />
      <Card.Body>
        <Card.Title>Fishy Business</Card.Title>
        <Card.Text>
          Casual landlord simulator, most assets and logo design was done by me!
        </Card.Text>
        <Button variant="primary" href="https://macarenzle.itch.io/fishy-business" target="_blank">Check it out</Button>
      </Card.Body>
    </Card>
        </div>
        </div>
    );
}

export default Projects;