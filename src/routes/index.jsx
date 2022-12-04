import {useState} from 'react';
import AllPages from "./allPages";
import HomePage from './homePage';
import changeNavigationService from '../services/changeNavigationService';

export default function Routes(){
    const [showHome, setShowHome] = useState("false");
    changeNavigationService.checkShowHome(1)
        .then((showHome) => {
            setShowHome(showHome.showHome);
        })
        .catch((err) => console.log(err));
        
    return <>{showHome === "true" ? <HomePage/> : <AllPages/>}</>;
}