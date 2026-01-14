import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Phone, CheckCircle2, Bus as Ambulance, Users, Award, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import axios from "axios";


const Counter = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 60,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

const HomePage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock emergency medical services at your doorstep'
    },
    {
      icon: Shield,
      title: 'Certified Team',
      description: 'Highly trained paramedics and medical professionals'
    },
    {
      icon: Ambulance,
      title: 'Modern Fleet',
      description: 'State-of-the-art ambulances with advanced medical equipment'
    },
    {
      icon: Award,
      title: 'Trusted Service',
      description: 'Years of experience serving Delhi NCR with excellence'
    }
  ];

  const stats = [
    { value: 10000, suffix: '+', label: 'Lives Saved' },
    { value: 24, suffix: '/7', label: 'Available' },
    { value: 50, suffix: '+', label: 'Ambulances' },
    { value: 100, suffix: '%', label: 'Satisfaction' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/enquiry",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    toast({
      title: "Enquiry Sent Successfully!",
      description: "We have received your request and will contact you shortly.",
      className: "bg-green-50 border-green-200 text-green-900",
    });

    setTimeout(() => window.location.reload(), 1500);

    } catch (error) {
      console.error("Form Error:", error);

      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Server issue. Please call us directly.",
      });

      setIsSubmitting(false);
    }
  };



  return (
    <>
      <Helmet>
        <title>Delhi Ambulance Services - 24/7 Emergency Medical Transport in Delhi</title>
        <meta name="description" content="Delhi Ambulance Services offers 24/7 emergency medical transport across Delhi NCR. ICU ambulance, ventilator support, air ambulance services, and more." />
      </Helmet>

      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-300" />
                  <span className="text-sm font-medium">Trusted Emergency Services</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Ambulance Service in Delhi – 24/7 Private & Outstation Ambulance Low Cost Ambulance Service to AIIMS, Safdarjung, RML & Dwarka
                </h1>
                
                <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed">
                  24/7 ambulance service in Delhi with trained medical staff, oxygen support and fast response for emergency and outstation transport long-distance transfer, trust Delhi's best private ambulance service.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919990909338">
                    <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 font-semibold text-lg px-8 py-6 w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: 999-090-9338
                    </Button>
                  </a>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-700 font-semibold text-lg px-8 py-6 w-full sm:w-auto">
                      View Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-2xl relative hidden lg:block"
              >
                <div className="relative z-10">
                  <img alt="Delhi Ambulance emergency medical transport service with modern ambulance" src="https://images.unsplash.com/photo-1696243144413-503bc482a608" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-2xl transform rotate-3" />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
            </svg>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome To Delhi Ambulance Service In Delhi NCR | Outside Ambulance At Just Rs. 12 Per KM
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Welcome To Delhi Ambulance Service Delhi Outside Ambulance Just Rs 12 Per km Delhi To UP , 
                Bihar , Bangal , Jharkhand All Over India Ambulance Service Just 15 Minutes. In Delhi NCR / Noida / Gurgaon/ Ghaziabad / Faridabad.
              </p>
              <p className=text-lg text-gray-500 max-w-3x1 mx-auto"> 
              <strong> Our Services</strong>
              Dead Body Freezr Box Ambulance, Dead Body Ambulance, ICU Ventilator Ambulance, AC Ambulance, Oxigen Ambulance, Emergency Ambulance, 
              Outside Ambulance, Freezer Box (Dead body freezer Box), Hars Van, Morchari Ambulance, Just 15 Minutes In Delhi /NCR, 
              All Type Ambulance Available 24 hours Service

              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-red-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-700 to-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                 <img
                src="https://images.unsplash.com/photo-1696243144332-04b59785d06b"
                alt="Emergency medical team providing critical care in ambulance"
                className="w-full h-full object-cover"
              />
                {/* <img alt="" 
                src="https://images.unsplash.com/photo-1696243144332-04b59785d06b" /> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Professional Emergency Care Across Delhi NCR
                </h2>
                <p className="text-lg text-red-100 mb-6 leading-relaxed">
                  With our fleet of advanced ambulances and highly trained medical professionals, we ensure that critical care reaches you in the shortest possible time. From ICU transport to air ambulance services, we cover all your emergency medical needs.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Advanced life support systems in all ambulances</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Certified paramedics and trained medical staff</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Outstation ambulance Delhi to Bihar @12per/km </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>GPS-enabled ambulances for fastest response</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Coverage across all major areas of Delhi NCR</span>
                  </li>
                </ul>
                <Link to="/coverage">
                  <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 font-semibold">
                    View Coverage Areas
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C240,100 480,0 720,20 960,40 1200,80 1440,40 L1440,0 L0,0 Z"
              fill="#7f1d1d"
            />
          </svg>
        </div>

        <section className="py-20 bg-gradient-to-br from-red-800 via-red-900 to-red-950 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                24/7 Ambulance & Critical Care Services
              </h2>

              <p className="text-lg text-red-100 mb-6 leading-relaxed">
                Delhi Ambulance Services delivers rapid, reliable and medically
                equipped ambulance solutions for emergency, ICU transfer, and
                outstation patient transport. Our mission is to save lives with speed
                and care.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 mt-0.5" />
                  <span>ICU & ventilator-supported ambulances</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 mt-0.5" />
                  <span>Emergency & non-emergency patient transfers</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 mt-0.5" />
                  <span>Outstation ambulance Delhi to all major cities</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 mt-0.5" />
                  <span>Trained paramedics & on-board medical staff</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-300 mt-0.5" />
                  <span>Affordable pricing & fast dispatch system</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+919990909338">
                  <Button
                    size="lg"
                    className="bg-white text-red-700 hover:bg-red-50 font-semibold"
                  >
                    Emergency Call
                  </Button>
                </a>

                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-700 font-semibold"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1696243144332-04b59785d06b"
                alt="ICU ambulance with advanced medical equipment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>


        {/* Enquiry Form Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="bg-red-700 p-8 text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Request Assistance</h2>
                <p className="text-red-100">Fill out the form below and we will get back to you immediately.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="1234567890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Required</Label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        name="serviceType"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="emergency">Emergency Ambulance</option>
                        <option value="icu">ICU Ambulance</option>
                        <option value="air">Air Ambulance</option>
                        <option value="mortuary">Mortuary Van</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / Details</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Please describe the medical situation or your requirements..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Request
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                  By submitting this form, you agree to be contacted by our team. For immediate emergencies, please call 999-090-9338 directly.
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
