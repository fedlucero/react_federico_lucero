export default function NavLink(props) {

    function handleClick(){
        console.log("click");
    }
    return (
        <li onClick={handleClick}>{props.title}</li>
    )
}

