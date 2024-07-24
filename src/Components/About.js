import React from 'react'
import "./About.css"
import kc8 from "./darjeeling/kc8.jpg"
import sukia from "./darjeeling/sukia.png"


function About() {
  return (
    <div className="we-are-block">

      <div id="about-us-section" className="section">

        <div className="about-us-info">
          <h2>About K.C Homestay</h2>
          <p>Welcome to K.C Homestay, your perfect retreat in the heart of Darjeeling, the Queen of Hills. Nestled amidst the serene landscapes, our homestay offers a harmonious blend of comfort and natural beauty, making it an ideal destination for those seeking tranquility and an immersive experience in the lap of nature.</p>
          <p>At K.C Homestay, we provide a cozy and inviting atmosphere where guests can unwind and enjoy the breathtaking views of the surrounding hills. Whether you're looking to escape the hustle and bustle of city life or explore the picturesque landscapes of Darjeeling, our homestay promises a memorable stay.</p>
          <a href="#" title="Learn More">About us</a>
        </div>

        <div className="about-us-image">
          <img src={sukia} width="644" height="458" alt="Lobby Image"/>
        </div>

      </div>

      <div id="history-section" className="section">

        <div className="history-image">
          <img src={kc8} alt="Building Pic"/>
        </div>

        <div className="history-info">
          <h2>Experience Tranquility at K.C Homestay</h2>
          <p>At K.C Homestay, we've meticulously crafted a space that goes beyond the conventional norms of accommodation. It is not merely a place to stay; it is an immersive experience designed to be your sanctuary for relaxation and enjoyment.</p>
          <p>Our thoughtfully designed rooms offer the perfect blend of modern amenities and traditional charm, ensuring a comfortable and delightful stay for all our guests. Enjoy a cup of Darjeeling tea while soaking in the panoramic views, or take a leisurely stroll through the nearby tea gardens and local attractions.</p>
          <p>Join us at K.C Homestay and experience the warmth of our hospitality as you create unforgettable memories in one of the most beautiful hill stations in the world.</p>
          <a href="#" title="Learn More">About us</a>
        </div>

      </div>

    </div>
  )
}

export default About