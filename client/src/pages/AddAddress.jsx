import React from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react'

  const InputField = ({type, placeholder, name, handleChange, address}) => (
        <input className='w-full px-2 py-2.5 border border-gray-500/300 rounded outline-none text-gray-500 focus:border-primary transition' 
        type = {type} 
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value= {address[name]} required/>
    )

const AddAddress = () => {

    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    })

    const onsubmitHandler = async (e) => {
        e.preventDefault();
    }

    const handleChange = (e)=> {
        const {name, value} = e.target;

        setAddress((prevAddAddress)=> ({
            ...prevAddAddress,
            [name]: value,
        }))
    }


  return (
    <div className='mt-16 mb-16'>
        <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-primary'>Address</span></p>
        <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
            <div className='flex-1 max-w-md'>
                <form onSubmit={onsubmitHandler} className='space-y-3 mt-6 text-sm'>
                    <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange={handleChange} name="firstName" placeholder="firstName" type="text" address={address} />
                        <InputField handleChange={handleChange} name="lastName" placeholder="lastName" type="text" address={address} />
                    </div>
                    <InputField handleChange={handleChange} name="email" placeholder="Email" type="email" address={address}/>
                    <InputField handleChange={handleChange} name="street" placeholder="Street" type="text" address={address}/>

                    <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} name="city" placeholder="City" type="text" address={address}/>
                    <InputField handleChange={handleChange} name="state" placeholder="State" type="text" address={address}/>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} name="zipcode" placeholder="zip Code" type="number" address={address}/>
                    <InputField handleChange={handleChange} name="country" placeholder="Country" type="text" address={address}/>
                    </div>

                    <InputField handleChange={handleChange} name="phonenumber" placeholder="Phone Number" type="text" address={address}/>

                    <button className='w-full mt-6 text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase bg-primary'>Add Address</button>
                </form>
            </div>
            <img src={assets.add_address_iamge} alt=""/>
        </div>
    </div>
  )
}

export default AddAddress