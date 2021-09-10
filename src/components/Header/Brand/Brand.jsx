import classes from "../Header.module.css";

const Brand = ({toggleNavbar}) => 
  <div className={classes.brand}>
    <div className={classes.toggle} onClick={toggleNavbar}>
      <div></div><div></div><div></div>
    </div>
    <span>Brand Name</span>
  </div>

export default Brand;