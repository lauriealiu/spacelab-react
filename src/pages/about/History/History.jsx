import { React, useState, useEffect } from "react";
import { newAboutHistoryArray } from "../aboutHelper";
import polygon1 from '../../../assets/aboutAssets/polygon1.svg';
import polygon2 from '../../../assets/aboutAssets/polygon2.svg';
import './History.scss';

export default function History() {
    const [itemIndex, setItemIndex] = useState(0)
    const [historyItem, setHistoryItem] = useState(newAboutHistoryArray[itemIndex])
    const [showClass, setShowClass] = useState(false);

    useEffect(() => {setHistoryItem(newAboutHistoryArray[itemIndex])}, [itemIndex])

    function scrollDown() {
        setShowClass(true);
        console.log(showClass)
        setTimeout(() => {
            setShowClass(false);
          }, 1000)
    }

    function scrollUp() {
        console.log('scroll up')
    }

    function handleCarouselUp() {
        if (itemIndex === 0) {
            setItemIndex(newAboutHistoryArray.length - 1)
        } else {
            setItemIndex(itemIndex - 1)
            scrollUp()
        }
    }

    function handleCarouselDown() {
        if (itemIndex === newAboutHistoryArray.length - 1) {
            setItemIndex(0);
        } else {
            setItemIndex(itemIndex + 1)
            scrollDown();
        }
    }

    return (
        <section id="new-history-section">

            <h2 className="header">History</h2>

            <div className="container">

                <div className="date-picker-wrapper">
                    <img src={polygon1} onClick={handleCarouselUp}></img>

                    <div className="scroll-outer">

                        <div className={
                            showClass ? "animate-scroll-down scroll-inner" : "scroll-inner"
                            }
                        >

                            {newAboutHistoryArray.map((item, i) => {
                                return (
                                    <div 
                                        className={
                                            i == itemIndex ? "selected-date" : "upcoming-date"
                                        } 
                                        key={i}
                                    >
                                        <div>{item[0]}</div>
                                        <div>{item[1]}</div>
                                    </div>
                                );
                            })}

                        </div>

                    </div>  
                        
                    <img src={polygon2} onClick={handleCarouselDown}></img>
                </div>

                <div className="content-wrapper">
                    
                    <div className="selected-content">

                        <div className="content-image-wrapper">
                            <img src={historyItem[2]}></img>
                        </div>

                        <br/>

                        <p>{historyItem[3]}</p>
                        
                    </div>
                    
                </div>

            </div>

        </section>
    );
}
