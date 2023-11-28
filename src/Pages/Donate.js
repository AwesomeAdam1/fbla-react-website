import { useEffect, useState } from "react";
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from '@firebase/firestore';

function Donate() {
    const[donors, setDonors] = useState([])
    const[name, setName] = useState("")
    const[donationAmount, setDonationAmount] = useState(0)

    const donationRef = collection(db, "donation")

    const createDonor = async () => {
        await addDoc(donationRef, { Name: name, donationAmount: donationAmount })
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
        <h1 className=" w-screen text-center mt-8 text-4xl font-bold">
          Donate to Walton Habitat for Humanity
        </h1>
        <p className="w-screen text-center mt-5">
          Insert your name and donation amount.
        </p>
        <div className="text-center mt-16">
          <span>Name : </span>
          <input
            className="mx-4 text-black"
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <span>Donation Amount : </span>
          <input
            className="mx-4 text-black"
            type="text"
            placeholder="0"
            onChange={(event) => {
              setDonationAmount(event.target.value);
            }}
          />
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
          {users.map(user => {
              return <div className='m-4 bg-gray-300 w-1/4 rounded-md p-2 shadow-md'>
              <p className='w-auto text-center'>{user.Name}</p>
              <p className='w-auto text-center'>${user.age}</p>
              {/* <button onClick={() => { increaseAge(user.id, user.age) }}>Increase Age</button>
              <button onClick={() => { deleteUser(user.id) }}>Delete User</button> */}
          </div>
          })}
      </div>
</div>
    </>
  );
}

export default Donate;
