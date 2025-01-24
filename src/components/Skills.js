import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/image.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>Web Development</h5>
                                <p>HTML, CSS, JavaScript, React, Bootstrap, and Firebase </p>
                            </div>
                            <div className="item">
                                <h5> Programming Languages</h5>
                                <p>Python, C++, C, Java (basics), SQL(basics).</p>
                            </div>
                            <div className="item">
                                <h5>Tools & FrameworkS</h5>
                                <p>
                                Flask, spaCy, TensorFlow,OpenCV and MediaPipe.
                                </p>
                            </div>
                            <div className="item">
                                <h5> Other Skills</h5>
                                <p>Problem-solving, Analytical Thinking, Team Collaboration</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
