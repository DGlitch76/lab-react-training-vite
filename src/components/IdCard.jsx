
function IdCard(props) {


    return (
        <section className="box-id">
            <div>
                <img className='profile-pic' src={props.id.picture} alt='profilepicture' />
            </div>
            <div className="id-info">
                <span className="firstName"><b>First Name:</b> {props.id.firstName}</span><br></br>
                <span className="lastName"><b>Last Name:</b> {props.id.lastName}</span><br></br>
                <span className="gender"><b>Gender:</b> {props.id.gender}</span><br></br>
                <span className="height"><b>Height:</b> {props.id.height}</span><br></br>
                <span className="birth"><b>Birth:</b> {props.id.birth}</span>
            </div>

        </section>
    )

}

export default IdCard;