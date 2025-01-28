import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Books Swap Hub</h1>
      <p>Discover and swap books with others!</p>
      <h1>Welcome to Book Swap Hub</h1>
      <p>
        Swap your shelves: Rent or sell your books and find your next great read
        from others!
      </p>
      <div className="search-container">
        <input type="text" placeholder="Search by title/author..." />
        <button
          type="button"
          onClick={() => {
            /* Implement search functionality */
          }}
        >
          Search
        </button>
      </div>
      <h2>Browse Categories</h2>
      <div className="categories">
        <button>Rent</button>
        <button>Sale</button>
      </div>
      <h2>About Us</h2>
      <p>
        Welcome to Book Swap Hub, your go-to platform for affordable academic
        resources! We are a vibrant community of students dedicated to making
        education accessible and budget-friendly.
      </p>
      <p>
        At Book Swap Hub, we believe that knowledge should be shared. Our
        platform allows students to easily <strong>sell</strong>,{" "}
        <strong>rent</strong>, or <strong>purchase</strong> books from fellow
        students. Join us in creating a peer-to-peer marketplace that empowers
        everyone to thrive in their academic journey!
      </p>
      <p>Discover how we make book trading simple and enjoyable:</p>
      <ul>
        <li>🔍 Browse our extensive catalog of available books.</li>
        <li>💬 Connect with peers to rent or buy directly.</li>
        <li>⭐ Share your experiences by leaving reviews to help others!</li>
      </ul>
      <p>
        Join us today and start your journey towards smarter, more sustainable
        studying!
      </p>
      <h2>What Our Users Say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            "I found the perfect textbook at a fraction of the cost! The Book
            Swap Hub made it so easy to connect with other students."
          </p>
          <p>
            <strong>- Sarah L.</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "Renting books instead of buying is a game changer. I save so much
            money each semester!"
          </p>
          <p>
            <strong>- Jason M.</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "I love being able to sell books I no longer need. It’s great to
            help others while making some extra cash!"
          </p>
          <p>
            <strong>- Emily R.</strong>
          </p>
        </div>
      </div>
      <h2>Latest Updates</h2>
      <div className="updates">
        <div className="update">
          <h3>Exciting News: Partnership with Local Bookstores!</h3>
          <p>
            We're thrilled to announce our new partnership with local
            bookstores! Now you can access exclusive discounts and offers when
            you shop with our partner stores.
          </p>
          <p>
            <em>Posted on: January 29, 2025</em>
          </p>
        </div>
        <div className="update">
          <h3>Upcoming Book Fair</h3>
          <p>
            Join us for our annual Book Fair on October 20, 2024! Great deals
            and more opportunities to swap books!
          </p>
          <p>
            <em>Posted on: Januaryy 28, 2025</em>
          </p>
        </div>
        <div className="update">
          <h3>Referral Program Launch</h3>
          <p>
            Invite your friends and earn credits for every successful referral!
            Help grow our community!
          </p>
          <p>
            <em>Posted on: January 25, 2025</em>
          </p>
        </div>
      </div>
      <footer>
        <p>
          <a href="#about">Book Swap Hub</a> |<a href="#contact"> Contact Us</a>{" "}
          |<a href="#"> FAQs</a> |<a href="#"> Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};