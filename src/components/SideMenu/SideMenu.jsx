import "./SideMenu.css"
import { sideMenuData } from "./sideMenuData.js"
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-menu padding2 m">
        <div className="flexCol gap h100">
            {sideMenuData.map(item => (
                <Link to={item.link} className="cursor a" key={item.title}>{item.title}</Link>
            ))}
            <span className="log-out h100 flex s"><span className="cursor"><CiLogout /></span>Log-out</span>
        </div>
    </div>
  )
}

export default SideMenu