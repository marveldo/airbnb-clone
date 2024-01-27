import star from "../images/Star 1.png"

const CardSection = (props) =>{
    let Divtext
    if (props.item.openspots == 0){
        Divtext = "SOLD OUT"
    }
    else if(props.item.location == 'online'){
        Divtext = "ONLINE"
    }
    else{
        Divtext =''
    }
    return (
        <div className="card" style={{display: props.item.img ? "block": "none"}}>
            <div className="class-status" style={{display: props.item.openspots == 0 || props.item.location == 'online'  ? "block" : "none"}}>{Divtext}</div>
            <img src={props.item.img} alt="pic" className="Main-img"  />
            <div style={{marginBottom:"0px"}}>
                <img src={star} alt="pic" style={{marginRight:"3px", width:"15px"}}/>
                <p style={{marginRight:"3px",fontSize:"12px"}}>{props.item.rating}</p>
                <span style={{marginRight:"3px",fontWeight:"300", color: "#918E9B",fontSize:"12px"}}>({props.item.people}).{props.item.location}</span>
            </div>
            <p style={{marginTop:"0px",fontSize:"12px"}}>{props.item.paragragh}</p>
           <p style={{marginTop:"0px",fontSize:"12px"}}> <span style={{fontWeight:"600"}}>From ${props.item.price}</span>/ per person</p>
 
        </div>
    )
}


export default CardSection