
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "..//assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";



function Images() {
  return (
    
    <div className="container">
      <div className="image-container">
        <img src={img1} alt="Image"></img>
        <p>Relay Race</p>
      </div>
      <div className="image-container">
        <img src={img2} alt="Image"></img>
        <p>Football Game</p>
      </div>
      <div className="image-container">
        <img src={img3} alt="Image"></img>
        <p>Cricket Game</p>
      </div>
      <div className="image-container">
        <img src={img4} alt="Image"></img>
        <p>Shot Put Game</p>
      </div>
      <div className="image-container">
        <img src={img5} alt="Image"></img>
        <p>Long Jump</p>
      </div>
      <div className="image-container">
        <img src={img6} alt="Image"></img>
        <p>Chess Game</p>
      </div>
      <div className="image-container">
        <img src={img7} alt="Image"></img>
        <p>Carrom Game</p>
      </div>
      <div className="image-container">
        <img src={img8} alt="Image"></img>
        <p>Badminton</p>
      </div>
    </div>
  )
}

export default Images