const ProfileIcon = ({src, className}) => {
    return(
        <figure className = {"profileIconWrapper " + className}>
            <img className = {"profileIcon"} src = {require(`../../assets/images/${src}`).default}/>
        </figure>
    )
};

export default ProfileIcon;