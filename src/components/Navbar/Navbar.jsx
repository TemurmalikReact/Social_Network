import classes from "./Navbar.module.css"
import NavItem from "./NavItem/NavItem"
import { MessagesSvg, MusicsSvg, NewsSvg, ProfileSvg, SettingsSvg } from "./Svg/Svg"

const Navbar = ({isClosed}) => {
  const navItems = [
    { name: "profile", svg: <ProfileSvg /> },
    { name: "message", svg: <MessagesSvg /> },
    { name: "news", svg: <NewsSvg /> },
    { name: "musics", svg: <MusicsSvg /> },
    { name: "settings", svg: <SettingsSvg /> },
    { name: "users", svg: <SettingsSvg /> },
  ]
  
  const renderNavItems = () => navItems.map(n => 
    <NavItem name={n.name} svg={n.svg} key={n.name} /> )

  return (
    <nav className={`${classes.nav} ${isClosed && classes.active}`}>
      { renderNavItems() }
      <span> Footer Brand Name </span>
    </nav> 
  )
}

export default Navbar;
