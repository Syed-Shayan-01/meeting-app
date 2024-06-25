'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const HomePage = () => {
    const [roomID, setroomID] = useState();
    const router = useRouter();
    const handleSubmit = () => {
        if (roomID === process.env.SECRETCODE) {
            router.push(`/room/${roomID}`);
        }else{
            alert("Enter the correct Key!")
            console.log(process.env.SECRET_CODE)
        }
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='flex flex-col items-center'>
                <input
                    type="text"
                    className='border-2 border-blue-600 p-2 rounded-lg mb-4 w-64 sm:w-80 md:w-96 focus:outline-none focus:border-blue-700'
                    value={roomID}
                    onChange={(e) => setroomID(e.target.value)}
                    placeholder="Enter Room ID"
                />
                <button
                    onClick={handleSubmit}
                    className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none'
                >
                    Join the Room
                </button>
            </div>
        </div>
    )
}

export default HomePage