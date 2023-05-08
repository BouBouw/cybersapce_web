import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faUser, faSignal, faTerminal } from '@fortawesome/free-solid-svg-icons';

const Stats = () => {
    return(
        <div className="text-xl">
            <ul className="flex flex-row space-x-24 items-center justify-center">
                <li>
                    <div className="flex flex-col space-y-2 items-center justify-center">
                        <span className="text-orange-500/95 font-bold">0</span>
                        <span className="flex flex-row space-x-2 items-center justify-center text-white">
                            <FontAwesomeIcon icon={ faServer } />
                            <p>Serveurs</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col space-y-2 items-center justify-center">
                        <span className="text-orange-500/95 font-bold">0</span>
                        <span className="flex flex-row space-x-2 items-center justify-center text-white">
                            <FontAwesomeIcon icon={ faUser } />
                            <p>Utilisateurs</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col space-y-2 items-center justify-center">
                        <span className="text-orange-500/95 font-bold">0</span>
                        <span className="flex flex-row space-x-2 items-center justify-center text-white">
                            <FontAwesomeIcon icon={ faSignal } />
                            <p>Latence</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col space-y-2 items-center justify-center">
                        <span className="text-orange-500/95 font-bold">0</span>
                        <span className="flex flex-row space-x-2 items-center justify-center text-white">
                            <FontAwesomeIcon icon={ faTerminal } />
                            <p>Commandes</p>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Stats;