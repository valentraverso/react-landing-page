export default function Subscribe(){
    return (
        <section className='subscribe-section content-centered' id='sign'>
            <h2>Sign to save an animal!</h2>
            <form className='form-save-animal'>
                <input type='text' placeholder='Your Name' />
                <br/>
                <button>Sign</button>
            </form>
            <img id='signPaper' src='./src/images/paper-sign.png' />
        </section>
    )
}