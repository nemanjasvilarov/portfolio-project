import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";

interface data {
  visitor_name: string;
  visitor_email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<data>({
    visitor_name: "",
    visitor_email: "",
    message: "",
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { ...formData },
        import.meta.env.VITE_PUBLIC_KEY
      );
      Swal.fire({
        title: "Success",
        text: "Email was successfully sent.",
        icon: "success",
      });
    } catch (err) {
      if (err instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong.",
        });
      }
    } finally {
      setFormData({ visitor_email: "", visitor_name: "", message: "" });
    }
  };

  return (
    <section className="portfolio-contact-section" id="contact">
      <div className={`portfolio-contact-div ${inView && "hidden"}`}>
        <h1 className="portfolio-contact-h1">Contact me</h1>
        <form
          onSubmit={handleSubmit}
          ref={ref}
          className="portfolio-contact-form "
        >
          <div className="portfolio-contact-form-content">
            <label htmlFor="name" className="portfolio-contact-form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="portfolio-contact-form-name"
              value={formData.visitor_name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  visitor_name: e.target.value,
                }))
              }
              placeholder="Name"
              required
            />
            <label htmlFor="email" className="portfolio-contact-form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="portfolio-contact-form-email"
              value={formData.visitor_email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  visitor_email: e.target.value,
                }))
              }
              placeholder="Email"
              required
            />
            <label htmlFor="text" className="portfolio-contact-form-label">
              Message:
            </label>
            <textarea
              name="text"
              id="text"
              cols={20}
              rows={10}
              className="portfolio-contact-form-text"
              value={formData.message}
              placeholder="Your message goes here"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              required
            ></textarea>
          </div>
          <button className="form-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
