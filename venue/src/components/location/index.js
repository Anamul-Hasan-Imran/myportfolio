import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.527188873013!2d90.42000306224575!3d23.781077881847047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c799f137dec3%3A0xb40e16668cbebb8a!2sGulshan+Badda+Link+Rd%2C+Dhaka+1212!5e0!3m2!1sen!2sbd!4v1558849409645!5m2!1sen!2sbd"
                width="100%"
                height="500px"
                frameborder="0"
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>

            </div>

        </div>
    )
}

export default Location
