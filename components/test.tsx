'use client'

import {useEffect} from "react";

const Test = () => {


    useEffect(() => {
        const MainView = document.getElementById("main");
        const ButtonView = document.getElementById("button");

        const handleScroll = (event) => {
            if (MainView.scrollTop <= document.body.clientHeight && event.deltaY > 0) {
                scroll();
            }
        }

        function scroll() {
            const MainView = document.getElementById("main");
                MainView.scrollTo({
                    top: document.body.clientHeight,
                    behavior: "smooth"
                });
        }

        MainView.addEventListener("wheel", handleScroll);
        ButtonView.addEventListener("click", scroll);

        return () => {
            MainView.removeEventListener("wheel", handleScroll);
            ButtonView.removeEventListener("click", scroll);
        };
    }, []);
    return (<></>)

}

export default Test;