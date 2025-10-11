/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry({img, title, country, googleMapsLink, dates, text}) {
    return (
        <>
            <div className="entry">
                <div className="img-container">
                    <img className="entry-img" src="https://scrimba.com/links/travel-journal-japan-image-url" />
                </div>
                <div className="entry-content">
                    <div className="entry-content-line1">
                        <img className="marker" src="./images/marker.png" />
                        <p className="country-name">Japan</p>
                        <a className="maps-link" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                    </div>
                    <h2 className="place-name">Mount Fuji</h2>
                    <h5 className="dates">12 Jan, 2021 - 24 Jan, 2021</h5>
                    <p className="place-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </>
    )
}

// export default function Entry() {
//     return (
//         <>
//             <div className="entry">
//                 <div className="img-container">
//                     <img className="entry-img" src="https://scrimba.com/links/travel-journal-japan-image-url" />
//                 </div>
//                 <div className="entry-content">
//                     <img className="marker" src="./images/marker.png" />
//                     <span className="country-name">JAPAN</span>
//                     <a className="maps-link" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
//                     <h2 className="place-name">Mount Fuji</h2>
//                     <h5 className="dates">12 Jan, 2021 - 24 Jan, 2021</h5>
//                     <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
//                 </div>
//             </div>
//         </>
//     )
// }