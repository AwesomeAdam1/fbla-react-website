import { useEffect, useState } from "react";
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from '@firebase/firestore';
import styles from './stylesheets/Donate.css'

// Component Imports
import SquarePayments from '../components/SquarePaymentAPI'

function Donate() {
    const[donors, setDonors] = useState([])
    const[name, setName] = useState("")
    const[donationAmount, setDonationAmount] = useState(0)

    const [displayStatus, setDisplayStatus] = useState('none')
    
    function handleClick() {
      setDisplayStatus(prevStatus => (prevStatus === 'none' ? 'block' : 'none'))
    }

    const donationRef = collection(db, "donation")

    const createDonor = async () => {
        await addDoc(donationRef, { Name: name, donationAmount: donationAmount })
        window.location.reload()

        handleClick()
    }

    // After Donation Button Clicked...
    useEffect(() => {
        const getDonationData = async () => {
          const data = await getDocs(donationRef)
          setDonors(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
        }
    
        getDonationData()
    }, [])
  return (
    <>
      <div className="text-black">
        <h1 className=" w-screen text-center mt-8 text-4xl font-bold">
          Donate to Walton Habitat for Humanity
        </h1>
        <p className="w-screen text-center mt-5">
          Insert your name and donation amount.
        </p>
        <div className="text-center mt-16">
          <div className="input-container">
            <span>Name : </span>
            <input
            className="mx-4 text-white"
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            />
          </div>
          <div className="input-container">
            <span>Donation Amount : </span>
            <input
              className="mx-4 text-white"
              type="text"
              placeholder="0"
              onChange={(event) => {
                setDonationAmount(event.target.value);
              }}
            />
          </div>
          <br />
          <button
            onClick={createDonor}
            className="bg-slate-700 m-4 p-2 w-20 rounded-md"
          >
            Donate
          </button>
        </div>
      </div>
      <div className="text-black mt-20 mx-6">
        <h3 className='text-xl'>
          Recent Donations:
        </h3>
        <div className='grid grid-cols-2'>
            {donors.map(donor => {
                return <div className='m-4 bg-gray-300 w-1/4 rounded-md p-2 shadow-md'>
                <p className='w-auto text-center'>{donor.Name}</p>
                <p className='w-auto text-center'>${donor.donationAmount}</p>
            </div>
            })}
        </div>
      </div>
      <SquarePayments displayStatus={displayStatus}/>
    </>
  );
}

export default Donate;
