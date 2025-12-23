import { useEffect, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Input from './input'
import Status from './status'
import DropdownInput from './DropdownInput'
import SecondaryBTN from './secondaryBtn'
import RadioInput from './RadioInput'
import SearchableDropdownInput from './searchableSelectInput'
import { useFormContext } from '../../../contexts/BookingContext'

export default function BookingForm() {
    const { loading, submitForm, error, success } = useFormContext()

    const [status, setStatus] = useState({
        status: false,
        statusText: ''
    })

    const [recaptchaToken, setRecaptchaToken] = useState(null)

    const [formData, setFormData] = useState({
       name: '',
       surname: '',
       gender: '',
       institution: '',
       paymentMethod: '',
       phone: '',
       parentsPhone: '',
       email: '',
       roomType: ''
    })

    const handleChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
    if (loading) {
        setStatus({ status: true, statusText: 'Submitting, please wait...' });
    }
}, [loading]);

useEffect(() => {
    if (success) {
        setFormData({
            name:'', surname:'', gender:'', institution:'', paymentMethod:'',
            phone:'', parentsPhone:'', email:'', roomType:''
        });
        setRecaptchaToken(null);
        setStatus({ status: true, statusText: 'Success! Your booking is submitted.' });
    }
}, [success]);

useEffect(() => {
    if (error) {
        setStatus({ status: false, statusText: 'Failed to submit. Please try again.' });
    }
}, [error]);


    const handleSubmit = async (e) => {
        e.preventDefault()

        // Check missing fields
        const requiredFields = ["name","surname","gender","institution","paymentMethod","phone","parentsPhone","email","roomType"]
        const emptyFields = requiredFields.filter(f => !formData[f])
        if (emptyFields.length > 0) {
            setStatus({ status: false, statusText: 'Please fill out every field on the form!!' })
            return
        }

        if (!recaptchaToken) {
            setStatus({ status: false, statusText: 'Please complete the captcha!' })
            return
        }

        const captchaUrl = 'https://us-central1-my-portfolio-637e8.cloudfunctions.net/api/verify-captcha';
        await submitForm({ formData: {...formData}, recaptchaToken, captchaUrl, collectionName: 'student-chambers-bookings' })

        // if (loading) setStatus({ status: true, statusText: 'Submitting, please wait...' })

        // if (success) {
        //     setFormData({
        //         name:'', surname:'', gender:'', institution:'', paymentMethod:'', 
        //         phone:'', parentsPhone:'', email:'', roomType:''
        //     })
        //     setRecaptchaToken(null)
        //     setStatus({ status: true, statusText: 'Success! Your booking is submitted.' })
        // } else if(error) {
        //     setStatus({ status: false, statusText: 'Failed to submit. Please try again.' })
        // }
    }

    useEffect(() => {
        if (!status.statusText) return
        const timer = setTimeout(() => setStatus({ status:false, statusText:'' }), 10000)
        return () => clearTimeout(timer)
    }, [status])

    return (
        <section id="contacts" className="section-padding bg-primary-White">
            <div className="max-w-container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-heading text-primary-blue pt-6 mb-2">
                        SECURE YOUR SPACE NOW
                    </h1>
                    <p className="text-base text-primary-charcoal">
                        Fill the form and get updates about your future residence
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        {/* Include your helper components without styling */}
                        <Input name="name" value={formData.name} onChange={handleChange} type="text" label_name="Name" placeholder="John"/>
                        <Input name="surname" value={formData.surname} onChange={handleChange} type="text" label_name="Surname" placeholder="Doe"/>
                        <RadioInput name="gender" label_name="Gender" options={["Male","Female","Rather not say"]} value={formData.gender} onChange={handleChange}/>
                        <SearchableDropdownInput name="institution" label_name="Institution" options={["Boston","TUT","TVET COLLAGE","UP","UNISA","Other"]} value={formData.institution} onChange={handleChange}/>
                        <DropdownInput name="paymentMethod" label_name="Payment Method" options={["Bursary","Parents/Me","Other"]} placeholder="Select..." value={formData.paymentMethod} handleChange={handleChange}/>
                        <DropdownInput name="roomType" label_name="Room Type" options={["Single","Sharing","Single with en-suit","Sharing with en-suit"]} placeholder="Select..." value={formData.roomType} handleChange={handleChange}/>
                        <Input name="phone" value={formData.phone} onChange={handleChange} type="text" label_name="Contact No." placeholder="+27 12 345 6789"/>
                        <Input name="parentsPhone" value={formData.parentsPhone} onChange={handleChange} type="text" label_name="Parent/Guardian/Spouse/Next of Kin contact No." placeholder="+27 12 345 6789"/>
                        <Input name="email" value={formData.email} onChange={handleChange} type="text" label_name="Email" placeholder="johndoe@example.com"/>

                        <ReCAPTCHA className='pt-4' sitekey={'6LcHBx4sAAAAAFDjVAdmD-JiIeE24QmJB3cHOk0H'} onChange={setRecaptchaToken}/>

                        <div className="pt-4">
                            <SecondaryBTN handleSubmit={handleSubmit} loading={loading} type="submit" text="SUBMIT"/>
                        </div>
                    </form>
                </div>

                {/* Status messages */}
{status.statusText && (
    <div className={`mt-6 p-4 rounded-lg flex items-center justify-between font-semibold ${
        status.status ? 'bg-primary-success text-white' : 'bg-primary-error text-white'
    }`}>
        <span>{status.statusText}</span>
        <button
            type="button"
            className="ml-4 text-white hover:text-gray-200 transition"
            onClick={() => setStatus({ status:false, statusText:'' })}
        >
            <i className="fa fa-times"></i>
        </button>
    </div>
)}


            </div>
        </section>
    )
}
