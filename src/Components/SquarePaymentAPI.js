import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'
import styles from '../pages/stylesheets/Donate.css'

function SquarePayments(props) {
    return (
        <div className={styles.container} style={{display: props.displayStatus}}>
            <PaymentForm
                applicationId="sandbox-sq0idb-9zbmUwLGYo1N_qgKQNqlvw"
                cardTokenizeResponseReceived={(token, verifiedBuyer) => {
                console.log('token:', token);
                console.log('verifiedBuyer:', verifiedBuyer);
                }}
                locationId='LHC2FSQGF4PAA'
            >
                <CreditCard />
            </PaymentForm>
        </div>
    )
}

export default SquarePayments