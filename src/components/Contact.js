import headerImg from "../assets/images/contact.png";
import { Card } from "./Skills";

const Contact = () => {
  return (
    <>
      <div className="section-header flex justify-center items-center h-30">
        <img
          src={headerImg}
          alt="Contact title"
          className="h-full w-auto object-contain"
        />
      </div>
      <div className="contact-form flex justify-center items-center h-5/6 ml-42">
        <Card title="Get in touch with me">
          <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-4">
            <input type="hidden" name="form-name" value="contact" className="hidden" />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" className="border p-2"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" className="border p-2"/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Message" className="border p-2" rows="4"></textarea>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Contact;
