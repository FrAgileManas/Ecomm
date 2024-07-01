import { BsCart2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import "./Header.css";

function Header(){
return(
<>
<div className="header" style={{"position":"sticky","top":"0"}}>
<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" alt="Logo" className="logo"/>
<div className="menuIcon">
<IoMenu color="white" size={30} />
<span style={{color:"white"}}>Menu</span>
</div>
<input type="text" id="search" placeholder="Kya chaiye "/>
<div className="icon">
<span className="location">
<FaLocationDot color="white" size={20} />
<span className="city">Gurugram,122001</span>
</span>
<FaUser color="white"  size={20} />
<div className="cart">
<BsCart2 color="white" size={20} style={{"margin-right":"0%"}}/>
<span className="count">6</span>
</div>
</div>
</div>
</>
);
}
export default Header