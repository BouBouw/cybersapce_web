import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return(
        <div className="">
           <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg"
				class="transition duration-300 ease-in-out delay-150">
				<path
					d="M 0,400 C 0,400 0,133 0,133 C 36.04891218811791,115.00993986480586 72.09782437623582,97.0198797296117 110,94 C 147.90217562376418,90.9801202703883 187.6576146831746,102.93042094635908 215,120 C 242.3423853168254,137.06957905364092 257.27171689106586,159.25843648495203 293,150 C 328.72828310893414,140.74156351504797 385.2555177525618,100.03583311383281 422,95 C 458.7444822474382,89.96416688616719 475.70621209868716,120.59823105971671 502,122 C 528.2937879013128,123.40176894028329 563.9196338526899,95.5712426473003 602,101 C 640.0803661473101,106.4287573526997 680.6152524905531,145.11679835108208 715,153 C 749.3847475094469,160.88320164891792 777.6193561850977,137.9615639483713 816,138 C 854.3806438149023,138.0384360516287 902.907322769056,161.0369458554327 940,156 C 977.092677230944,150.9630541445673 1002.7513527386784,117.89065262989786 1031,121 C 1059.2486472613216,124.10934737010214 1090.0872662762304,163.40044362497582 1126,161 C 1161.9127337237696,158.59955637502418 1202.8995821563994,114.50757287019881 1235,107 C 1267.1004178436006,99.49242712980119 1290.3144050981716,128.56926489422892 1323,139 C 1355.6855949018284,149.43073510577108 1397.842797450914,141.21536755288554 1440,133 C 1440,133 1440,400 1440,400 Z"
					stroke="none" stroke-width="0" fill="#282d32" fill-opacity="0.53"
					class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
				<path
					d="M 0,400 C 0,400 0,266 0,266 C 35.31654568815357,265.9878193221597 70.63309137630714,265.97563864431936 102,264 C 133.36690862369286,262.02436135568064 160.78418018292507,258.08526474488224 191,263 C 221.21581981707493,267.91473525511776 254.23018789199244,281.68330237615163 295,271 C 335.76981210800756,260.31669762384837 384.2950682491052,225.18152575051127 421,234 C 457.7049317508948,242.81847424948873 482.5895391115864,295.5905946218034 513,304 C 543.4104608884136,312.4094053781966 579.3467753045493,276.456095762275 611,261 C 642.6532246954507,245.543904237725 670.0233596702165,250.58502232909655 706,245 C 741.9766403297835,239.41497767090345 786.559786014585,223.20381492133882 819,217 C 851.440213985415,210.79618507866118 871.7374962714434,214.599717985548 908,242 C 944.2625037285566,269.400282014452 996.4902288996407,320.39731313646917 1040,313 C 1083.5097711003593,305.60268686353083 1118.3015881299932,239.81102946857524 1148,225 C 1177.6984118700068,210.18897053142476 1202.3034185803867,246.3585689892297 1235,259 C 1267.6965814196133,271.6414310107703 1308.484737548461,260.75469457450583 1344,258 C 1379.515262451539,255.24530542549417 1409.7576312257695,260.6226527127471 1440,266 C 1440,266 1440,400 1440,400 Z"
					stroke="none" stroke-width="0" fill="#282d32" fill-opacity="1"
					class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
			</svg>
            <div className="footer">
                <div className="">
                    <ul className="flex flex-row space-x-64 items-center justify-center">
                        <li>
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <span className="text-white font-bold">Services :</span>
                                </li>
                                <li>
                                    <a href="/tos" className="text-gray-400 hover:text-gray-300">Termes & Conditions [TOS]</a>
                                </li>
                                <li>
                                    <a href="/tos" className="text-gray-400 hover:text-gray-300">Politique de confidentialitée</a>
                                </li>
                                <li>
                                    <a href="/tos" className="text-gray-400 hover:text-gray-300">Politique de remboursement</a>
                                </li>
                                <li>
                                    <a href="/tos" className="text-gray-400 hover:text-gray-300">ANPC</a>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-64 p-5">
                            <ul className="flex flex-col space-y-5 items-center justify-center">
                                <li>
                                    <ul className="flex flex-row space-x-5 items-center justify-center">
                                        <li>
                                            <a href="/youtube" className="flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:border-orange-500/95 hover:text-orange-500/95 w-12 h-12">
                                                <FontAwesomeIcon icon={ faYoutube }/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://discord.gg/Q34PNZT9' target='blank' className="flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:border-orange-500/95 hover:text-orange-500/95 w-12 h-12">
                                                <FontAwesomeIcon icon={ faDiscord }/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact" className="flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:border-orange-500/95 hover:text-orange-500/95 w-12 h-12">
                                                <FontAwesomeIcon icon={ faEnvelope }/>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="text-gray-500">Arobase © | Tous droits réservés | 2023</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <span className="text-white font-bold">Contact :</span>
                                </li>
                                <li>
                                    <a href="/tos" className="text-gray-400 hover:text-gray-300">ASTELIOS SRL</a>
                                </li>
                                <li>
                                    <a href="/tos" className="text-gray-400 hover:text-gray-300">CUI: 44585101</a>
                                </li>
                                <li>
                                    <a href="/tos" className="text-gray-400 hover:text-gray-300">NR : J24/1193/2021</a>
                                </li>
                                <li>
                                    <a href="/tos" className="text-gray-400 hover:text-gray-300">Adresse : BAIA MARE | BD. REPUBLICII</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;