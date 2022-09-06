import React from 'react'
import "./Home.css";
import homebanner from './img/homebanner.jpg'
import Product from './Product';
// import Header from './Header';

function Home() {
    return (
        <>
           

            <div className='home'>
                <div className="home__container">
                    <img className='home__image' src={homebanner} alt="" />

                    <div className="home__row">
                        <Product id={1}  title='Mindf**ked : When It’s 4 a.m. and You Can’t Stop Overthinking (Hinglish Edition) Paperback – 7 July 2022' price={500} image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41v-UFY84HL._SX324_BO1,204,203,200_.jpg" rating={5} />
                        <Product id={2} title='boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)' price={500} image="https://m.media-amazon.com/images/I/51xxA+6E+xL._SY450_.jpg
" rating={4} />




                    </div>
                    <div className="home__row">
                        <Product id={3} title='OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)' price={450} image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SX425_.jpg
" rating={4} />
                        <Product id={4} title='Dell New Inspiron 7425 2in1 Laptop, AMD Ryzen7-5825U, Win11+MSO 21, 16 GB GDDR4, 512GB SSD, 14" (35.56Cms) FHD+ Touch 250 nits, Active Pen, Backlit KB + FPR (D560733WIN9P, 1.7Kgs)' price={300} image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/615Lqd3OsrL._SX679_.jpg" rating={2} />
                        <Product id={5} title='Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)' price={250} image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61WUqJd4dfS._SX679_.jpg
" rating={1} />

                    </div>
                    <div className="home__row">
                        <Product id={6} title='Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA43AUE65AKXXL (Black)' price={900} image="	https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71B7sRIydwL._SX679_.jpg
" rating={5} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home