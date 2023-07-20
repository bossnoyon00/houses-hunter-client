import img1 from '../../../src/assets/sponsors/amazon.png';
import img2 from '../../assets/sponsors/figma.png';
import img3 from '../../assets/sponsors/google.png';
import img4 from '../../assets/sponsors/spotify.png';
import img5 from '../../assets/sponsors/telerama.png';

import img6 from '../../assets/icons/customers.png';
import img7 from '../../assets/icons/email.png';
import img8 from '../../assets/icons/projects.png';
import img9 from '../../assets/icons/ribon.png';

const SponsorDetails = () => {
    // Sponsor Page 
    return (
        <section className="text-black mt-10 my-10 font-bold rounded-lg text-center">
            <div>
                <h2 className="text-sky-400 text-4xl mb-4 text-center">Some Facts</h2>
                <hr className='mb-3' />
                <p className=''>
                    Smile is a language of Love. Smile is to win the hearts. <br /> Smile improves ur personality. So Brush
                    daily. <br />Be joyous dear till we meet again. People seldom notice old <br />clothes if you wear a big
                    smile.
                </p>
            </div>
            <div className="md:flex my-16 justify-evenly items-center">
                <div className='flex animate-bounce border p-5 items-center bg-gray-300   justify-center flex-col'>
                    <img src={img6} alt="" />
                    <h2>54</h2>
                    <p>Awards Winnings</p>
                </div>


                <div className='flex items-center animate-bounce p-5  border  bg-gray-300   justify-center flex-col'>
                    <img src={img7} alt="" />
                    <h2>1458</h2>
                    <p>Project Finished</p>
                </div>


                <div className='flex items-center animate-bounce p-5 border bg-gray-300   justify-center flex-col'>
                    <img src={img8} alt="" />
                    <h2>590</h2>
                    <p>Clients Worked</p>
                </div>


                <div className='flex items-center animate-bounce p-5 border bg-gray-300  justify-center flex-col'>
                    <img src={img9} alt="" />
                    <h2>22578</h2>
                    <p>Email Send</p>
                </div>

            </div>

            <div className="text-center my-5 space-y-6">
                <h2 className='text-4xl text-sky-400'>Our Sponspors</h2>
                <p className='my-6 text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration.</p>
            </div>
            <div className="md:flex mb-10 justify-evenly">
                <div className="spons-img">
                    <img src={img1} alt="" />
                </div>
                <div className="spons-img">
                    <img src={img2} alt="" />
                </div>
                <div className="spons-img">
                    <img src={img3} alt="" />
                </div>
                <div className="spons-img">
                    <img src={img4} alt="" />
                </div>
                <div className="spons-img">
                    <img src={img5} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SponsorDetails;