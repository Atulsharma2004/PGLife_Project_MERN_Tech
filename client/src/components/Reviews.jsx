import StarOutlineIcon from "@mui/icons-material/StarRate";
import image from "../image/img/man.png";
import logo from "../image/img/dp.jpg";

const Testimonial = () => {
  return (
    <div id="testimonial" className="py-8 md:py-12">
      <div className="work-section-top text-center">
        <h4 className="text-primary-subheading text-2xl md:text-3xl pb-2">
          Testimonial
        </h4>
        <h1 className="text-primary-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          What They Are Saying
        </h1>
        <p className="text-primary-text text-base md:text-lg">
          How user-friendly is the app? Is it easy to navigate and use? How
          would you rate the PGLife app overall?
        </p>
      </div>

      <div className="flex flex-col md:items-center justify-center  space-y-8 md:space-y-0 space-x-0 md:space-x-8">
        {/* Testimonial Card 1 */}
        <div
          className="text-center w-full max-w-screen-md md:mb-8 mb-4 py-4"
          style={{ backgroundColor: "rgb(231,224,224)" }}
        >
          <div className="flex items-center justify-center">
            <img
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              src={image}
              alt="review"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mt-4">Narayan</h2>
          <div className="flex items-center justify-center space-x-1">
            <StarOutlineIcon className="w-5 h-5" />
            <StarOutlineIcon className="w-5 h-5" />
            <StarOutlineIcon className="w-5 h-5" />
            <StarOutlineIcon className="w-5 h-5" />
            <StarOutlineIcon className="w-5 h-5" />
          </div>
          <p className="text-base md:text-lg mt-4">
            The PGLife website is a treasure trove of knowledge and inspiration.
            Its engaging articles, insightful resources, and user-friendly
            design make it a go-to platform for anyone seeking personal growth
            and fulfillment.
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div
          className="text-center w-full max-w-screen-md md:mb-8 mb-4 py-4"
          style={{ backgroundColor: "rgb(231,224,224)" }}
        >
          <div className="flex items-center justify-center">
            <img
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              src={logo}
              alt="review1"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mt-4">Joy.</h2>
          <div className="flex items-center justify-center space-x-1">
            <StarOutlineIcon className="w-5 h-5" />
            <StarOutlineIcon className="w-5 h-5" />
            <StarOutlineIcon className="w-5 h-5" />
            <StarOutlineIcon className="w-5 h-5" />
            <StarOutlineIcon className="w-5 h-5" />
          </div>
          <p className="text-base md:text-lg mt-4">
            The PGLife website is a transformative hub of wisdom and
            inspiration. Its diverse resources, engaging community, and
            intuitive interface make it an essential tool for personal growth
            seekers. Highly recommended!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
