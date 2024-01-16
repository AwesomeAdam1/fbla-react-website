import { useEffect, useState } from "react";
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from '@firebase/firestore';
import styles from './Stylesheets/Donate.css'

// Component Imports
import SquarePayments from '../Components/square_api/SquarePaymentAPI'

function Donate() {
    const[donors, setDonors] = useState([])
    const[name, setName] = useState("")
    const[donationAmount, setDonationAmount] = useState(0)

    const donationRef = collection(db, "donation")

    const createDonor = async () => {
        await addDoc(donationRef, { name: name, donationAmount: donationAmount })
        window.location.reload()
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
        <h1 className=" w-screen text-center mt-8 text-5xl font-bold">
          Donate to Walton Habitat for Humanity
        </h1>
        <p className="w-screen text-center mt-5 text-xl">
          Insert your name and donation amount.
        </p>
        <div className="text-center mt-16 inputs-container">
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
              type="number"
              placeholder="0"
              onChange={(event) => {
                setDonationAmount(event.target.value);
              }}
            />
          </div>
          <br />
          <div className="SquarePayments"><SquarePayments /></div>
          <button
            onClick={createDonor}
            className="bg-slate-700 m-4 p-2 w-20 rounded-md donateButton"
          >Donate</button>
        </div>
      </div>
      <div className="text-black mt-20 mx-6 recentDonations">
        <h3 className='text-xl font-bold m-5'>
          Recent Donations
        </h3>
        <div className='grid grid-cols-2'>
            {donors.map(donor => {
                return <div className='m-4 bg-gray-300 rounded-md p-2 shadow-md donor'>
                <p className='w-auto text-center'>{donor.name}</p>
                <p className='w-auto text-center'>${donor.donationAmount}</p>
            </div>
            })}
        </div>
      </div>
    </>
  );
}

export default Donate;
