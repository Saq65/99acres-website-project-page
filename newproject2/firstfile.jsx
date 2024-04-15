import React, { useState } from "react";
import Modal from "react-modal";
import { ArrowDropDown, Close, CurrencyRupee, CurrencyRupeeRounded, FavoriteBorderOutlined, KeyboardArrowDown, LoyaltyOutlined, Report, Star, StarOutline, ThreeDRotationOutlined, ThumbDown, ThumbDownOutlined, ThumbUp, ThumbUpOutlined, YouTube, } from "@mui/icons-material";
import { ArrowRight, ArrowUp, ArrowUpCircle, Bank, Bank2, BoxArrowUpRight, Check, Download, Facebook, HouseHeartFill, Info, InfoCircle, InfoCircleFill, Instagram, JustifyLeft, StarFill, TelephoneFill, Twitter, Youtube } from "react-bootstrap-icons";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import thumb1 from "./images/thumb.png";
import parks from "./images/park.png";
import clinic from "./images/clinic.png";
import hotel from "./images/hotel.png";
import bank from "./images/bank.png";
import metro from "./images/metro.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import atm from "./images/atm.png";
import a1 from "./images/a1.png";
import a2 from "./images/a2.png";
import a3 from "./images/a3.png";
import a4 from "./images/a4.png";
import a5 from "./images/a5.png";
import a6 from "./images/a6.png";
import a7 from "./images/a7.png";
import a8 from "./images/a8.png";
import a9 from "./images/a9.png";
import a10 from "./images/a10.png";
import loser from "./images/loser.jpg";
import water from "./images/waterdrop.jpg";
import petrol from "./images/petrol.jpg";
import { Carousel, CarouselItem } from "react-bootstrap"
import university from "./images/university.png";
import rupee from "./images/rupay.jpg";
import analytics from "./images/ana.jpg";
import store from "./images/store.jpg";
import { Card } from "react-bootstrap";
import direction from "./images/direction.jpg";
import power from "./images/light.jpg";
import road from "./images/road.jpg";
import "./firstfile.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function FirstFile() {
    const [icon, setIcon] = useState(false);
    const [modal, setmodal] = useState(false);
    const [humburger, setHumburger] = useState(false);
    const [show, setshow] = useState();

    function ButtonFunc(e) {
        if (e.target.id === "f") {
            setshow(
                <div>
                    <Slider {...First} {...sliderSettingsFirst}>
                        <div className="card-wrapper">
                            <div style={{ height: '450px' }} className="card h-100 p-2 m-1">
                                <span className="bg-success d-block p-1 text-white">4.7 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p id="Text">I am living here for almost more than 3 years. Such a welcoming experiences here.
                                    All the basic facilities are available like schools, colleges, hospitals and
                                    r...<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p id="negative">There are few reasons that create problems for me like traffic jams.
                                    Poor police patrolling at night. Peoples behaviour are not helpful. Drinking water shortage...<span className="text-primary">Show More</span></p>

                                <div style={{ marginTop: '56px' }} className="person d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">RK</span>
                                    <div classname="">
                                        <label>Rishav Kumar</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident (lived for 3+y) | Posted 2m ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div style={{ height: '450px' }} className="card h-100 p-2 m-1">
                                <span className="bg-success p-1 text-white">4.7 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p>Kondapur is one of the luxurious locality in Hyderabad.
                                    It has all amenities are available. It is a popular residential area. Here good hospitals and colleges a..<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p>
                                    There are huge traffic jams whenever I have some important works. Frequent parking issues and prices are costly of rent and products that are needed for us.<span className="text-primary">Show More</span></p>

                                <div className="person d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">AK</span>
                                    <div classname="">
                                        <label>Adarsh Kumar</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident (lived for 3+y) | Posted 2m ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div style={{ height: '450px' }} className="card h-100 m-1 p-2">
                                <span className="bg-success p-1 text-white">4.1 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p>Kondapur is one of the luxurious locality in Hyderabad.
                                    It has all amenities are available. It is a popular residential area. Here good hospitals and colleges a...<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p>Some cons of this locality are lack of street lights and trees.
                                    Poor police patrolling and has no well maintained roads and parks. Traffic jams are also so high...<span className="text-primary">Show More</span></p>
                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">A</span>
                                    <div classname="mx-3">
                                        <label>Aashish</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident (lived for 3+y) | Posted 2m ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div style={{ height: '420px', cursor: 'pointer' }} className="card h-100 d-flex align-items-center justify-content-center p-2">
                                <div>
                                    <h5 className="text-center">Read all</h5>
                                    <p className="text-secondary">1402 Reviews</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            )

        } else if (e.target.id === "i") {
            setshow(
                <div>
                    <Slider {...Two} {...sliderSettingstwo}>

                        <div className="card-wrapper">
                            <div className="card p-2 m-1">
                                <span className="bg-warning p-1 text-white">2.1 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p id="Text">The only thing I like about this place is the environment .it has a very clear environment.
                                    We feel refreshed after giving some time in nature at this place....<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p id="negative">
                                    There are many problems with connectivity in this region.
                                    Safety is also not there in this region. New people will suffer so many problems after coming to this ..<span className="text-primary">Show More</span></p>

                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">RK</span>
                                    <div classname="mx-3">
                                        <label>Charak</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident | Posted 1yr ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card h-100 p-2 m-1">
                                <span className="bg-warning p-1 text-white">2.2 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p>
                                    The roads here is in very good condition. low traffic here and hospitals are near basic facilities are here.
                                    The Neighbours are also good...<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p>
                                    There is a problem of electricity and water sometime water is so dirty mixed with sand also electricity is not available properly.
                                    <span className="text-primary">Show More</span></p>
                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">H</span>
                                    <div classname="mx-3">
                                        <label>Himanshu</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Tenant | Posted 1yr ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div style={{ height: '375px' }} className="card m-1 p-2">
                                <span className="bg-warning p-1 text-white">2.3 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    Prashant Nagar Colony
                                </p>

                                <p>
                                    Roads all digged for drainage purpose not reconstructed back, every where water ponging,
                                    chemical waste drain become more worst And people getting more unhealthy..,...Show<span className="text-primary">Show More</span></p>

                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">R</span>
                                    <div classname="mx-3">
                                        <label>Ramchandra</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Owner | Posted 2yr ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div style={{ height: '400px', cursor: 'pointer' }} className="card d-flex align-items-center justify-content-center p-2">
                                <div>
                                    <h5 className="text-center">Read all</h5>
                                    <p className="text-secondary">1402 Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">i2</div>
                        <div className="card">i3</div>
                        <div className="card">i4</div>
                    </Slider>
                </div>
            )
            document.getElementById('show').style.display = "none";
        } else if (e.target.id === "r") {
            setshow(
                <div>
                    <Slider {...Third} {...sliderSettingsthird}>

                        <div className="card-wrapper">
                            <div className="card p-2 m-1">
                                <span className="bg-warning p-1 text-white">2.1 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p id="Text">The only thing I like about this place is the environment .it has a very clear environment.
                                    We feel refreshed after giving some time in nature at this place....<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p id="negative">
                                    There are many problems with connectivity in this region.
                                    Safety is also not there in this region. New people will suffer so many problems after coming to this ..<span className="text-primary">Show More</span></p>

                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">RK</span>
                                    <div classname="mx-3">
                                        <label>Charak</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident | Posted 1yr ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card h-100 p-2 m-1">
                                <span className="bg-warning p-1 text-white">2.2 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p>
                                    The roads here is in very good condition. low traffic here and hospitals are near basic facilities are here.
                                    The Neighbours are also good...<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p>
                                    There is a problem of electricity and water sometime water is so dirty mixed with sand also electricity is not available properly.
                                    <span className="text-primary">Show More</span></p>
                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">H</span>
                                    <div classname="mx-3">
                                        <label>Himanshu</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Tenant | Posted 1yr ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card m-1 p-2">
                                <span className="bg-warning p-1 text-white">2.3 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    Prashant Nagar Colony
                                </p>

                                <p>
                                    Roads all digged for drainage purpose not reconstructed back, every where water ponging,
                                    chemical waste drain become more worst And people getting more unhealthy..,...Show<span className="text-primary">Show More</span></p>

                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">R</span>
                                    <div classname="mx-3">
                                        <label>Ramchandra</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Owner | Posted 2yr ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div style={{ height: '400px', cursor: 'pointer' }} className="card d-flex align-items-center justify-content-center p-2">
                                <div>
                                    <h5 className="text-center">Read all</h5>
                                    <p className="text-secondary">1402 Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">i2</div>
                        <div className="card">i3</div>
                        <div className="card">i4</div>
                    </Slider>
                </div>
            )
            document.getElementById('show').style.display = "none";

        } else if (e.target.id === "s") {
            setshow(
                <div>
                    <Slider {...Four} {...sliderSettingsfour}>
                        <div className="card-wrapper">
                            <div className="card p-2 m-1">
                                <span className="bg-success p-1 text-white">4.7 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p id="Text">I am living here for almost more than 3 years. Such a welcoming experiences here.
                                    All the basic facilities are available like schools, colleges, hospitals and
                                    r...<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p id="negative">There are few reasons that create problems for me like traffic jams.
                                    Poor police patrolling at night. Peoples behaviour are not helpful. Drinking water shortage...<span className="text-primary">Show More</span></p>

                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">RK</span>
                                    <div classname="mx-3">
                                        <label>Rishav Kumar</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident (lived for 3+y) | Posted 2m ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card h-100 p-2 m-1">
                                <span className="bg-success p-1 text-white">4.7 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p>Kondapur is one of the luxurious locality in Hyderabad.
                                    It has all amenities are available. It is a popular residential area. Here good hospitals and colleges a..<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p>
                                    There are huge traffic jams whenever I have some important works. Frequent parking issues and prices are costly of rent and products that are needed for us.<span className="text-primary">Show More</span></p>

                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">AK</span>
                                    <div classname="mx-3">
                                        <label>Adarsh Kumar</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident (lived for 3+y) | Posted 2m ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card p-2 m-1">
                                <span className="bg-warning p-1 text-white">2.1 <Star style={{ color: 'white' }} /></span>
                                <p className="text-secondary mt-1">
                                    POSITIVES
                                </p>

                                <p id="Text">The only thing I like about this place is the environment .it has a very clear environment.
                                    We feel refreshed after giving some time in nature at this place....<span className="text-primary">Show More</span></p>
                                <p className="text-secondary">
                                    NEGATIVES
                                </p>
                                <p id="negative">
                                    There are many problems with connectivity in this region.
                                    Safety is also not there in this region. New people will suffer so many problems after coming to this ..<span className="text-primary">Show More</span></p>

                                <div className="person justify-content-center align-items-center d-flex">
                                    <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">RK</span>
                                    <div classname="mx-3">
                                        <label>Charak</label>
                                        <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident | Posted 1yr ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            )
            document.getElementById('show').style.display = "none";
        }
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,

                    display: 'flex',
                    background: '#0078DB',
                    height: '45px',
                    width: '50px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                }}
                onClick={onClick} />
        )
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    zIndex: 1,
                    display: 'flex',
                    background: '#0078DB',
                    height: '45px',
                    width: '50px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',

                }}
                onClick={onClick}
            />
        );
    }
    const Setting = {
        // dots: true,
        infinite: false,
        // autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    const mobileSettings = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettings = Setting;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettings = mobileSettings;
    }
    const Setting2 = {
        speed: 500,
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    const mobileSettings2 = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettings2 = Setting2;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettings2 = mobileSettings2;
    }
    const Setting3 = {
        speed: 500,
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 1,

    }
    const mobileSettings3 = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettings3 = Setting2;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettings3 = mobileSettings3;
    }
    const Setting4 = {
        speed: 500,
        slidesToShow: 3,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    const mobileSettings4 = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettings4 = Setting4;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettings4 = mobileSettings4;
    }
    const Setting5 = {
        speed: 500,
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    const mobileSettings5 = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettings5 = Setting5;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettings5 = mobileSettings5;
    }
    const Setting6 = {
        speed: 500,
        slidesToShow: 3,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    const mobileSettings6 = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettings6 = Setting6;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettings6 = mobileSettings6;
    }
    const Setting7 = {
        speed: 500,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    }
    const mobileSettings7 = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        arrows: false,
    };
    let sliderSettings7 = Setting7;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettings7 = mobileSettings7;
    }
    const Setting8 = {
        speed: 500,
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    const mobileSettings8 = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,

    };
    let sliderSettings8 = Setting8;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettings8 = mobileSettings8;
    }
    const First = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    }
    const mobileSettingsFirst = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettingsFirst = First;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettingsFirst = mobileSettingsFirst;
    }
    const Two = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    }
    const mobileSettingstwo = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettingstwo = Two;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettingstwo = mobileSettingstwo;
    }
    const Third = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    }
    const mobileSettingsthird = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettingsthird = Third;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettingsthird = mobileSettingsthird;
    }
    const Four = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    }

    const mobileSettingsfour = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let sliderSettingsfour = Four;

    if (window.matchMedia("(max-width:768px)").matches) {
        sliderSettingsfour = mobileSettings;
    }
    const article = {
        speed: 500,
        slidesToShow: 4,
        infinite: false,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    const mobileSettingsarticle = {
        speed: 500,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    let articlesetting = article;

    if (window.matchMedia("(max-width:768px)").matches) {
        articlesetting = mobileSettingsarticle;
    }
    return (
        <div id="main" className="container-fluid-lg">
            { /*     <div
                id="nav"
                style={{ backgroundColor: "#005CA8", height: "85px" }}
                className="text-white p-2"
            >
                <div className="row align-items-center  mx-auto h-100  w-100">
                    <div className="col-lg-2 col-12 text-center">
                        <h1 style={{ fontFamily: "sans-serif" }} className="fw-900">
                            99acres
                        </h1>
                    </div>
                    <div className="col-lg-7 col-12 text-center">
                        <div
                            id="search"
                            className="row w-100 h-100 justify-content-around align-items-center bg-white border-0 rounded p-1 text-dark"
                        >
                            <div className="col-lg-2 first">
                                <select className="border-0">
                                    <optgroup className="fw-lighter" label="residental">
                                        <option id="1">Buy</option>
                                        <option id="2">Rent</option>
                                        <option id="3">PG</option>
                                        <option id="4">Projects</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="col-lg-9 second">
                                <input
                                    onClick={() => setIcon(true)}
                                    type="search"
                                    className="form-control z-3 w-100"
                                    name="search"
                                    id="search"
                                />
                            </div>
                            <div className="col-lg-1 d-flex align-items-center third">
                                <span><Mic /></span>  <span><Search /></span>
                            </div>
                        </div>
                        <Modal isOpen={icon} onRequestClose={() => setIcon(false)} className=" bg-primary" style={{ content: { height: '200px', marginTop: '150px' }, overlay: { backgroundColor: 'rgba(0,0,0,0)', zIndex: '2' } }}>
                            lll
                        </Modal>
                    </div>
                    <div className="col-lg-3 col-12 mt-2 text-center">
                        <div className="d-flex justify-content-around align-items-evenly">
                            <div className="post w-50">
                                <h6 className="p-2 border-0 rounded bg-white text-dark fw-bold">Post Property <span className="text-white border rounded" style={{ backgroundColor: '#219653' }}>FREE</span></h6>
                            </div>
                            <div className="profile mt-1">
                                <span onMouseOver={() => setmodal(true)} style={{ borderRadius: '50%', height: '50px', cursor: 'pointer' }} className="border p-1 bg-white"><PersonRounded style={{ color: '#005CA8' }} /></span><span><ArrowDropDown /></span>
                            </div>
                            <div className="humburger mt-1">
                                <span style={{ cursor: 'pointer' }} onClick={() => setHumburger(true)}><JustifyLeft className="fs-3" /></span>
                            </div>
                        </div>
                    </div>
                    <Modal className="p-2 bg-white w-25 h-100" style={{ content: { float: 'right' }, overlay: { backgroundColor: 'rgba(0,0,0,0)',zIndex:'91' } }} onRequestClose={() => setHumburger(false)} isOpen={humburger}>
                        <i style={{ cursor: 'pointer', float: 'right' }} onClick={() => setHumburger(false)}><Close /></i>
                        <h6 className="fw-bold text-primary"><span style={{ borderRadius: '50%' }} className="border bg-dark text-white p-1"><Person2Rounded /></span> LOGIN / REGISTER </h6>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Post Property</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Explore our Services</td>
                                </tr>
                                <tr>
                                    <td>For Buyers</td>
                                </tr>
                                <tr>
                                    <td>For Tenants</td>
                                </tr>
                                <tr>
                                    <td>For Owners</td>
                                </tr>
                                <tr>
                                    <td>For Dealers / Builders</td>
                                </tr>

                            </tbody>
                            <thead>
                                <tr>
                                    <th>Home Loans</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Insights</td>
                                </tr>
                                <tr>
                                    <td>Articles & News</td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal>
                    <Modal onRequestClose={() => setmodal(false)} isOpen={modal} style={{ content: { width: '20%', left: '85%', height: '40%', marginTop: '40px' }, overlay: { backgroundColor: 'rgba(0,0,0,0)',zIndex:'91' } }}>
                        <div className="w-100 h-100" onMouseLeave={() => setmodal(false)}>
                            <h6 className="text-primary fw-bold">LOGIN / REGISTER</h6>
                            <p className="fw-bold">My Activity</p>
                            <ul style={{ listStyle: 'none' }}>
                                <li>Recently Searched</li>
                                <li>Recently Viewed</li>
                                <li>Shortlisted</li>
                                <li>Contacted</li>
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>*/}


            <div style={{ position: 'sticky', top: '0', height: '65px', zIndex: '90', marginLeft: '0', marginRight: '0' }} className="container-fluid-lg" id="nav" >
                <div id="upper" className="h-100 w-100">
                    <ul className="d-flex justify-content-around align-items-center h-100 bg-white " style={{ listStyle: 'none', borderBottom: '2px inset #E1EDF8' }}>
                        <li><a style={{ textDecoration: 'none' }} className="text-dark" href="#FloorPlans">Floor Plans</a></li>
                        <li><a style={{ textDecoration: 'none' }} className="text-dark" href="#facilites">Facilities</a></li>
                        <li><a style={{ textDecoration: 'none' }} className="text-dark" href="#brochure">Brochure & Price List</a></li>
                        <li><a style={{ textDecoration: 'none' }} className="text-dark" href="#society">Society Reviews</a></li>
                        <li><a style={{ textDecoration: 'none' }} className="text-dark" href="#Explore">Explore Locality</a></li>
                        <li><a style={{ textDecoration: 'none' }} className="text-dark" href="#builder">Builder</a></li>
                        <li><a style={{ textDecoration: 'none' }} className="text-dark" href="#faq">FAQs</a></li>
                        <li><a style={{ textDecoration: 'none' }} className="text-dark" href="#article">Articles</a></li>
                    </ul>
                </div>
            </div>
            <div id="overflowx">
                <div className="container-fluid mt-3">
                    <div className="row w-100 mx-auto h-100">
                        <div className="col-lg-8 col-12">
                            <div className="row w-100 ">
                                <div style={{ height: '327px' }} className="col-lg-6 col-12">
                                    <div style={{ cursor: 'pointer' }} className="card w-100 h-100 m-1">
                                        <img src="https://newprojects.99acres.com/projects/vessella_group/vessella_woods/images/gun472c4_large.png" className="img-fluid h-100 w-100" alt="" />
                                        <div className="card-img-overlay d-flex align-items-end">
                                            <div className="card-body">
                                                <div className="card-text d-flex justify-content-between">
                                                    <p style={{ position: 'relative', top: '40px', right: '20px', fontSize: 'x-small' }} className="text-white fw-bold fs-6">All Photos & Videos</p>
                                                    <p style={{ position: 'relative', top: '40px', left: '10px' }} className="text-white"><MdOutlineAutoAwesomeMotion /> 14</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hide" style={{ height: '165px' }} className="col-lg-6">
                                    <div style={{ cursor: 'pointer' }} className="card h-100 m-1">
                                        <iframe id="YouTubeVideo-ba1b5e9c-3109-42e0-bb95-2da230a450c8"
                                            className="video-div h-100" data-type="youtube" data-video-id="GDLt1CA8Ohg"
                                            frameborder="0" allowfullscreen="true"
                                            autoplay
                                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            title="Bharatsthali Sarees & Dress Material @ Wedding Shopping Chandigarh"
                                            src="https://www.youtube.com/embed/Yx_2hReZJ6M?list=TLGGo1Ydw-LZrZ0wOTA0MjAyNA" ></iframe>
                                        <div className="card-img-overlay d-flex align-items-end">
                                            <div className="card-body">
                                                <div className="card-text d-flex justify-content-between">
                                                    <p style={{ position: 'relative', top: '40px', right: '20px' }} className="text-white fw-bold">Videos</p>
                                                    <p style={{ position: 'relative', top: '40px', left: '10px' }} className="text-white"><MdOutlineAutoAwesomeMotion /> 3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="hide" style={{ cursor: 'pointer' }} className="card h-100 m-1">
                                        <img src="https://newprojects.99acres.com/projects/vessella_group/vessella_woods/images/atmgmt7c_large.png" className="img-fluid w-100 h-100" alt="" />
                                        <div className="card-img-overlay d-flex align-items-end">
                                            <div className="card-body">
                                                <div className="card-text d-flex justify-content-between">
                                                    <p style={{ position: 'relative', top: '40px', right: '20px' }} className="text-white fw-bold">Outdoors</p>
                                                    <p style={{ position: 'relative', top: '40px', left: '10px' }} className="text-white"><MdOutlineAutoAwesomeMotion /> 7</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p style={{ color: '#8993A4', fontSize: '9pt' }} className="m-2">Home › Projects in Hyderabad
                                    ›
                                    Kondapur
                                    ›
                                    Vessella Woods</p>
                            </div>
                            <div className="container-fluid d-flex mt-4">
                                <div style={{ height: '75', width: '80px' }} className="card p-2">
                                    <img src="https://newprojects.99acres.com/projects/vessella_group/vessella_woods/wycsh8ox.jpg" className="img-fluid w-100 h-100" alt="" />
                                </div>
                                <div className="card-text mx-3 mt-2">
                                    <h5 className="fw-bold">Vessella Woods <span><FavoriteBorderOutlined className="fs-3" /></span></h5>
                                    <span style={{ position: 'relative', bottom: '12px' }} className="text-secondary">Kondapur, Hyderabad</span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button style={{ backgroundColor: '#06AFB0', fontSize: '9pt' }} className="m-1 border-0 text-white p-1"><Check />RERA <InfoCircle /></button>
                                <button style={{ backgroundColor: '#D7F2E3', fontSize: '9pt' }} className="m-1 border-0 p-1">No Brokerge</button>
                                <button style={{ backgroundColor: '#F5F5FF', fontSize: '9pt' }} className="m-1 border-0 p-1"><ThreeDRotationOutlined className="fs-6" /> 3D FLOOR PLANS Available</button>
                                <button style={{ backgroundColor: '#F4F5F7', fontSize: '9pt' }} className="m-1 border-0 p-1">+40 Top Facilities</button>
                            </div>
                            <div className="mt-3" id="construction">
                                <div style={{ height: '140px', backgroundColor: '#F0F9FF' }} className="card border-0 p-4">
                                    <p style={{ fontSize: '12pt', fontWeight: '500', color: '#989BA7' }} className=" fs-6">CONSTRUCTION STATUS</p>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h5>Ready To Move</h5>
                                            <p className="fw-lighter">Since Jan, 2022</p>
                                        </div>
                                        <div>
                                            <span><KeyboardArrowDown className="text-primary" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div>
                                    <span style={{ borderRadius: '50%', backgroundColor: '#FFF5E4' }} className="border p-2"><LoyaltyOutlined style={{ color: '#FFAA3E' }} /></span>
                                </div>
                                <div className="mt-2">
                                    <h5 className="fw-bold">₹ 8 - 8.93 Cr  <span style={{ fontWeight: '400' }} className="text-primary fs-6 ">+ Charges</span></h5>
                                    <p style={{ position: 'relative', bottom: '5px' }} className="text-secondary">PRICE RANGE</p>
                                </div>
                                <div>
                                    <p style={{ fontWeight: '500' }}>4 BHK Villa</p>
                                    <div className="card w-50 shadow border-0">
                                        <div className="p-2" style={{ backgroundColor: '#F5F5FF' }}>
                                            <span className=" m-2" ><span style={{ fontWeight: '600' }}>4 BHK</span> <span className="text-secondary">Villa</span></span>
                                        </div>
                                        <div className="card-text p-2">
                                            <p className="m-2 " style={{ fontSize: '10pt', position: 'relative', top: '8px' }}>Built-up Area</p>
                                            <p className="m-2">4240 - 4467 sq.ft.<span className="text-secondary" style={{ fontSize: 'x-small' }}>(393.91 - 415.0 sq.m.) <KeyboardArrowDown /></span></p>
                                            <p className="m-2">₹ 8 - 8.93 Cr <span className="text-primary">+ Charges</span></p>

                                        </div>
                                    </div>
                                </div>
                                <div id="FloorPlans" style={{ visibility: 'hidden' }}>
                                    floor plans
                                </div>
                                <div className="mt-5">
                                    <h5>Floor Plans & Pricing</h5>
                                    <button className="p-2 border-0" style={{ backgroundColor: '#D6EFFF', borderRadius: '30px' }}>4 BHK Villa</button>
                                </div>
                            </div>
                            <div id="slider" className="mt-3">
                                <div className="p-2" style={{ backgroundColor: '#F6FBFF' }}>
                                    <p className="text-secondary">14 Floor Plans Available</p>
                                    <Slider {...Setting} {...sliderSettings} className="hello">
                                        <div className="card m-1 p-2 w-100 h-100">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3584 sq.ft. <span className="text-secondary">(332.96 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F14_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card m-1 p-2">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card m-1 p-2">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3632 sq.ft. <span className="text-secondary">(337.42 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F15_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card m-1 p-2">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3643 sq.ft. <span className="text-secondary">(338.45 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F9_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3646 sq.ft. <span className="text-secondary">(338.72 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F17_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2 m-1">
                                            <div className="txt mx-auto">
                                                <p className="text-center">3610 sq.ft. <span className="text-secondary">(335.38 sq.m.)</span><br />
                                                    <span style={{ fontSize: '9pt' }}>Built-up Area | 4 BHK</span> </p>
                                            </div>
                                            <img className="img-fluid w-100 h-100 " src="https://projectcdn.99acres.com/project_data/dd1676/block1_45441/3D/25128_B1_1F1_3D.jpg" alt="" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h5>Price on request</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div id="resale" className="d-flex flex-wrap justify-content-between">
                                    <div>
                                        <h5>Resale Properties in this project</h5>
                                        <p><span>Showing for </span>
                                            <select className="border-0">
                                                <option>All Option</option>
                                                <option>4 BHK Independent House/Villa</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div>
                                        <p><a href="#slider">View All 3 Propeties</a> <BoxArrowUpRight className="text-primary" /> <br />
                                            <span className="text-secondary">in Vessella Woods for Resale</span></p>
                                    </div>
                                </div>
                                <div className="slider-2">
                                    <Slider {...Setting2} {...sliderSettings2}>
                                        <div className="card  p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="img">
                                                    <img style={{ height: '75px', width: '90px' }} src="https://imagecdn.99acres.com/media1/23843/11/476871206T-1709288603972.jpg" alt="" className="img-fluid" />
                                                </div>
                                                <div className="text">
                                                    <h6><CurrencyRupee className="fs-6" /> 8 Cr</h6>
                                                    <p className="text-secondary">By Dealer</p>
                                                    <p className="text-secondary">Posted on 01st Mar, 2024</p>
                                                </div>
                                                <div className="icons">
                                                    <span style={{ borderRadius: '50%' }} className="border p-2"><TelephoneFill className="text-primary" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="img">
                                                    <img style={{ height: '75px', width: '90px' }} src="https://imagecdn.99acres.com/media1/23264/10/465290876T-1704369311633.jpg" alt="" className="img-fluid" />
                                                </div>
                                                <div className="text">
                                                    <h6><CurrencyRupee className="fs-6" /> 8.93 Cr</h6>
                                                    <p className="text-secondary">By Dealer</p>
                                                    <p className="text-secondary">Posted on 01st Mar, 2024</p>
                                                </div>
                                                <div className="icons">
                                                    <span style={{ borderRadius: '50%' }} className="border p-2"><TelephoneFill className="text-primary" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="img">
                                                    <img style={{ height: '75px', width: '90px' }} src="https://imagecdn.99acres.com/media1/23117/13/462353304T-1702981359318.jpg" alt="" className="img-fluid" />
                                                </div>
                                                <div className="text">
                                                    <h6><CurrencyRupee className="fs-6" /> 6.6 Cr</h6>
                                                    <p className="text-secondary">By Dealer</p>
                                                    <p className="text-secondary">Posted on 01st Mar, 2024</p>
                                                </div>
                                                <div className="icons">
                                                    <span style={{ borderRadius: '50%' }} className="border p-2"><TelephoneFill className="text-primary" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div id="resale" className="d-flex flex-wrap justify-content-between">
                                    <div>
                                        <h5>Properties for rent in this project</h5>
                                        <p><span>Showing for </span>
                                            <select className="border-0">
                                                <option>All Option</option>
                                                <option>4 BHK Independent House/Villa</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div>
                                        <p><a href="#slider">View All 3 Propeties</a> <BoxArrowUpRight className="text-primary" /> <br />
                                            <span className="text-secondary">in Vessella Woods for Resale</span></p>
                                    </div>
                                </div>
                                <div className="slider-2">
                                    <Slider {...Setting3} {...sliderSettings3}>
                                        <div className="card  p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="img">
                                                    <img style={{ height: '75px', width: '90px' }} src="https://imagecdn.99acres.com/media1/24097/4/481944114T-1711184714486.jpg" alt="" className="img-fluid" />
                                                </div>
                                                <div className="text">
                                                    <h6><CurrencyRupee className="fs-6" /> 1.5 L</h6>
                                                    <p className="text-secondary">By Dealer</p>
                                                    <p className="text-secondary">Posted on 23rd Mar, 2024</p>
                                                </div>
                                                <div className="icons">
                                                    <span style={{ borderRadius: '50%' }} className="border p-2"><TelephoneFill className="text-primary" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="img">
                                                    <img style={{ height: '75px', width: '90px' }} src="https://imagecdn.99acres.com/media1/22061/8/441228242T-1711294432829.jpg" alt="" className="img-fluid" />
                                                </div>
                                                <div className="text">
                                                    <h6><CurrencyRupee className="fs-6" /> 1.5 L</h6>
                                                    <p className="text-secondary">By Dealer</p>
                                                    <p className="text-secondary">Posted on 24th Mar, 2024</p>
                                                </div>
                                                <div className="icons">
                                                    <span style={{ borderRadius: '50%' }} className="border p-2"><TelephoneFill className="text-primary" /></span>
                                                </div>
                                            </div>
                                        </div>

                                    </Slider>
                                </div>
                            </div>
                            <div style={{ visibility: 'hidden' }} id="facilites">
                                facilites
                            </div>
                            <div className="facilites mt-5">
                                <div className="d-flex justify-content-between">
                                    <div className="txt">
                                        <h5>Top Facilities</h5>
                                    </div>
                                    <div className="text2">
                                        <p style={{ textDecoration: 'underline', cursor: 'pointer' }} className="text-primary">View All(45)</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap">
                                    <div id="facilities" className="d-flex flex-wrap">
                                        {/* Card 1 */}
                                        <div style={{ height: '110px', width: '120px', backgroundColor: '#FFFBF3' }} className="card m-2">
                                            <img src="https://static.99acres.com/universalapp/img/swimming_pool.png" alt="" className="img-thumbnail card-img-top" />
                                            <div className="card-body">
                                                <div id="facilitiesText" className="card-text">
                                                    <p>Swimming Pool</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ height: '110px', width: '120px', backgroundColor: '#F0F9FF' }} className="card m-2">
                                            <img src="https://static.99acres.com/universalapp/img/salon.png" alt="" className="img-thumbnail" />
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Salon</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div style={{ height: '110px', width: '120px', backgroundColor: '#F0F9FF' }} className="card m-2">
                                        <img src="https://static.99acres.com/universalapp/img/ro_system.png" alt="" className="img-thumbnail" />
                                        <div className="card-body">
                                            <div className="card-text">
                                                <p>RO System</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '110px', width: '120px', backgroundColor: '#F0F9FF' }} className="card m-2">
                                        <img src="https://static.99acres.com/universalapp/img/aerobics_centre.png" alt="" className="img-thumbnail" />
                                        <div className="card-body">
                                            <div id="facilitiesText" className="card-text">
                                                <p>Aerobics Centre</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '110px', width: '120px', backgroundColor: '#F0F9FF' }} className="card m-2">
                                        <img src="https://static.99acres.com/universalapp/img/terrace_garden.png" alt="" className="img-thumbnail" />
                                        <div className="card-body">
                                            <div id="facilitiesText" className="card-text">
                                                <p>Terrace Garden</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ marginTop: '60px' }} className="d-flex flex-wrap ">
                                    <div style={{ height: '110px', width: '120px', backgroundColor: '#F0F9FF' }} className="card m-2">
                                        <img src="https://static.99acres.com/universalapp/img/pergola.png" alt="" className="img-thumbnail" />
                                        <div className="card-body">
                                            <div id="facilitiesText" className="card-text">
                                                <p>Pergola</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '110px', width: '120px', backgroundColor: '#F0F9FF' }} className="card m-2">
                                        <img src="https://static.99acres.com/universalapp/img/high_speed_elevators.png" alt="" className="img-thumbnail" />
                                        <div className="card-body">
                                            <div id="facilitiesText" className="card-text">
                                                <p>High Speed Elevators</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '110px', width: '120px', backgroundColor: '#F0F9FF' }} className="card m-2">
                                        <img src="https://static.99acres.com/universalapp/img/spa.png" alt="" className="img-thumbnail" />
                                        <div className="card-body">
                                            <div id="facilitiesText" className="card-text">
                                                <p>Spa</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '110px', width: '120px', backgroundColor: '#F0F9FF' }} className="card m-2">
                                        <img src="https://static.99acres.com/universalapp/img/squash_court.png" alt="" className="img-thumbnail" />
                                        <div className="card-body">
                                            <div id="facilitiesText" className="card-text">
                                                <p>Squash Court</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div style={{ marginTop: '70px', cursor: 'pointer' }}>
                                <p className="fw-bold">View Facility Photos <span><ArrowRight /></span></p>
                            </div>
                            <hr />
                            <div id="location" className="mt-5">
                                <div className="d-flex justify-content-between">
                                    <div className="txt">
                                        <h5>Location Advantages</h5>
                                        <p>Kondapur is one of the prime locations to buy a home in Hyderabad. There are 383... <span><ArrowDropDown /></span></p>
                                    </div>
                                    <div className="text2">
                                        <p style={{ textDecoration: 'underline', cursor: 'pointer' }} className="text-primary">View All(15)</p>
                                    </div>
                                </div>
                                <div className="slider-4 ">

                                    <Slider {...Setting4} {...sliderSettings4}>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={thumb1} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>Faiz Cricket Academy Sports Centre... <br /> <span className="text-secondary">1.6 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={parks} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>Supreme Trampoline Park <br /> <span className="text-secondary">2.1 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={clinic} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>shiva sai clinic first aid centre <br /> <span className="text-secondary">2.7 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={thumb1} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>Serilingampally Municipal Office... <br /> <span className="text-secondary">2.8 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={hotel} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>Greenland Hotel <br /> <span className="text-secondary">3.0 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={metro} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>Hafizpet Station <br /> <span className="text-secondary">3.4 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={thumb1} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>BSNL HCU TE <br /> <span className="text-secondary">3.9 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={bank} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>HDFC Bank <br /> <span className="text-secondary">4.3 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={thumb1} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>MeeSeva Center <br /> <span className="text-secondary">4.4 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={thumb1} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>Electricity Department <br /> <span className="text-secondary">4.6 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={thumb1} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>RTA Office <br /> <span className="text-secondary">4.6 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={clinic} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>KIMS Hospitals <br /> <span className="text-secondary">4.8 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={university} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>University of Hyderabad <br /> <span className="text-secondary">4.8 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={thumb1} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>Shafeeque Bridge <br /> <span className="text-secondary">5 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card  m-2">
                                            <div className="d-flex justify-content-between p-1">
                                                <img style={{ height: '80px' }} src={atm} className="img-fluid" alt="" />
                                                <div className="txt">
                                                    <p>ICICI Bank ATM <br /> <span className="text-secondary">5.9 Km</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="info mt-4">
                                <h5>More about Vessella Woods</h5>
                                <p>Vessella Woods in Kondapur, Hyderabad is a ready-to-move housing society.
                                    It offers villas in varied budget range. These units are a perfect combination of comfort and style,
                                    specifically designed to suit your requirements and conveniences. There are... <span className="text-primary">more</span></p>
                            </div>
                            <div id="desc" style={{ cursor: 'pointer' }} className="mt-2">
                                <h6>Interiors and Other Specifications <span><ArrowRight /></span></h6>
                                <p className="text-secondary ">FOUNDATION AND STRUCTURE RCC framed structure with red brick/aerocon block /fly ash/
                                    solid block masonry...</p>
                            </div>
                            <div id="brochure" style={{ visibility: 'hidden' }}>
                                brochure
                            </div>
                            <hr />

                            <div className="mt-4">
                                <div className="d-flex justify-content-between">
                                    <div className="txt">
                                        <h5>View official brochure</h5>
                                        <p>Vessella Woods Brochure, Payment Plan & Price...</p>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className="text2">
                                        <span><InfoCircleFill /></span>
                                    </div>
                                </div>
                                <div id="carousel">
                                    <Carousel controls>
                                        <CarouselItem>
                                            <img src={a1} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a2} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a3} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a4} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a5} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a6} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a7} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a8} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a9} className="img-fluid" alt="" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img src={a10} className="img-fluid" alt="" />
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div className="w-100 mt-4">
                                    <div id="download" className="row border h-100 align-items-center w-100">
                                        <div style={{ cursor: 'pointer', backgroundColor: '#F0F9FF' }} className="col-lg-2 col-3">
                                            <img src="https://static.99acres.com/universalapp/img/downloadpriceList.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-lg-7 col-5">
                                            <p id="downloadtext" className="fw-bold">Download Payment Plan & Price List of <br /> Vessella Woods</p>
                                        </div>
                                        <div className="col-lg-3 col-4">
                                            <button className="btn text-white bg-primary rounded"><Download /> Download</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h5>People who viewed this also viewed</h5>
                                <div className="slider-5">
                                    <Slider {...Setting5} {...sliderSettings5}>
                                        <div className="card ">
                                            <img style={{ height: '280px' }} className="img-fluid mx-auto" src="https://newprojects.99acres.com/projects/vishal_projects_ltd/vishal_sanjivini/images/ffnihwf3_med.png" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                                    <span><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Possession from Nov 2024</p>
                                            </div>
                                        </div>
                                        <div className="card ">
                                            <img style={{ height: '280px' }} className="img-fluid mx-auto" src="https://newprojects.99acres.com/projects/vertex_developers/vertex_kingston_park/images/fev451ma_med.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                                    <span><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Possession from Feb 2027</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img style={{ height: '280px' }} className="img-fluid" src="https://newprojects.99acres.com/projects/nest_makers/nest_bliss_in_the_woods/images/tnmkh7d_1711436268_482255158_med.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span className="text-white p-2"></span>
                                                    <span><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Possession from Dec 2025</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div id="similarProject" className="mt-5">
                                <h4>Similar Projects</h4>
                                <div className="slider-6 mt-2">
                                    <Slider {...Setting6} {...sliderSettings6}>
                                        <div className="card">
                                            <img style={{ height: '200px' }} src="https://newprojects.99acres.com/projects/praneeth_group/praneeth_pranav_knightwoods/images/gz8z6qj_1707135708_471611090_med.jpg" className="img-fluid mx-auto" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                                    <span id="shadow"><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Ready To Move</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h6>Praneeth Pranav Knightwoods</h6>
                                                    <p className="text-secondary">3, 4 BHK Villa in Beeramguda, Hyderabad</p>
                                                    <p>₹ 1.91 - 2.52 Cr</p>
                                                    <p className="text-primary">View Details</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img style={{ height: '200px' }} className="img-fluid" src="https://newprojects.99acres.com/projects/surabhi_estates_secunderabad/surabhis_signature_villas/images/ksazrmj_1706870677_471017552_med.jpg" alt="" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                                    <span id="shadow"><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Ready To Move</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h6>Surabhis Signature Villas</h6>
                                                    <p className="text-secondary">3, 4 BHK Villa in Tellapur, Hyderabad</p>
                                                    <p>₹ 2.35 - 3.9 Cr</p>
                                                    <p className="text-primary">View Details</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img style={{ height: '200px' }} src="https://newprojects.99acres.com/projects/trishala_infrastructure/trishala_the_village/images/ent_med.jpg" alt="" className="img-fluid" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                                    <span id="shadow"><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Ready To Move</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h6>Trishala The Village</h6>
                                                    <p className="text-secondary">3, 4 BHK Villa in Rajendra Nagar, Hyderabad</p>
                                                    <p>₹ 3.08 - 4.08 Cr</p>
                                                    <p className="text-primary">View Details</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img style={{ height: '200px' }} src="https://newprojects.99acres.com/projects/unknown/nr_infra_ultimus/images/nd11c9sd_med.jpeg" alt="" className="img-fluid" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                                    <span id="shadow"><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Ready To Move</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h6>NR Infra Ultimus</h6>
                                                    <p className="text-secondary">3, 4 BHK Villa in Patancheru, Hyderabad</p>
                                                    <p>₹ 91.2 L - 1.3 Cr</p>
                                                    <p className="text-primary">View Details</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img style={{ height: '200px' }} src="https://newprojects.99acres.com/projects/unknown/golden_leaves_villas/images/cjrpg8wl_med.jpg" alt="" className="img-fluid" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                                    <span id="shadow"><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Ready To Move</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h6>Devi Golden Leaves Villas</h6>
                                                    <p className="text-secondary">3, 4 BHK Villa in Uppal, Hyderabad</p>
                                                    <p>₹ 2.24 - 3.66 Cr</p>
                                                    <p className="text-primary">View Details</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img style={{ height: '200px' }} src="https://static.99acres.com/universalapp/img/defaultProj.png" alt="" className="img-fluid" />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between">
                                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                                    <span id="shadow"><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                                </div>
                                            </div>
                                            <div className="card-img-overlay d-flex align-items-end">
                                                <p style={{ top: '28px', position: 'relative' }} className="text-white fw-bold mx-2">Ready To Move</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <h6>SMR Vinay Casa Carino</h6>
                                                    <p className="text-secondary">4, 5 BHK Villa in Bandlaguda Jagir, Hyderabad</p>
                                                    <p>₹ 7.02 - 9.16 Cr</p>
                                                    <p className="text-primary">View Details</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div id="newly" className="mt-5">
                                <div style={{ backgroundColor: '#F0F9FF' }} className=" rounded m-2">
                                    <div className="row w-100">
                                        <div className="col-lg-2 col-4">
                                            <img className="img-fluid" src="https://static.99acres.com/universalapp/img/USP.png" alt="" />
                                        </div>
                                        <div className="col-lg-10 col-8 mt-3">
                                            <h5>Newly Launched Projects</h5>
                                            <div id="newlyslider" style={{ height: '50px' }}>
                                                <Slider {...Setting7} {...sliderSettings7}>
                                                    <p className="text-secondary">Less upfront payment</p>
                                                    <p className="text-secondary">Just now launched in the market</p>
                                                    <p className="text-secondary">Bigger home in the same budget</p>
                                                    <p className="text-secondary">Limited launch offers available</p>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-8 ">
                                        <Slider {...Setting8} {...sliderSettings8}>
                                            <Card className="w-100" >
                                                <span style={{ backgroundColor: '#FFE6BC' }}>NEW LAUNCH</span>
                                                <div style={{ height: '150px' }} className="d-flex align-items-center justify-content-center  mx-auto">
                                                    <div className="img ">
                                                        <img style={{ borderRadius: '50%', height: '80px', width: '80px' }} src="https://newprojects.99acres.com/projects/unknown/incor_lake_city/images/vxgiitu_1710246758_479409316_med.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="txt mx-3">
                                                        <h5>Incor Lake City</h5>
                                                        <p className="text-secondary">Patancheru, Hyderabad</p>
                                                        <p className="fw-bold">₹ 52.4 L - 1.21 Cr <br />
                                                            <span style={{ fontSize: '9pt' }} className="text-secondary">14.0% price increase in last 1 year in </span>
                                                        </p>
                                                        <hr id="hr" />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-around">
                                                    <div>
                                                        <p className="mx-3">Get preferred options @zero brokerage</p>
                                                    </div>
                                                    <div className="">
                                                        <button className="btn btn-primary w-100">View</button>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className="w-100 ">
                                                <span style={{ backgroundColor: '#FFE6BC' }}>NEW LAUNCH</span>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="img ">
                                                        <img style={{ borderRadius: '50%', height: '80px', width: '80px' }} src="https://newprojects.99acres.com/projects/trishala_constrcutions/trishala_trilok/images/zcxdmkl_1707220344_471837256_med.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="txt mx-3">
                                                        <h5>Trishala Trilok</h5>
                                                        <p className="text-secondary">Rajendra Nagar, Hyderabad</p>
                                                        <p className="fw-bold">₹ 1.54 - 2.91 Cr <br />
                                                            <span style={{ fontSize: '9pt' }} className="text-secondary">₹ 1.54 - 2.91 Cr </span>
                                                        </p>
                                                        <hr id="hr" />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-around">
                                                    <div>
                                                        <p className="mx-3">Get preferred options @zero brokerage</p>
                                                    </div>
                                                    <div className="">
                                                        <button className="btn btn-primary w-100">View </button>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className="w-100">
                                                <span style={{ backgroundColor: '#FFE6BC' }}>NEW LAUNCH</span>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <div className="img">
                                                        <img style={{ borderRadius: '50%', height: '80px', width: '80px' }} src="https://newprojects.99acres.com/projects/gamut_india_projects/gamut_saraa_city/images/cinzb2j_1711435947_482253632_med.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="txt mx-3">
                                                        <h6>Gamut Saraa City</h6>
                                                        <p className="text-secondary">Attapur, Hyderabad</p>
                                                        <p className="fw-bold">₹ 95.48 L - 1.75 Cr <br />
                                                            <span style={{ fontSize: '9pt' }} className="text-secondary">₹ 1.54 - 2.91 Cr </span>
                                                        </p>
                                                        <hr id="hr" />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-around">
                                                    <div>
                                                        <p className="mx-3">Get preferred options @zero brokerage</p>
                                                    </div>
                                                    <div className="">
                                                        <button className="btn btn-primary w-100">View </button>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="caution mt-3">
                                    <p id="caution"><span><Report /></span> If the project details provided on 99acres are incorrect,<span className="text-primary">Report here</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div style={{ position: 'sticky', top: '70px' }} className="card p-3">
                                <div className="text">
                                    <h4><HouseHeartFill style={{ color: '#FFAA3E' }} /> Why you should consider Vessella Woods?</h4>
                                    <ul>
                                        <li>Private Garden in Each Villa</li>
                                        <li>Smoke Alarms</li>
                                        <li>Lush Green Garden Views</li>
                                    </ul>
                                    <p style={{ cursor: 'pointer' }} className="text-primary">view 4 more</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="text-secondary fs-6">Developed By</p>
                                        <h6 className="fw-bold">Vessella Group</h6>
                                    </div>
                                    <div style={{ height: '75px', width: '85px' }} className="card p-1">
                                        <img src="https://newprojects.99acres.com/projects/vessella_group/s4hfbrq6.jpg" className="img-fluid w-100 h-100" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5" id="society">
                    society
                </div>
                <div className="society mt-5">
                    <h5>Society Reviews <br />
                        <span className="text-secondary fs-6">Vessella Woods Ratings and Reviews</span></h5>

                    <div id="societyReview" className="container rounded border">
                        <div className="d-flex justify-content-center">
                            <div>
                                <img className="img-fluid text-center mx-2" src="https://static.99acres.com/images/locationReviews/writeNewReview.png" alt="" />
                                <h6 className="text-center">Review this Society</h6>
                                <p className="text-center">
                                    We don't have sufficient reviews to display. Write a <br /> review & help others to make the right choice
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary">Review this Society</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advertise mt-3">
                    <div id="advertise1" className="rounded">
                        <div className="row w-100 h-100 mx-auto align-items-center">
                            <div className="col-lg-3">
                                <img className="img-fluid" style={{ height: '100px' }} src="https://static.99acres.com/universalapp/img/img_010.png" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h5>Read reviews by local residents for any locality or society</h5>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn btn-primary text-white">See Rating & Review</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Explore">
                    Explore
                </div>

                <div id="explore1" className="container-fluid-lg d-flex justify-content-between explore1 mt-5">
                    <div>
                        <h4>Explore Kondapur</h4>
                        <p className="text-secondary fw-lighter">West Hyderabad</p>
                        <span id="span1" className="bg-secondary text-white border m-1">#2 in Top 100 in West Hyderabad</span>
                        <span id="span1" className="bg-secondary text-white border m-1"><ArrowUp className="text-success" /> 32.5% YoY</span>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary">Kondapur Overview</button>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
                <div id="instruction" className="conainer-fluid-lg  mt-3">
                    <div className="row  w-100 h-100 mx-auto">
                        <div className="col-lg-6 col-12">
                            <div id="card" className="card w-100 p-1 h-100">
                                <h5><img style={{ height: '35px' }} src={thumb1} className="img-fluid" alt="" />What's great here!</h5>
                                <p><img style={{ height: '35px' }} src={rupee} className="img-fluid" alt="" />
                                    Residential apartments make the most of the inventory fall under the mid-income budget segment in Kondapur</p>
                                <p><img style={{ height: '35px' }} src={analytics} className="img-fluid" alt="" />
                                    Proximity to HITEC City, a prime IT hub nearby, makes Kondapur a popular area among buyers and tenants</p>
                                <p><img style={{ height: '35px' }} src={store} className="img-fluid" alt="" />
                                    Tech Mahindra, Spark Infosys, Google and Accenture Services Pvt Ltd are some major IT companies located in Kondapur
                                </p>

                                <p>
                                    <img style={{ height: '35px' }} src={direction} className="img-fluid" alt="" />
                                    Gachibowli-Miyapur Road, Novotel Road and Cyber Village Road connect Kondapur to areas like Gachibowli and Madhapur
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div id="card" className="card p-1 w-100 h-100">
                                <h5><img style={{ height: '35px' }} src={loser} className="img-fluid " alt="" />What needs attention!</h5>
                                <p>
                                    <img style={{ height: '35px' }} src={water} className="img-fluid " alt="water-drop" />Dependence on water tanks due to limited water supply in Raghavendra Colony, Marthanda Nagar and Jagruthi Colony
                                </p>
                                <p>
                                    <img style={{ height: '35px' }} src={petrol} className="img-fluid " alt="water-drop" />
                                    Haphazard parking along a busy main road opposite Tech Mainstay, Kondapur, leads to traffic congestion
                                </p>
                                <p>
                                    <img style={{ height: '35px' }} src={power} className="img-fluid " alt="water-drop" />
                                    Residential societies face frequent power cuts for long hours in Kondapur
                                </p>
                                <p>
                                    <img style={{ height: '35px' }} src={road} className="img-fluid " alt="water-drop" />
                                    Pothole-ridden road leading from Botanical Garden to Kondapur sees massive traffic jams...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="locality" className="container-fluid-lg mt-5">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h4>Locality Reviews</h4>
                            <p className="text-secondary">for Kondapur, Hyderabad</p>
                        </div>
                        <div>
                            <button className="btn btn-primary text-white">Review your Society / Locality</button>
                        </div>
                    </div>
                    <div className="container-fluid-lg mt-5">
                        <div id="review" className="review-box border rounded border m-2">
                            <div className="row w-100 h-100 mx-auto ">
                                <div style={{ borderRight: '1px solid #EBECF0' }} className="col-lg-4 col-12 p-2">
                                    <h4 className="text-center">4.3<span className="fw-lighter fs-6">/5</span></h4>

                                    <div className="d-flex justify-content-center text-center align-items-center mx-auto">
                                        <p>
                                            <span style={{ color: '#31AB3D' }}><Star className="fs-4 m-1" /></span>
                                            <span style={{ color: '#31AB3D' }}><Star className="fs-4 m-1" /></span>
                                            <span style={{ color: '#31AB3D' }}><Star className="fs-4 m-1" /></span>
                                            <span style={{ color: '#31AB3D' }}><Star className="fs-4 m-1" /></span>
                                            <span style={{ color: '#31AB3D' }}><StarOutline className="fs-4 m-1" /></span> <br />
                                            <span className="text-center">Average Rating</span> <br />
                                            <span className="text-secondary text-center" style={{ fontSize: '9pt' }}>(1402 Total Reviews)</span>
                                        </p>
                                    </div>
                                    <div id="progress">
                                        <div id="progress" className="d-flex justify-content-center align-items-center">
                                            <ProgressBar now={40} style={{ height: '10px' }} variant="primary" className="w-75 rounded-0" />  5 <StarFill className="fs-6" /> <br />
                                        </div>
                                        <div id="progress" className="d-flex justify-content-center align-items-center">
                                            <ProgressBar now={55} style={{ height: '10px' }} variant="primary" className="w-75 rounded-0" />  4 <StarFill className="fs-6" /> <br />
                                        </div>
                                        <div id="progress" className="d-flex justify-content-center align-items-center">
                                            <ProgressBar now={10} style={{ height: '10px' }} variant="primary" className="w-75 rounded-0" />  3 <StarFill className="fs-6" /> <br />
                                        </div>
                                        <div id="progress" className="d-flex justify-content-center align-items-center">
                                            <ProgressBar now={2} style={{ height: '10px' }} variant="primary" className="w-75 rounded-0" />  2 <StarFill className="fs-6" /> <br />
                                        </div>
                                        <div id="progress" className="d-flex justify-content-center align-items-center">
                                            <ProgressBar now={0} style={{ height: '10px' }} variant="primary" className="w-75 rounded-0" />  1 <StarFill className="fs-6" /> <br />
                                        </div>
                                    </div>
                                    <p style={{ cursor: 'pointer' }} className="text-primary mt-2 text-center">See how ratings are calculated</p>
                                </div>
                                <div className="col-lg-8 p-2 col-12">
                                    <div>
                                        <p>Ratings by Features <span><Info className="border rounded" /></span></p>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-around">
                                        <div className="first d-flex flex-wrap justify-content-between">
                                            <svg className="overlay-svg  " width="40" height="40" viewBox="0 0 40 40">
                                                <circle className="circularProgressBar__circleBackground " cx="20" cy="20" r="18.5" strokeWidth="3px"></circle>
                                                <circle className="circularProgressBar__circleProgress text-white " cx="20" cy="20" r="18.5" strokeWidth="3px" transform="rotate(-90 20 20)"></circle>
                                                <svg width="18" height="18" x="11" y="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white" fillRule="evenodd" clipRule="evenodd" d="M19.8496 9.93832C18.2596 11.5283 16.1096 12.0283 14.5796 11.3183L13.1096 12.7883L19.9896 19.6683L18.5796 21.0783L11.6996 14.1983L4.80958 21.0683L3.39958 19.6583L13.1596 9.89832C12.4496 8.36832 12.9496 6.21832 14.5396 4.62832C16.4596 2.71832 19.1996 2.35832 20.6596 3.81832C22.1296 5.28832 21.7596 8.02832 19.8496 9.93832ZM10.6296 10.2983L7.79958 13.1283L3.60958 8.94832C2.04958 7.37832 2.04958 4.84832 3.60958 3.28832L10.6296 10.2983Z" ></path>
                                                </svg>
                                            </svg>
                                            <br />
                                            <div className="txt">
                                                <p>Lifestyle <br />
                                                    <span className="text-secondary">4.3 out of 5</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="second d-flex">
                                            <svg className="overlay-svg" width="40" height="40" viewBox="0 0 40 40">
                                                <circle className="circularProgressBar__circleBackground" cx="20" cy="20" r="18.5" strokeWidth="3px" />
                                                <circle className="circularProgressBar__circleProgress blueCircle" cx="20" cy="20" r="18.5" strokeWidth="3px" transform="rotate(-90 20 20)" style={{ strokeDasharray: 116.239, strokeDashoffset: 18.5982 }} />
                                                <svg width="18" height="18" x="11" y="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 5L12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5ZM6 13L10 17L18 9L16.59 7.58L10 14.17L7.41 11.59L6 13Z" fill="white" />
                                                </svg>
                                            </svg>
                                            <div className="txt">
                                                <p>Safety <br />
                                                    <span className="text-secondary">4.2 out of 5</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="third d-flex">
                                            <svg className="overlay-svg" width="40" height="40" viewBox="0 0 40 40">
                                                <circle className="circularProgressBar__circleBackground" cx="20" cy="20" r="18.5" strokeWidth="3px"></circle>
                                                <circle className="circularProgressBar__circleProgress blueCircle" cx="20" cy="20" r="18.5" strokeWidth="3px" transform="rotate(-90 20 20)" style={{ strokeDasharray: "116.239", strokeDashoffset: "20.923" }}></circle>
                                                <svg width="18" height="18" x="11" y="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.1 13.25C6.72 13.25 5.6 12.13 5.6 10.75C5.6 9.75 6.19 8.9 7.03 8.5C6.19 8.1 5.6 7.25 5.6 6.25C5.6 4.87 6.72 3.75 8.1 3.75C8.63 3.75 9.12 3.91 9.52 4.19L9.5 4C9.5 2.62 10.62 1.5 12 1.5C13.38 1.5 14.5 2.62 14.5 4L14.48 4.19C14.89 3.91 15.37 3.75 15.9 3.75C17.28 3.75 18.4 4.87 18.4 6.25C18.4 7.25 17.81 8.1 16.97 8.5C17.81 8.9 18.4 9.75 18.4 10.75C18.4 12.13 17.28 13.25 15.9 13.25C15.37 13.25 14.88 13.09 14.48 12.81L14.5 13C14.5 14.38 13.38 15.5 12 15.5C10.62 15.5 9.5 14.38 9.5 13L9.52 12.81C9.11 13.09 8.63 13.25 8.1 13.25ZM12 22.5C16.97 22.5 21 18.47 21 13.5C16.03 13.5 12 17.53 12 22.5ZM12 22.5C12 17.53 7.97 13.5 3 13.5C3 18.47 7.03 22.5 12 22.5ZM12 6C13.38 6 14.5 7.12 14.5 8.5C14.5 9.88 13.38 11 12 11C10.62 11 9.5 9.88 9.5 8.5C9.5 7.12 10.62 6 12 6Z" fill="white"></path>
                                                </svg>
                                            </svg>
                                            <div className="txt">
                                                <p>Environment <br />
                                                    <span className="text-secondary">4.1 out of 5</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="fourth d-flex">
                                            <svg className="overlay-svg" width="40" height="40" viewBox="0 0 40 40">
                                                <circle className="circularProgressBar__circleBackground" cx="20" cy="20" r="18.5" strokeWidth="3px"></circle>
                                                <circle className="circularProgressBar__circleProgress blueCircle" cx="20" cy="20" r="18.5" strokeWidth="3px" transform="rotate(-90 20 20)" style={{ strokeDasharray: "116.239", strokeDashoffset: "16.2734" }}></circle>
                                                <svg width="18" height="18" x="11" y="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.43 4H18.58L21 11V20H18V18H6V20H3V11L5.43 4ZM5 13.5C5 14.33 5.67 15 6.5 15C7.33 15 8 14.33 8 13.5C8 12.67 7.33 12 6.5 12C5.67 12 5 12.67 5 13.5ZM17.5 15C16.67 15 16 14.33 16 13.5C16 12.67 16.67 12 17.5 12C18.33 12 19 12.67 19 13.5C19 14.33 18.33 15 17.5 15ZM6.5 5.5L5 10H19L17.5 5.5H6.5Z" fill="white"></path>
                                                </svg>
                                            </svg>
                                            <div className="txt">
                                                <p>Connectivity <br />
                                                    <span className="text-secondary">4.3 out of 5</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Popular Mentions</p>
                                    </div>
                                    <div className="align-items-center">
                                        <ProgressBar now={100} variant="success" className="w-100 rounded-0" /> <p className="text-success ">100% Positive Mentions</p>
                                    </div>
                                    <div id="feedback" className="d-block">
                                        <span><ThumbUpOutlined /> Likes</span>
                                        <div className="mt-2 d-flex flex-wrap">
                                            <span title="830 Mention" className="p-1 m-2" style={{ backgroundColor: '#F4F5F7' }}>Good Public Transport (830)</span>
                                            <span title="625 Mention" className="p-1 m-2" style={{ backgroundColor: '#F4F5F7' }}>Easy Cab/Auto Availability (625)</span>
                                            <span title="529 Mention" className="p-1 m-2" style={{ backgroundColor: '#F4F5F7' }}>Good Schools are nearby (529)</span>
                                        </div>
                                        <div className="mt-2 d-flex flex-wrap">
                                            <span title="459 Mention" className="p-1 m-2 mt-1" style={{ backgroundColor: '#F4F5F7', wordBreak: "keep-all" }}>Well-maintained Roads (459)</span>
                                            <span title="439 Mention" className="p-1 m-2 mt-1" style={{ backgroundColor: '#F4F5F7' }}>Markets at a walkable distance (439)</span>
                                            <span title="415 Mention" className="p-1 m-2 mt-1" style={{ backgroundColor: '#F4F5F7' }}>Good Hospitals are nearby (415)</span>
                                        </div>
                                    </div>
                                    <div id="feedback" className="mt-4">
                                        <span><ThumbDownOutlined /> Dislikes</span>
                                        <div className="mt-2">
                                            <span title="398 Mention" className="p-1 m-2 mt-1" style={{ backgroundColor: '#F4F5F7' }}>Frequent Traffic Jams (398)</span>
                                            <span title="313 Mentions" className="p-1 m-2 mt-1" style={{ backgroundColor: '#F4F5F7' }}>High Pollution (313)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="reviewResident" className="mt-5">
                    <div className="d-flex flex-wrap justify-content-between">
                        <h4>Reviews by residents</h4>
                        <button className="btn btn-outline-primary">View All</button>
                    </div>

                    <div className="mt-5 d-block">
                        <button id="f" onClick={ButtonFunc} className="m-2 rounded btn btn-outline-primary">Recommended</button>
                        <button id="i" onClick={ButtonFunc} className="m-2 rounded btn btn-outline-primary">Negative First</button>
                        <button id="r" onClick={ButtonFunc} className="m-2 rounded btn btn-outline-primary">With Photos</button>
                        <button id="s" onClick={ButtonFunc} className="m-2 rounded btn btn-outline-primary">Recent</button>
                    </div>
                    <div className="container-fluid">
                        {show}
                        <div id="show" className="first">
                            <Slider {...First} {...sliderSettingsFirst}>
                                <div className="card-wrapper">
                                    <div style={{ height: '450px' }} className="card h-100 p-2 m-1">
                                        <span className="bg-success d-block p-1 text-white">4.7 <Star style={{ color: 'white' }} /></span>
                                        <p className="text-secondary mt-1">
                                            POSITIVES
                                        </p>

                                        <p id="Text">I am living here for almost more than 3 years. Such a welcoming experiences here.
                                            All the basic facilities are available like schools, colleges, hospitals and
                                            r...<span className="text-primary">Show More</span></p>
                                        <p className="text-secondary">
                                            NEGATIVES
                                        </p>
                                        <p id="negative">There are few reasons that create problems for me like traffic jams.
                                            Poor police patrolling at night. Peoples behaviour are not helpful. Drinking water shortage...<span className="text-primary">Show More</span></p>

                                        <div style={{ marginTop: '56px' }} className="person d-flex">
                                            <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">RK</span>
                                            <div classname="">
                                                <label>Rishav Kumar</label>
                                                <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident (lived for 3+y) | Posted 2m ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-wrapper">
                                    <div style={{ height: '450px' }} className="card h-100 p-2 m-1">
                                        <span className="bg-success p-1 text-white">4.7 <Star style={{ color: 'white' }} /></span>
                                        <p className="text-secondary mt-1">
                                            POSITIVES
                                        </p>

                                        <p>Kondapur is one of the luxurious locality in Hyderabad.
                                            It has all amenities are available. It is a popular residential area. Here good hospitals and colleges a..<span className="text-primary">Show More</span></p>
                                        <p className="text-secondary">
                                            NEGATIVES
                                        </p>
                                        <p>
                                            There are huge traffic jams whenever I have some important works. Frequent parking issues and prices are costly of rent and products that are needed for us.<span className="text-primary">Show More</span></p>

                                        <div className="person d-flex">
                                            <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">AK</span>
                                            <div classname="">
                                                <label>Adarsh Kumar</label>
                                                <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident (lived for 3+y) | Posted 2m ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-wrapper">
                                    <div style={{ height: '450px' }} className="card h-100 m-1 p-2">
                                        <span className="bg-success p-1 text-white">4.1 <Star style={{ color: 'white' }} /></span>
                                        <p className="text-secondary mt-1">
                                            POSITIVES
                                        </p>

                                        <p>Kondapur is one of the luxurious locality in Hyderabad.
                                            It has all amenities are available. It is a popular residential area. Here good hospitals and colleges a...<span className="text-primary">Show More</span></p>
                                        <p className="text-secondary">
                                            NEGATIVES
                                        </p>
                                        <p>Some cons of this locality are lack of street lights and trees.
                                            Poor police patrolling and has no well maintained roads and parks. Traffic jams are also so high...<span className="text-primary">Show More</span></p>
                                        <div className="person justify-content-center align-items-center d-flex">
                                            <span style={{ borderRadius: '50%', height: '50px', width: '60px', backgroundColor: '#FFE6BC' }} className="border d-flex justify-content-center align-items-center text-center">A</span>
                                            <div classname="mx-3">
                                                <label>Aashish</label>
                                                <p style={{ fontSize: '9pt' }} className="text-secondary">Former Resident (lived for 3+y) | Posted 2m ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-wrapper">
                                    <div style={{ height: '420px', cursor: 'pointer' }} className="card d-flex align-items-center justify-content-center p-2">
                                        <div>
                                            <h5 className="text-center">Read all</h5>
                                            <p className="text-secondary">1402 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <p>Is this helpful? Yes <ThumbUp /> No <ThumbDown /></p>
                </div >

                <div id="poster" className="mt-5 m-2">
                    <div style={{ backgroundColor: '#FFFBF3' }} className="rounded p-3">
                        <p id="posterDate" style={{ fontSize: '8pt', float: 'right' }}>Last Modified on 21 Oct, 2022</p>
                        <div className="d-flex">
                            <div className="">
                                <h3>
                                    <span id="bank"><Bank className="fs-3" style={{ color: '#FFAA3E' }} /></span>
                                </h3>
                                <h4 className="fw-bold">Banks <InfoCircle /></h4>
                                <p>to help you with loan...</p>
                            </div>
                            <div style={{ height: '130px', width: '30vh' }} className="card mx-2 shadow-md p-2 img">
                                <img width="80px" src="https://mediacdn.99acres.com/media1/21704/17/434097872T-1689590011074.jpg" className="img-fluid mx-auto" alt="" />
                                <div className="card-body">
                                    <p style={{ fontSize: '9pt', textOverflow: 'ellipsis' }} className="text-secondary">Tata Capital Housing Finance Limited <br />
                                        <span id="posterDate" className="text-bold text-dark text-center fs-6">8.90% Interest</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p style={{ cursor: 'pointer' }}>Looking for home loan? click here <ArrowRight /> </p>
                    </div>
                    <hr />
                </div>

                <div style={{ visibility: 'hidden' }} id="builder">
                    Builder
                </div>

                <div className="mt-5">
                    <div className="txt">
                        <h4>About Vessella Group</h4>
                    </div>
                    <div style={{ width: '220px' }} className="img justify-content-between d-flex mt-3">
                        <div style={{ width: '100px' }} className="border p-2">
                            <img className="img-fluid" src="https://newprojects.99acres.com/projects/vessella_group/s4hfbrq6.jpg" alt="" />
                        </div>
                        <span style={{ fontWeight: '500' }} className="">Vessella Group</span>
                    </div>
                    <div className="desc mt-2">
                        <p className="text-secondary">
                            Based in Hyderabad, Vessella Group is a renowned name in the construction industry. It offers exclusively developed 2BHK, 3BHK, and 4BHK villas.  It has developed premium properties with pristine designs and high level of quality.
                            Vessella Group is a professionally managed firm. Some of the successf...<span style={{ cursor: 'pointer' }} className="text-primary">more</span>
                        </p>
                    </div>
                </div>
                <hr />
                <div id="projects" className="mt-5">
                    <div className="heading">
                        <h5>Projects by Vessella Group</h5>
                    </div>
                    <div>
                        <span className="p-1 mt-4" id="delivered">Delivered</span>
                    </div>
                    <div className="img mt-3">
                        <div style={{ width: '320px', height: '200px' }} className="card  rounded">
                            <img style={{ height: '280px' }} className="img-fluid mx-auto" src="https://newprojects.99acres.com/projects/vessella_group/vessella_meadows/images/9xq5g4bd_med.jpg" alt="" />
                            <div className="card-img-overlay">
                                <div className="d-flex justify-content-between">
                                    <span style={{ backgroundColor: '#06AFB0' }} className="text-white p-1"><Check /> Rera</span>
                                    <span><FavoriteBorderOutlined className="text-white fs-3" /></span>
                                </div>
                            </div>
                            <div className="card-img-overlay d-flex align-items-end">
                                <p style={{ top: '72px', position: 'relative' }} className="text-white fw-bold mx-2">Ready To Move</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ visibility: 'hidden' }} id="faq">
                    Faq
                </div>

                <div className=" mt-5">
                    <div className="heading">
                        <h4>Frequently Asked Questions</h4>
                    </div>
                    <div >
                        <div id="faqrow" className="mx-3">
                            <div className="row w-100 h-100 align-items-center text-align-start justify-content-start border">
                                <div className="col-lg-1  col-2">
                                    <h3>Q</h3>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <p className="text-bold">How far is Vessella Woods from nearest metro station? <br />
                                        <span className="text-secondary">Vessella Woods is 3.86 Km from the nearest metro station. </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row w-100 border">
                                <div className="col-lg-1 col-2">
                                    <h3>Q</h3>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <p>Are there any safety related concerns in Kondapur? <br />
                                        <span className="text-secondary">Former and existing residents have rated this locality 4/5 on safety.
                                            This means, this is one of the good localities where safety is not a concern.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row w-100 h-100 align-items-center text-align-start justify-content-start border">
                                <div className="col-lg-1  col-2">
                                    <h3>Q</h3>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <p className="text-bold">Are there any sports facilities in this project? <br />
                                        <span className="text-secondary">Yes, there are Swimming Pool, Squash Court, Billiards, Table Tennis,
                                            Indoor Games and Chess facilities in Vessella Woods. </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row w-100 h-100 align-items-center text-align-start justify-content-start border">
                                <div className="col-lg-1  col-2">
                                    <h3>Q</h3>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <p className="text-bold">What are the security features of Vessella Woods?<br />
                                        <span className="text-secondary">Vessella Woods offers 24x7 Security,
                                            Security Cabin and InterCom to ensure all the residents feel safe and secure.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row w-100 h-100 align-items-center text-align-start justify-content-start border">
                                <div className="col-lg-1  col-2">
                                    <h3>Q</h3>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <p className="text-bold">How to get to Vessella Woods from railway station? <br />
                                        <span className="text-secondary">
                                            Vessella Woods and the railway station is 0.80 Km apart. It is easy to commute between the two points. </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row w-100 h-100 align-items-center text-align-start justify-content-start border">
                                <div className="col-lg-1  col-2">
                                    <h3>Q</h3>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <p className="text-bold">Are there any good hospitals in Vessella Woods neighbourhood? <br />
                                        <span className="text-secondary">
                                            Yes, there are good hospitals around Vessella Woods such as NAIDU EYE HOSPITAL, Sarada Nursing Home and Titan eye plus.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row w-100 h-100 align-items-center text-align-start justify-content-start border">
                                <div className="col-lg-1  col-2">
                                    <h3>Q</h3>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <p className="text-bold">How many housing societies are there in Kondapur, Hyderabad? <br />
                                        <span className="text-secondary">There are 260 housing societies in this locality. Nearly 67 projects are ongoing in this area.
                                            If you are looking for new projects, you can explore 56 brand new housing societies in Kondapur, Hyderaba </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row w-100 h-100 align-items-center text-align-start justify-content-start border">
                                <div className="col-lg-1  col-2">
                                    <h3>Q</h3>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <p className="text-bold">What is the location of Vessella Woods? <br />
                                        <span className="text-secondary">
                                            The location of the project is Kondapur, Hyderabad.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style={{ cursor: 'pointer' }} className="text-primary">Load More</p>
                        </div>
                    </div>
                </div>
                <div style={{ visibility: 'hidden' }} id="article">
                    article
                </div>
                <div className="article mt-5">
                    <div className="heading">
                        <h4>Interesting Reads</h4>
                    </div>
                    <div id="articleSlider" className="container slider">
                        <Slider {...article} {...articlesetting}>
                            <div className="card-wrapper ">
                                <div style={{ height: '320px' }} className="card">
                                    <img className="img-fluid w-100 h-100" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/04/Krishe-Pearl-270x180.jpg?1712926634000" alt="" />
                                    <div className="card-body">
                                        <p>Krishe Pearl: Apartments in Chengicherla <br />
                                            <span className="text-secondary">Apr 12, 2024</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div style={{ height: '320px' }} className="card">
                                    <img className="img-fluid w-100 h-100" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/11/building-240x180.jpeg?1712750931000" alt="" />
                                    <div className="card-body">
                                        <p>Top developers in Hyderabad in 2024 <br />
                                            <span className="text-secondary">Nov 14, 2023</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div style={{ height: '320px' }} className="card">
                                    <img className="img-fluid w-100 h-100" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/04/sreenidhi-serengeti-defualt-image-350x169.jpeg?1712747388000" alt="" />
                                    <div className="card-body">
                                        <p>Invest in Sreenidhi Serengeti, Tukkuguda <br />
                                            <span className="text-secondary">Apr 10, 2024</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div style={{ height: '320px' }} className="card">
                                    <img className="img-fluid w-100 h-100" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/04/Aparna-Newlands-329x180.jpg?1712645629000" alt="" />
                                    <div className="card-body">
                                        <p>Project review: Aparna Newlands, Hyderabad <br />
                                            <span className="text-secondary">Apr 05, 2024</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div style={{ height: '320px' }} className="card">
                                    <img className="img-fluid w-100 h-100" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/04/Svadha-mackenna-feature-image-240x180.jpg?1712247244000" alt="" />
                                    <div className="card-body">
                                        <p>Svadha Mackenna’s in Kollur, Hyderabad <br />
                                            <span className="text-secondary">Apr 04, 2024</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div style={{ height: '320px' }} className="card">
                                    <img className="img-fluid w-100 h-100" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/03/sampada-central-residency-350x178.jpg?1712232508000" alt="" />
                                    <div className="card-body">
                                        <p>Why invest in Ibrahimpatnam, Hyderabad? <br />
                                            <span className="text-secondary">Mar 28, 2024</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div style={{ height: '320px' }} className="card">
                                    <img className="img-fluid w-100 h00" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/03/Makuta-2-1-240x180.jpg?1711709467000" alt="" />
                                    <div className="card-body">
                                        <p>Bachupally, Hyderabad: An overview <br />
                                            <span className="text-secondary">Mar 28, 2024</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div style={{ height: '320px' }} className="card">
                                    <img className="img-fluid w-100 h-100" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/03/Ramky-One-Orion-1-350x147.jpg?1711603117000" alt="" />
                                    <div className="card-body">
                                        <p>Why invest in Pocharam, Hyderabad? <br />
                                            <span className="text-secondary">Mar 22, 2024</span></p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div id="quicklinks" className="mt-5">
                    <h5>Vessella Woods - Quick Links</h5>
                    <div className="mt-3 d-flex flex-wrap">
                        <span className="border rounded-3 m-2 p-2">Vessella Woods Floor Plans</span>
                        <span className="border rounded-3 m-2 p-2">Vessella Woods Photos and Videos</span>
                        <span className="border rounded-3 m-2 p-2">Vessella Woods Directions</span>
                        <span className="border rounded-3 m-2 p-2">Vessella Woods Amenities</span>
                    </div>
                </div>
                <div id="related" className="mt-5">
                    <div>
                        <h4>Related to your search</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <ul>
                                <li>Recently Launched Projects in Hyderabad</li>
                                <li>Suvela Sai Sreenija in Kondapur</li>
                                <li>Indis Viva City in Kondapur</li>
                                <li>The Regent by Auro Realty in Kondapur</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Popular Projects</li>
                                <li>Vertex Kingston Park in Gachibowli</li>
                                <li>Rajapushpa Green Dale in Tellapur</li>
                                <li>Saishakti Kingston in Gopanpally</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Similar Under Construction Projects</li>
                                <li>Radhey Raaga in Kollur</li>
                                <li>Riverscape in Bandlaguda Jagir</li>
                                <li>Shanta Sriram Brookwoods in Kismathpur</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ height: '10pt' }} className="mt-3">
                    <p className="text-secondary">The material and information contained herein is for general informational purposes only, and does not constitute an endorsement/warranty/representati... <br />
                        A naukri.com group website <br />
                        Copyright © 2024 Infoedge India Ltd. All rights reserved</p>
                </div>
                { /*   <div id="contact" className="bg-dark p-1 text-white">
                <div className="row mx-auto w-100">
                    <div className="col-lg-3 col-12">
                        <ul>
                            <li>99acres</li>
                            <li>Mobile Apps</li>
                            <li>Our Services</li>
                            <li>Price Trends</li>
                            <li>Post your Property</li>
                            <li>Real Estate Investments</li>
                            <li>Builders in India</li>
                            <li>Area Converter</li>
                            <li>Articles</li>
                            <li>Rent Receipt</li>
                            <li>Customer Service</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-12">
                        <ul>
                            <li>Company</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Careers with us</li>
                            <li>Terms & Conditions</li>
                            <li>Request Info</li>
                            <li>Feedback</li>
                            <li>Report a problem</li>
                            <li>Testimonials</li>
                            <li>Privacy Policy</li>
                            <li>Summons/Notices</li>
                            <li>Grievances</li>
                            <li>Safety Guide</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-12">
                        <ul>
                            <li>Our Partners</li>
                            <li>Naukri.com - Jobs in India</li>
                            <li>Naukrigulf.com - Jobs in middle east</li>
                            <li>Jeevansathi.com - Matrimonials</li>
                            <li>Brijj.com - Professional Networking</li>
                            <li>Shiksha.com - Education Career Info</li>
                            <li>Policybazaar.com - Insurance India</li>
                            <li>Meritnation.com - Online Educational Assessment</li>
                            <li>PaisaBazaar.com</li>
                            <li>AmbitionBox.com</li>
                            <li>FirstNaukri.com - A jobsite for campus hiring</li>
                            <li>Jobhai.com – Find Jobs Near You</li>
                            <li>Techminis.com - Tech news on the go</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-12">
                        <h5>Contact Us</h5>
                        <p>Toll Free - 1800 41 99099 <br />
                            <span className="text-secondary">Monday - Saturday (9:00AM to 11:00PM IST)</span>
                        </p>
                        <p>Email - feedback@99acres.com</p>
                        <div>
                            <h5>Connect with us</h5>
                            <p id="connect" className="fs-3">
                                <span><Facebook className="m-2" /></span>
                                <span><Youtube className="m-2" /></span>
                                <span><Twitter className="m-2" /></span>
                                <span><Instagram className="m-2" /></span>
                            </p>
                        </div>
                        <div>
                            <h5>Download the App</h5>
                            <div className="img w-50 d-flex">
                                <img className="img-fluid" src="https://static.99acres.com/universalapp/img/Play.png" alt="" />
                                <img className="img-fluid" src="https://static.99acres.com/universalapp/img/ios.png" alt="" />
                            </div>
                            <p style={{ fontSize: '8pt', color: 'gray' }}>Usage of 99acres.com to upload content showing area in non standard units or which enables targeting by religion/community/caste/race is prohibited. Please report inappropriate content by writing to us at <span className="text-primary">report abuse</span></p>
                        </div>
                        <div className="mt-2">
                            <p style={{ fontSize: '9pt' }} className="d-6">All trademarks are the property of their respective owners.
                                All rights reserved - Info Edge (India) Ltd.
                                A naukri.com group venture</p>
                        </div>
                    </div>
                </div>
            </div>*/}
                <div id="Arrow" className="rounded-5 arrow" >
                    <span><a href="#main"><ArrowUpCircle className="h2 fw-lighter" /></a></span>
                </div>
            </div >
        </div>
    );
}
