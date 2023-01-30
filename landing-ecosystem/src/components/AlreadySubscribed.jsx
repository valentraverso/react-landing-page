export default function AlreadySubscribed(props){
    const name = props.isName;

    return (
        <section className='subscribe-section content-centered'>
            <h2>You already sign {name}!</h2>
            <img id='signPaper' src='./src/images/paper-sign.png' />
        </section>
    )
}