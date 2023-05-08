import logo from '../../addons/images/icon_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return(
        <div className="text-xl">
            <div className="mt-48 flex flex-col space-y-7 items-center justify-center">
                <div className='flex rounded-full'>
                    <img src={logo} alt='' className='w-64 h-64 rounded-full p-2'></img>
                </div>
                <span className='font-bold text-white text-2xl'>Aliaxy Bot</span>
                <p className='text-gray-300 text-lg text-center w-2/4'>
                    Simple Discord Bot avec multi-fonctions pour améliorer et booster votre serveur Discord
                    Comprend également la modération automatique, l’administration, les critiques, les billets et bien plus encore!
                </p>
                <ul className='flex flex-row space-x-5 items-center justify-center'>
                    <li>
                        <a href='/#' className='text-white font-bold bg-orange-500/95 hover:bg-orange-400/95 flex flex-row space-x-2 items-center justify-center rounded-md h-14 w-72 p-5'>
                            <FontAwesomeIcon icon={faPlus}/>
                            <span className='text-white uppercase font-bold'>Inviter le Bot</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://discord.gg/Q34PNZT9' target='blank' className='text-white font-bold bg-gray-700/95 hover:bg-gray-600/95 flex flex-row space-x-2 items-center justify-center rounded-md h-14 w-72 p-5'>
                            <FontAwesomeIcon icon={faDiscord}/>
                            <span className='uppercase'>Serveur Support</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;