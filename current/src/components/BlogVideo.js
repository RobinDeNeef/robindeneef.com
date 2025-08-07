import React from 'react'

export default function BlogMediaVideo({source, type}) {
    return (
        <div className='my-8 flex justify-center'>
            <video width="720" height="480" autoPlay controls muted>
                <source src={source} type={type} />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}