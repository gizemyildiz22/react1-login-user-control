import { Link } from "react-router-dom";
function Menu() {
return (
<div>
<Link to="/"><b>Home</b></Link>&nbsp;
<Link to="/about"><b>About</b></Link>&nbsp;
<Link to="/contact"><b>Contact</b></Link>
</div>
);
}
export default Menu;