function Greetings(props) {

    let greet;
    if (props.lang === 'de') {
        greet = 'Hallo'
    } else if (props.lang === 'fr') {
        greet = 'Bonjur'
    } else if (props.lang === 'es') {
        greet = 'Hola'
    }

    return (
        <div className="box">

            {/* need to review/recap with props.children */}
            <p>{greet} {props.children}</p>
        </div>

    )
}

export default Greetings;