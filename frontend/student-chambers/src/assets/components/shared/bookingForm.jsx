

import { useEffect, useState } from 'react'
// import myImage from '../../images/my-img.png'
import Input from './input'
import Status from './status'
import DropdownInput from './DropdownInput'
// import MessageBox from './messageBox'
import SecondaryBTN from './secondaryBtn'
import ReCAPTCHA from "react-google-recaptcha";
import RadioInput from './RadioInput'

import { useFormContext } from '../../../contexts/BookingContext'
import SearchableDropdownInput from './searchableSelectInput'

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Check missing fields
        if (
            !formData.name ||
            !formData.surname ||
            !formData.gender ||
            !formData.institution ||
            !formData.paymentMethod ||
            !formData.phone ||
            !formData.parentsPhone ||
            !formData.email ||
            !formData.roomType
        ) {
            setStatus({ status: false, statusText: 'Please fill out every field on the form!!' })
            return
        }

        // Check captcha
        if (!recaptchaToken) {
            setStatus({ status: false, statusText: 'Please complete the captcha!' })
            return
        }

        //backend captcha url endpoint
        const captchaUrl = 'https://us-central1-my-portfolio-637e8.cloudfunctions.net/api/verify-captcha';
        // SEND FORM DATA + CAPTCHA TOKEN
        await submitForm({formData: { ...formData }, recaptchaToken, captchaUrl, collectionName :'student-chambers-bookings' })

        if (loading) {
            setStatus({ status: true, statusText: 'Loading, wait a sec!!' })
        }

        if (success) {
            console.log(formData);
            setFormData({
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
            setRecaptchaToken(null)
            setStatus({ status: true, statusText: 'Success!!' })
        } else {
            setStatus({ status: false, statusText: 'Failed!!' })
        }
    }

    // Auto-dismiss status
    useEffect(() => {
        if (!status.statusText) return

        const timer = setTimeout(() => {
            setStatus({ status: false, statusText: '' })
        }, 10000)

        return () => clearTimeout(timer)
    }, [status])

    return (
        <div id='contacts' className=''>
            {/* <div className="">
                // {/* <img className='' src={myImage} alt="" /> */}
            {/* </div> */}

            <div className="">

                <h1 className=''>SECURE YOUR SPACE NOW</h1>
                <p className=''>Fill the form and get updates about your future residence</p>

                <form className='' onSubmit={handleSubmit}>
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            label_name="Name"
                            placeholder="John"
                        />

                        <Input
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            type="text"
                            label_name="Surname"
                            placeholder="Doe"
                        />

                        <RadioInput
                            name="gender"
                            label_name="Gender"
                            options={["Male", "Female", "Rather not say"]}
                            value={formData.gender}
                            onChange={handleChange}
                        />


                        <SearchableDropdownInput
                            name="institution"
                            label_name="Institution"
                            options={[
                                "Boston",
                                "TUT",
                                "TVET COLLAGE",
                                "UP",
                                "UNISA",
                                "Other"
                                ]}
                            value={formData.institution}
                            onChange={handleChange}
                        />

                        <DropdownInput
                            label_name="Payment Method"
                            options={["Bursary", "Parents/Me", "other"]}
                            placeholder="Select..."
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            handleChange={handleChange}
                        />

                        <DropdownInput
                            label_name="Room Type"
                            options={["Single", "Sharing", "Single with en-suit", "Sharing with en-suit"]}
                            placeholder="Select..."
                            name="roomType"
                            value={formData.roomType}
                            handleChange={handleChange}
                        />

                        <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="text"
                            label_name="Contact No."
                            placeholder="+27 12 345 6789"
                        />

                        <Input
                            name="parentsPhone"
                            value={formData.parentsPhone}
                            onChange={handleChange}
                            type="text"
                            label_name="Parent/Guidean/Spouce/Next of Kin contact No."
                            placeholder="+27 12 345 6789"
                        />


                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="text"
                            label_name="Email"
                            placeholder="johndoe@example.com"
                        />

                    <ReCAPTCHA className='pt-8'
                        sitekey={'6LcHBx4sAAAAAFDjVAdmD-JiIeE24QmJB3cHOk0H'}
                        onChange={(value) => setRecaptchaToken(value)}
                    />

                    <div className='pt-8'>
                        <SecondaryBTN
                            handleSubmit={handleSubmit}
                            loading={loading}
                            type='submit'
                            text="SUBMIT"
                        />
                    </div>
                </form>
            </div>

            {status.statusText && (
                <Status status={status.status} statusText={status.statusText} />
            )}
        </div>
    )
}
