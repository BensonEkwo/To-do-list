
const Vlog=({vlog,title,exp})=>{
    return(
        <div className="myVlog">
            <h2>Day: {title} </h2>
            <p>{vlog}</p>
            <p>{exp}</p>
        </div>
    )
}
export default Vlog;