import React from 'react'

const RoomHeader = () => {
    return (
        <div className='container mx-auto px-4 pb-10'>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
                <span className="text-prime"> Room & Suites </span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Our Rooms
                </span>
            </h1>
            <div className='flex justify-center'>
                <p className='text-prime font-medium lg:text-xl text-lg max-w-4xl text-center'>
                    Risus consequat donec vel mi diam lobortis maximus laoreet nisi. Fames torquent neque duis pharetra urna per facilisis nunc cras blandit.
                </p>
            </div>
        </div>
    )
}

export default RoomHeader