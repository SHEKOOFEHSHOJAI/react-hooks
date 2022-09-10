import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
function Card() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">

                        <Carditem
                            src="image/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazone jangel"
                            label='Adventure'
                            path='/services'
                        />

                        <Carditem
                            src='image/img-2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Carditem
                            src='image/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <Carditem
                            src='image/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <Carditem
                            src='image/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card