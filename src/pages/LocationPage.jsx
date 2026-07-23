import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Phone } from "lucide-react";

const LocationPage = () => {

const { location } = useParams();

const area = location
.replaceAll("-", " ")
.replace(/\b\w/g, c => c.toUpperCase());


return (

    <>

        <Helmet>

            <title> Ambulance Service in {area} | Delhi Ambulance</title>

            <meta name="description" content={`24x7 Ambulance Service in ${area}. ICU Ambulance, Oxygen Ambulance, Ventilator Ambulance available.`}/>

        </Helmet>

            <div className="pt-24">

                <div className="max-w-7xl mx-auto px-4">

                    <h1 className="text-5xl font-bold text-red-700 mb-6"> Ambulance Service in {area}</h1>

                    <p className="text-xl text-gray-700 leading-9 text-justify"> Looking for the best Ambulance Service in <strong>{area}</strong>? Delhi Ambulance Services provides fast, 
                        reliable, affordable and professional emergency ambulance services 24 hours a day, 7 days a week. Whether you need an ICU Ambulance, Oxygen Ambulance, Ventilator Ambulance, 
                        Cardiac Ambulance, Basic Life Support Ambulance, Advanced Life Support Ambulance, Air Ambulance, Train Ambulance, Patient Transfer Ambulance, Dead Body Ambulance or Outstation Ambulance Service, our 
                        emergency response team is always ready to serve you. We understand that every second matters during a medical emergency. Our experienced drivers, trained paramedics, emergency medical technicians and 
                        critical care staff ensure that every patient receives immediate medical attention while being safely transported to the nearest hospital or any destination across India.Our ambulance network covers every locality of {area}, 
                        nearby hospitals, residential areas, commercial zones, highways and all surrounding regions. With GPS-enabled ambulances and experienced medical staff, we provide one of the fastest ambulance dispatch services in Delhi NCR.

                    </p>

                <section className="mt-16">

                    <h2 className="text-3xl font-bold text-red-700 mb-8"> Our Ambulance Services in {area} </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="p-6 rounded-xl shadow">
                            <h3 className="font-bold text-xl mb-3">ICU Ambulance</h3>
                            <p>Advanced ICU Ambulance with ventilator, monitor and trained paramedics.</p>
                        </div>

                        <div className="p-6 rounded-xl shadow">
                        <h3 className="font-bold text-xl mb-3">Oxygen Ambulance</h3>
                        <p>24x7 Oxygen Ambulance available for emergency patient transfer.</p>
                        </div>

                        <div className="p-6 rounded-xl shadow">
                        <h3 className="font-bold text-xl mb-3">Ventilator Ambulance</h3>
                        <p>Critical care ambulance with portable ventilator and ICU setup.</p>
                        </div>

                        <div className="p-6 rounded-xl shadow">
                        <h3 className="font-bold text-xl mb-3">Cardiac Ambulance</h3>
                        <p>Fully equipped cardiac ambulance with ECG monitor and defibrillator.</p>
                        </div>

                        <div className="p-6 rounded-xl shadow">
                            <h3 className="font-bold text-xl mb-3">Patient Transfer</h3>
                            <p>Hospital to hospital and home to hospital transfer services.</p>
                        </div>

                        <div className="p-6 rounded-xl shadow">
                            <h3 className="font-bold text-xl mb-3">Outstation Ambulance</h3>
                            <p>Delhi to Bihar, UP, Punjab, Rajasthan, Haryana and all India.</p>
                        </div>

                    </div>

                    <section className="mt-16">

                        <h2 className="text-3xl font-bold text-red-700 mb-6">Nearby Areas Covered</h2>

                        <p className="text-gray-700 leading-8"> Our ambulance services are available in {area}, Lajpat Nagar,
                            Saket, Malviya Nagar,Hauz Khas, Green Park, AIIMS,Safdarjung, South Extension, Defence Colony, Greater Kailash,
                            Nehru Place, Kalkaji, Okhla, Vasant Kunj, Connaught Place, Karol Bagh, Janakpuri, Dwarka, Pitampura, Rohini, Ashok Vihar,
                            Mayur Vihar, Preet Vihar, Noida, Ghaziabad, Faridabad, Gurgaon and all Delhi NCR.

                        </p>

                    </section>

                </section>

                <div className="grid md:grid-cols-2 gap-6 mt-10">

                    <div className="p-6 rounded-xl shadow bg-white">

                        <h2 className="text-2xl font-bold"> Our Services </h2>

                        <ul className="mt-5 space-y-3">
                            <li>✔ ICU Ambulance</li>
                            <li>✔ Oxygen Ambulance</li>
                            <li>✔ Ventilator Ambulance</li>
                            <li>✔ Emergency Ambulance</li>
                            <li>✔ Dead Body Ambulance</li>
                            <li>✔ Patient Transfer</li>

                        </ul>

                    </div>

                    <div className="p-6 rounded-xl bg-red-700 text-white rounded-xl">

                        <h2 className="text-2xl font-bold"> Emergency Booking </h2>

                        <a href="tel:+919990909338" className="mt-6 inline-flex items-center bg-white text-red-700 px-6 py-3 rounded-lg" >
                            <Phone className="mr-2"/> 9990909338
                        </a>

                    </div>

                </div>

                </div>

            </div>

    </>

    );

};

export default LocationPage;