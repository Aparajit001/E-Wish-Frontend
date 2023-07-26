import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We are here to ease your marketing!! Get your desired product at one click.
            All your information is safe with us and we do not share that with any third party.
            Thank You.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
