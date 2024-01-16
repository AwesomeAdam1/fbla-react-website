// Client Side
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'
import styles from '../../Pages/Stylesheets/Donate.css'

function SquarePayments() {
    return (
        <form className={styles.container}>
        <PaymentForm
                applicationId="sandbox-sq0idb-9zbmUwLGYo1N_qgKQNqlvw"
                cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                    const response = await fetch("/square_api/pay", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            sourceId: token.token,
                        }),
                    })
                    console.log(await response.json())
                }}
                locationId='LHC2FSQGF4PAA'
            >
            <CreditCard render={div => <div className='CreditCard-submit'></div>}/>
        </PaymentForm>
        </form>
    )
}

export default SquarePayments