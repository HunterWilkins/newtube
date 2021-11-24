const ProfileIcon = ({src, className}) => {
    return(
        <figure className = {"profileIconWrapper " + className}>
            <img className = {"profileIcon"} src = {require(`../../images/${src}`).default}/>
        </figure>
    )
};

export default ProfileIcon;