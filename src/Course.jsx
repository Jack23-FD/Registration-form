function Course(props){
    if(props.show){
    return(
        <div className="card">
            <img src={props.image} alt={props.course} />
            <h3>{props.course}</h3>
            <p>{props.description}</p>
        </div>
    );
}
}
export default Course;