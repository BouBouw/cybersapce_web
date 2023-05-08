import Navbar from "../../components/navbar/navbar_components";
import Footer from "../../components/footer/footer_components";

import TopAddon from "../../components/addons/top_addons_components";
import BotAddons from "../../components/addons/bot_addons_components";

import Page from "../../components/home/home_components";
import Features from "../../components/home/features_components";
import Stats from "../../components/home/stats_components";

const Home = () => {
    return(
        <div className="">
            <Navbar/>
            <div className="">
                <Page/>
                <div className="">
                    <TopAddon/>
                    <Features/>
                    <BotAddons/>
                </div>
                <Stats/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;