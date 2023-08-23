import React from "react";
import honey from "/src/assets/images/about/Rectangle 19.png";

function About() {
  return (
    <>
      <div className="about">
        <section className="about-text__content">
          <h2 className="about-text__content-title">About Us</h2>
          <p className="about-text__content-description">
            Rune, is an African dessert company that specializes in creating
            unique and delicious African - inspired desserts. Our mission is to
            provide delicious, authentic African desserts that bring the joy of
            African culture to our customers. Our recipes are crafted with the
            highest quality ingredients, and we strive to bring a unique and
            flavorful experience to every bite. whether you’re looking for
            something to satisfy your sweet tooth or you want to try something
            new, you’ve come to the right place. Let Rune take you on a
            delicious journey of flavors from around the world!{" "}
          </p>
        </section>
        <section className="about__image-card">
          <img
            src={honey}
            alt="Delicious Delicacy"
          />
        </section>
      </div>
    </>
  );
}

export default About;
