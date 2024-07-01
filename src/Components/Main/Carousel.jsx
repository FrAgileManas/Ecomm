import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import"./Carousel.css"
function CarouselComponent(){
    return(<>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715515876/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/May/13052024/Desktop/HP_Rotating_TCL_13May24_pi7tql.jpg" className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715257658/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/May/10052024/Desktop/HP_OLCampaign_8May2024_smzduv.jpg" className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715515874/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/May/13052024/Desktop/HP_Rotating_Ref_13May24_svnxhf.jpg" className="d-block" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>);
}
export default CarouselComponent;