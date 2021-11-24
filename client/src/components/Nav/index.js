import ProfileIcon from "../../components/ProfileIcon";

const Nav = () => {
    return (
        <nav>
            <h2 className = "flex-1">Newtube</h2>
            <input id = "searchbar" className = "flex-3" placeholder = "Search"/>
            <ProfileIcon className = "flex-1" src = {"aardvark.jpg"} />
        </nav>
    )
}

export default Nav;