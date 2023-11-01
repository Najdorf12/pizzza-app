import deliveryImg from "/delivery-img.png";
import "../pages/styles/contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(27,22,22)"
            fillOpacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,112C672,128,768,160,864,160C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
       
        <div className="delivery">
          <img src={deliveryImg} alt="" />
          <section className="delivery-text">
             <h3>DELIVERY</h3>
            <p><i className='bx bxs-phone'></i> 261409534</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sapiente. </p>
          </section>  
        </div>
      </section>
    </>
  );
};

export default Contact;
