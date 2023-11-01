
function toUpper(msg){
    return msg.toUpperCase(msg);
}

export default function Avatar(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    const style = {
        backgroundColor : "black",
        color : "red",
    }
    return(<div>
        <img src={avatar} descriptin= {description}/>
        <div style= {style}>
            {toUpper(description)}
        </div>
        <div>{false ? toUpper("Helo") : toUpper("World")}</div>
    </div>)
}


