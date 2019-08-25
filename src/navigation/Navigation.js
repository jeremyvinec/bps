import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import Accueil from '../components/pages/Accueil'
import Societe from '../components/pages/Societe'
import SavoirFaire from '../components/pages/SavoirFaire'
import Services from '../components/pages/Services'
import Contact from '../components/pages/Contact'
import EAE from '../components/pages/EAE'
import EAI from '../components/pages/EAI'
import Synertech from '../components/pages/Synertech'

const Navigation = createSwitchNavigator({
    Accueil: {
        screen: Accueil
    },
    Societe: {
        screen: Societe
    },
    SavoirFaire: {
        screen: SavoirFaire
    },
    Services: {
        screen: Services
    },
    Contact: {
        screen: Contact
    },
    EAE: {
        screen: EAE
    },
    EAI: {
        screen: EAI
    },
    Synertech: {
        screen: Synertech
    }
})

export default createBrowserApp(Navigation)