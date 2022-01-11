import './intro.css'
import Bit from '../../img/bit2.jpg'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className='i-left-wrapper'>
                    <h2 className='i-intro1'>Hello, welcome to my store</h2>
                    <h1 className='i-intro'>Navarro </h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web3.0</div>
                            <div className='i-title-item'>Metaverse</div>
                            <div className='i-title-item'>Decentralized</div>
                            <div className='i-title-item'>BlockChain</div>
                       </div>
                    </div>
                    <p className='i-desc'>
                        "I believe there’s always opportunity uncovered in data and a great team of specialist to create a new vision for the future."
                    </p>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={Bit} alt='' className='i-img' />
            </div>
        </div>
    );
};

export default Intro;