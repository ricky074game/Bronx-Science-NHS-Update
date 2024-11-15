import React, { Component } from "react";
import { useEffect } from "react";
import Hero from "../components/Hero.jsx";

export default function Tutoring() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page pb-16">
      <Hero
        title="Tutoring"
        image="https://www.bxscience.edu/pics/mainLibraryeading19.jpg"
      />
      <section className="body-text pt-6">
        <div class="page-body-text">
          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Documenting Tutoring Hours (for NHS Members)
          </h2>
          <p>
            NHS members who are matched with a tutor must document their
            tutoring hours using{" "}
            <a
              href="https://docs.google.com/document/d/13rymvhpj5mqVk9mhyyL_SIg1nc6ucN6ZYK8CKDrOXeY/edit"
              target="_blank"
            >
              this
            </a>{" "}
            log. Upload the log at the end of each semester{" "}
            <a href="https://forms.gle/Fg18yiJX87GdWzwe8" target="_blank">
              here
            </a>
            .
          </p>
          <br></br>
          <br></br>

          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Requesting a Tutor (for Students)
          </h2>
          <p>
            If you would like assistance in any of your subjects, please use{" "}
            <a
              href="https://forms.gle/VEhVruZmdQhq91Lf9"
              target="_blank"
            >
              this
            </a>{" "}
            form to request a tutor.
          </p>
          <br></br>
          <br></br>

          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Requesting a Tutor (for Teachers)
          </h2>
          <p>
            Teachers may request an NHS tutor to assist them during SGI by
            submitting{" "}
            <a
              href="https://forms.gle/EWq88yaA7FjZV6gq7"
              target="_blank"
            >
              this
            </a>{" "}
            form.
          </p>
          <br></br>
          <br></br>

          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Qualifying a Tutor (for Teachers)
          </h2>
          <p>
            Please use{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgAFUTGbrrBstj6KcHTk0ZEqasbEzpCcYtzwGU9H5xRLzQsg/viewform"
              target="_blank"
            >
              this
            </a>{" "}
            google form to verify that your non-NHS member student is qualified
            to tutor in the subject that you teach.
          </p>
          <br></br>
          <br></br>
        </div>
      </section>
    </section>
  );
}
