import './Form.css'

function Form() {
    let sum = 0;
    let tip = 0;
    let numberOfFriends = 1;

    function log () {
        console.log(sum, tip, numberOfFriends);
    }  

    
    return(
        <div className='wrapper'>
        <section className='form' id="inputForm">
            <section>
                <input type="text" id="sum" className='form__input' 
                onChange={(event) => {sum = Number(event.target.value)}}/>
                <label htmlFor="sum" className='form__label form__label_sum'>Summa</label>
            </section>
            <section>
                <input type="text" id="numberOfFriends" className='form__input' 
                onChange={(event) => {numberOfFriends = Number(event.target.value)}}/>
                <label htmlFor='numberOfFriends' className='form__label form__label_friends'>Antal vänner</label>
            </section>
            <section>
                <input type="text" id="tip" className='form__input' 
                onChange={(event) => {tip = Number(event.target.value)}}/>
                <label htmlFor="tip" className='form__label form__label_tip'>Dricks</label>
            </section>
            <button id="calculateButton" className='form__button'
            onClick={ () => {
                const sumToPay = ((((sum * tip ) + sum)  / numberOfFriends).toFixed(2));
                log ()
                console.log('Varje person ska betala ' + Number(sumToPay) +' kr')
            } }>Räkna</button>
        </section>
        <section className='form hide' id="showSum">
            <article>
                <h2>Varje person ska betala</h2>
                <h3 id="friendSum" className='show-sum'></h3>
            </article>
        </section>
    </div>
    )
}

export default Form 