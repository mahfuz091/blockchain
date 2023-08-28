
import './SearchBox.css'
import ParticlesWrapper from '../Particles/ParticlesWrapper';

const SearchBox = () => {
    return (
        <div className='search'>
            <ParticlesWrapper></ParticlesWrapper>
            <div className="searchBox">
                <div className='gradient-border'>
                    <input type="text" placeholder='Search by Address / Txn Hash / ENS.....' name="" id="" />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;