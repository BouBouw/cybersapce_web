import embeds_color from '../../addons/features/embeds_color.png';
import rules from '../../addons/features/rules.png';
import counters from '../../addons/features/counters.png';
import verified_accounts from '../../addons/features/verified_account.png';
import rewinds from '../../addons/features/rewinds.png';

const Features = () => {
    return(
        <div className="features">
            <div className="flex flex-col space-y-10 items-center justify-center">
                <span className="text-white font-bold text-2xl">Fonctionnalités</span>
                <div className="">
                    <ul className="flex flex-col items-center justify-center space-y-10">
                        <li>
                            <div className="card rounded-lg">
                                <div className="p-10 flex flex-row space-x-24 items-center justify-center">
                                    <img src={embeds_color} alt="" className="w-64 h-64 rounded-md"></img>
                                    <div className="flex flex-col space-y-3 items-center justify-center">
                                        <p className="text-orange-500/95 font-bold">Couleur d'embed</p>
                                        <p className='text-white'>Description Functions</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card rounded-lg">
                                <div className="p-10 flex flex-row space-x-24 items-center justify-center">
                                    <div className="flex flex-col space-y-3 items-center justify-center">
                                        <p className="text-orange-500/95 font-bold">Règlement</p>
                                        <p className='text-white'>Description Functions</p>
                                    </div>
                                    <img src={rules} alt="" className="w-64 h-64 rounded-md"></img>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card rounded-lg">
                                <div className="p-10 flex flex-row space-x-24 items-center justify-center">
                                    <img src={counters} alt="" className="w-64 h-64 rounded-md"></img>
                                    <div className="flex flex-col space-y-3 items-center justify-center">
                                        <p className="text-orange-500/95 font-bold">Compteurs de membres</p>
                                        <p className='text-white'>Description Functions</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card rounded-lg">
                                <div className="p-10 flex flex-row space-x-24 items-center justify-center">
                                    <div className="flex flex-col space-y-3 items-center justify-center">
                                        <p className="text-orange-500/95 font-bold">Vérification de comptes</p>
                                        <p className='text-white'>Description Functions</p>
                                    </div>
                                    <img src={verified_accounts} alt="" className="w-64 h-64 rounded-md"></img>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card rounded-lg">
                                <div className="p-10 flex flex-row space-x-24 items-center justify-center">
                                    <img src={rewinds} alt="" className="w-64 h-64 rounded-md"></img>
                                    <div className="flex flex-col space-y-3 items-center justify-center">
                                        <p className="text-orange-500/95 font-bold">Avis</p>
                                        <p className='text-white'>Description Functions</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            Modération
                        </li>
                        <li>
                            Ticket
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features;