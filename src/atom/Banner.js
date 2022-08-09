import React from 'react';
import $ from 'jquery'
import First from '../Assets/Imgs/First.jpeg'
import Second from '../Assets/Imgs/Second.jpeg'
import Third from '../Assets/Imgs/Third.jpeg'
import Fourth from '../Assets/Imgs/Fourth.jpeg'
import Fifth from '../Assets/Imgs/Fifth.jpeg'
import Sixth from '../Assets/Imgs/Sixth.jpeg'
import Seventh from '../Assets/Imgs/Seventh.jpeg'
import Eighth from '../Assets/Imgs/Eighth.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


class BannerSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "gallery",
            dots: false,
            arrows: true,
            infinite: true,
            fade: true,
            adaptiveHeight: true,
            imagesNodes: "",
            arrIndexes: []
        }
    }
    componentDidMount = () => {
        let sliderImagesBox = document.querySelectorAll('.cards-box');
        let countt = 2
        sliderImagesBox.forEach(el => {
            let imageNodes = el.querySelectorAll('.card:not(.hide)')

            let arrIndexes = []; // Index array
            (() => {
                // The loop that added values to the arrIndexes array for the first time
                let start = 0;
                while (imageNodes.length > start) {
                    arrIndexes.push(start++);
                }
            })();


            this.set(imageNodes, arrIndexes)


            let setIndex = (arr) => {
                for (let i = 0; i < imageNodes.length; i++) {
                    imageNodes[i].dataset.slide = arr[i] // Set indexes
                }
            }
            // el.addEventListener('click', () => {
            //     this.next()
            //     // this.next(arrIndexes, imageNodes)
            // })
            setIndex(arrIndexes) // The first indexes addition
        });

    }

    set = (a, b) => {
        this.setState({
            imagesNodes: a,
            arrIndexes: b

        });
        this.props.setImage(a[0].children[0].children[0].attributes[2].baseURI.slice(0, -1) + a[0].children[0].children[0].attributes[2].value)
    }

    next = () => {
        this.state.arrIndexes.unshift(this.state.arrIndexes.pop());

        for (let i = 0; i < this.state.imagesNodes.length; i++) {
            this.state.imagesNodes[i].dataset.slide = this.state.arrIndexes[i] // Set indexes
            if (this.state.imagesNodes[i].dataset.slide == 0) {
                console.log(this.state.imagesNodes[i].dataset.slide)

                this.props.setImage(this.state.imagesNodes[i].children[0].children[0].attributes[2].baseURI.slice(0, -1) + this.state.imagesNodes[i].children[0].children[0].attributes[2].value)
            }
        }
        $('#nav-next').addClass('active')
        $('#nav-back').removeClass('active')
    }

    back = () => {
        this.state.arrIndexes.push(this.state.arrIndexes.shift());

        for (let i = 0; i < this.state.imagesNodes.length; i++) {
            this.state.imagesNodes[i].dataset.slide = this.state.arrIndexes[i] // Set indexes
            if (this.state.imagesNodes[i].dataset.slide == 0) {
                console.log(this.state.imagesNodes[i].dataset.slide)

                this.props.setImage(this.state.imagesNodes[i].children[0].children[0].attributes[2].baseURI.slice(0, -1) + this.state.imagesNodes[i].children[0].children[0].attributes[2].value)
            }
        }
        $('#nav-back').addClass('active')
        $('#nav-next').removeClass('active')
    }


    render() {
        return (
            <>
                <div className="position-absolute bottom-105 w-100" >
                    <div className="cards-box banner-slider-container">
                        <div className="card hide" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={First} alt="" />
                            </div>
                        </div>
                        <div className="card" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={First} alt="" />
                            </div>
                        </div>
                        <div className="card" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={Second} alt="" />
                            </div>
                        </div>
                        <div className="card" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={Third} alt="" />
                            </div>
                        </div>
                        <div className="card" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={Fourth} alt="" />
                            </div>
                        </div>
                        <div className="card" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={Fifth} alt="" />
                            </div>
                        </div>
                        <div className="card" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={Sixth} alt="" />
                            </div>
                        </div>
                        <div className="card" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={Seventh} alt="" />
                            </div>
                        </div>
                        <div className="card" onClick={this.next}>
                            <div className="content-placeholder">
                                <img width="100%" draggable="false" src={Eighth} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <button className="btn rounded-pill BannerNav" id="nav-back" onClick={this.back} ><FontAwesomeIcon icon={faArrowLeft} color="black" /> </button>
                        <button className="btn rounded-pill BannerNav" id='nav-next' onClick={this.next} ><FontAwesomeIcon icon={faArrowRight} color="black" /></button>
                    </div>
                </div>
            </>
        );
    }
}

export default BannerSlider;