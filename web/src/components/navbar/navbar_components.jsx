import logo from '../../addons/images/icon_logo.png';

const Navbar = () => {
    return(
        <div className="p-3">
            <div className="flex justify-between">
                <div>
                    <ul className="flex flex-row items-center space-x-8">
                        <li>
                            <img src={logo} alt="" className="w-14 h-14 rounded-full"></img>
                        </li>
                        <li>
                            <a href="/home" className="flex flex-row space-x-1 font-bold text-white hover:text-orange-500/95">
                                <span>🏠</span>
                                <span>Accueil</span>
                            </a>
                        </li>
                        <li>
                            <a href="/premium" className="flex flex-row space-x-1 font-bold text-white hover:text-orange-500/95">
                                <span>👑</span>
                                <span>Abonnements</span>
                            </a>
                        </li>
                        <li>
                            <button className='flex flex-row space-x-3 items-center font-bold text-white hover:text-orange-500/95' type="button" data-dropdown-toggle="dropdown">
                                ⚙️ Fonctions
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className='hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4' id='dropdown'>
                                <div className='px-4 py-3'>
                                    <ul className='py-1' aria-labelledby='dorpdown'>
                                        <li>
                                            <a href='/functions/embeds_color' className=''>Couleur d'embeds</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/documentation" className="flex flex-row space-x-1 font-bold text-white hover:text-orange-500/95">
                                <span>📌</span>
                                <span>Documentation</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='order-last p-1.5'>
                    <ul className='flex flex-row space-x-8 items-center'>
                        <li>
                            <a href='https://discord.gg/Q34PNZT9' target='blank' className='flex flex-row space-x-1 font-bold text-white hover:text-orange-500/95'>
                                <span>🆘</span>
                                <span>Support</span>
                            </a>
                        </li>
                        <li>
                            <a href='/contact' className='flex flex-row space-x-1 font-bold text-white hover:text-orange-500/95'>
                                <span>📩</span>
                                <span>Contact</span>
                            </a>
                        </li>
                        <li>
                            <a href='/login' className='hidden border-2 border-orange-500/95 font-bold text-orange-500/95 hover:text-white hover:border-white rounded-md'>
                                <div className='flex flex-row space-x-2 items-center justify-center p-2'>
                                    <span>Connexion</span>
                                </div>
                            </a>
                            <button className='border-2 border-orange-500/95 font-bold text-orange-500/95 hover:text-white hover:border-white rounded-md'>
                                <div className='flex flex-row space-x-2 items-center justify-center p-1.5'>
                                    <img src="https://images-ext-1.discordapp.net/external/ptPZPa05BsnLibs9Vc7oaXgHrJIsJdKDVyMuwS4wSB0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/853261887520505866/f20aae3fb19f7203c235f1cfca8f7796.webp" alt='' className='rounded-full w-10 h-10'></img>
                                    <span>BouBouw</span>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;