import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">
            

            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15949.30379531193!2d45.30877425!3d2.0253032999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5841ff320aa655%3A0xe45fb0ed5f598b5c!2sShamo+Hotel!5e0!3m2!1sen!2sso!4v1561442529466!5m2!1sen!2sso" 
            width="100%" 
            height="500px" 
            frameBorder="0"
            allowFullscreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location
