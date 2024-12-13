import image1 from "../assets/images/industry-one.jpg";
import image2 from "../assets/images/industry-two.jpg";
import image3 from "../assets/images/industry-three.jpg";

const Industry = () => {
  return (
    <>
      <p className="industry-text">
        An Industry leader form the start <br />
        when it comes to forex trading
      </p>
      <div className="indusry-images-container">
        <div className="image1">
          <p className="image-text">
            Get a complete and accurate view of your trading skills
          </p>
          <img src={image1} alt="" className="image-one" />
        </div>
        <div className="second_images">
          <img src={image2} alt="" className="second-images" />
          <img src={image3} alt="" className="second-images" />
        </div>
      </div>
    </>
  );
};

export default Industry;
