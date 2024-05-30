import { useState } from 'react';
import Header from './header';
import ScoreImage from './scoreImage';
import EventHandler from './eventHandler';

const Rps = () => {

    const [playerImage, setPlayerImage] = useState('');
    const [SystemImage, setSystemImage] = useState('');
    const trigger = Math.floor(Math.random() * 3) + 1;

    const changeImage = (player, system) => {
        setPlayerImage(player);
        setSystemImage(system);
        console.log('Player and System Image Got Changed 🎉');
    }

    return (
        <div className="container py-4 text-center">
            {/* <!-- Header --> */}
            <Header />

            {/* <!-- Score and Image --> */}
            <ScoreImage
                player={playerImage}
                system={SystemImage}
            />

            {/* <!-- Buttons --> */}
            <EventHandler
                changeImage={changeImage}
                trigger={trigger}
            />
        </div>
    )
}

export default Rps;