import Header from "./Header and footer/Header";
import Footer from "./Header and footer/Footer";
import ContactForm from "./Contact Form/ContactForm";




const Contact = () => {
  
  return (
    <>
      <Header/>
      <main>
       <ContactForm/>
      </main>
      <Footer/>

    </>
  );
};

export default Contact;

/*const Contact = () => {
  return (
    <>
      <main>
        <div className="container">
          <h1>Contact</h1>
          <form>
            <input className="first" />
            <input className="first" />
            <input className="first" />
            <input className="first" />
            <button>Submit</button>
          </form>
        </div>
      </main>
    </>
  );
};
export default Contact;
*/
