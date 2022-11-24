import "../TermsAndConditions/TermsAndConditions.css";

import PageHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";

const index = () => {
  return (
    <>
      
      <PageHero />
      <div className="condition">
        <PageIndication
          page="Terms and Conditions"
          other="Terms and Conditions"
        />
      </div>
      <section className="terms">
        <div className="terms-hero">
          <h3 className="h3">THESE ARE OUR TERMS OF USING THIS WEBSITE</h3>
          <div>
            <div>
              <h3 className="h3">Item one</h3>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
                amet diam a blandit ultricies quis. Enim consequat neque vitae
                cras. Enim quam tellus consequat non facilisis dui. Vitae
                viverra ut ut turpis vulputate cras. In imperdiet mi, id diam
                egestas blandit arcu, cras nunc. Pretium ipsum neque nullam sit
                auctor bibendum id. Amet ultrices sed lectus phasellus. Non et,
                scelerisque vestibulum velit, velit. Volutpat volutpat ut
                pretium vivamus consectetur viverra molestie aliquet pharetra.
                Non tincidunt amet netus proin id. In tellus, feugiat quam
                suspendisse. Eu phasellus sollicitudin lacus quis malesuada enim
                tellus tincidunt.
              </p>
            </div>
            <div>
              <h3 className="h3">Item one</h3>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
                amet diam a blandit ultricies quis. Enim consequat neque vitae
                cras. Enim quam tellus consequat non facilisis dui. Vitae
                viverra ut ut turpis vulputate cras. In imperdiet mi, id diam
                egestas blandit arcu, cras nunc. Pretium ipsum neque nullam sit
                auctor bibendum id. Amet ultrices sed lectus phasellus. Non et,
                scelerisque vestibulum velit, velit. Volutpat volutpat ut
                pretium vivamus consectetur viverra molestie aliquet pharetra.
                Non tincidunt amet netus proin id. In tellus, feugiat quam
                suspendisse. Eu phasellus sollicitudin lacus quis malesuada enim
                tellus tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default index;
