import Carousel from "react-bootstrap/Carousel";
import logo from "../../assets/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";
import Image1 from "../../assets/image-k-1.jpg";
import Image2 from "../../assets/image-k-2.jpg";
import Image3 from "../../assets/image-k-3.jpg";

function Slider1() {
  return (
    <div className="slide">
      <Carousel controls={false} className="bg-color">
        <Carousel.Item>
          <img className="w-40" src={Image1} alt="First slide" />
          <Carousel.Caption>
            {/* <button className='yellow-button'>Donate Now</button> */}
            <h3>Educate a Child. Empower a Society</h3>
            <p>Young readers are future leaders!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-40" src={Image3} alt="Second slide" />

          <Carousel.Caption>
            <h3>Towards an educated India</h3>
            <p>
              Dedicated to all-round development of children with academics,
              sports, and culture.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-40" src={Image2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Educate and Empower Young Girls and Women</h3>
            <p>
              The progress of a community is measured by the degree of progress
              of both men and women.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider1;
