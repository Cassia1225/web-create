import {useEffect} from "react";

export function CountryCard() {
    useEffect(() => {
        async function getCountry() {
            const response = await fetch(
                "https://restcountries.com/v3.1/name/japan"
            );
        }
    },[])
}