import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="my-20 w-[80vw]">
        We respect your privacy at <Link to="/"> www.happyprancer.com </Link>,
        are committed to protecting the privacy of all our customers. We do not
        sell, trade, rent, or loan any identifiable information at the
        individual level regarding its customers to any third party. Any
        information you give us is held with utmost care and security. This
        information is collected primarily to ensure that we are able to fulfil
        your need and to deliver to you a truly personalized online Zumba
        fitness experience. When you register with us at{" "}
        <Link to="/" className="text-blue-500"> www.happyprancer.com  </Link>
        , you have the option of receiving e-mails regarding updates about
        special offers and new classes including any significant upgrades from
        us.
        <br />
        <br />
        We are also bound to cooperate fully as and when required by law or
        legal process to provide information about a customer. We may share
        non-personal, non-individual statistical or demographic information in
        aggregate form with our marketing partners adverting agencies or other
        third-parties for market research and advertising purposes. In other
        words, we will not tell our marketing partners that you purchased/joined
        a specific subscription/class, but we may tell them how many customers
        subscribed that class. Happyprancer have full rights to cancel the
        subscription/registration before processing the shipping at any time.
        <br />
        <br />
        Acknowledgement -
        <li>
          You're participating in Happyprancer virtual classes during which you
          will receive information and instruction about Happyprancer dance
          workouts. You recognize that Happyprancer requires physical exertion,
          which may be strenuous and may cause physical injury, and you're fully
          aware of the risks involved.
        </li>
        <li>
          You understand that it is your responsibility to consult with a
          physician prior to and regarding my participation any physical fitness
          program, including Zumba. You represent and warrant that you have no
          medical condition that would prevent your participation in physical
          fitness activities.
        </li>
        <li>
          You considerate of being permitted to participate in the Happyprancer
          virtual classes, you agree to assume full responsibility for any risk,
          injuries or damages, known and unknown, which you might incur as a
          result of participating in the program.
        </li>
        <li>
          In further consideration of being permitted to participate in the
          Happyprancer virtual classes, you knowingly, voluntarily and expressly
          waive any claim you may have against the Instructor, the founder or
          any core member for injuries or damages that you may sustain as a
          result of participating in Happyprancer sessions.
        </li>
        <br />
        When you sign up in our website at{" "}
        <Link to="/signup" className="text-blue-500"> www.happyprancer.com </Link>
        , you agree to follow our privacy policy automatically.
        <br />
        <br />
        Free signup and subscriptions don’t mean for lifetime use, we hold the
        right to change the subscription and classes from free to paid at any
        time.
        <br />
        <br />
        Happyprancer, may amend this policy from time to time.
        <br />
        <br />
        How do we use "cookies"?
        <br />
        <br />
        "Cookies" are small pieces of information that are stored by your
        browser on your computer's hard drive. Our cookies do not contain any
        personally identifying information, but they do enable us to identify
        you in case you have visited us earlier and to store items in your
        shopping cart between visits. Most Web browsers automatically accept
        cookies, but you can usually change your browser to prevent that. Even
        without a cookie, you can still use most of the features in our store,
        including placing items in your shopping cart and purchasing them.
        <br />
        <br />
        In summary, we respect the privacy of our customers completely. We use
        the information we collect on the store to enhance your overall
        experience at Happyprancer. We do not sell, trade, or rent your personal
        information to others.
        <br />
        <br />
        Enjoy online Zumba Classes at <Link to="/" className="text-blue-500"> www.happyprancer.com</Link>.
        <hr />
        <em>
          In case of any queries, concerns, legal or suggestions, please reach
          out to us at
          <span
            onClick={() => (window.location = "mailto:admin@happyprancer.com")}
          >
            {" "}
            admin@happyprancer.com
          </span>
          .
        </em>{" "}
        <br />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
