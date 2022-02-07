import { useForm } from "react-hook-form";
import { contactForm } from "../services/Api";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await contactForm(data.firstname, data.email, data.message);
      alert(
        "Votre message a bien été posté, vous recevrez une réponse de notre roi quand il aura du temps à perdre"
      );
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div className="h-screen">
        <h1 className="text-yellow-600 font-bold text-2xl text-center mb-8">
          Contact Form
        </h1>
        <div className="w-4/5 mx-auto rounded-2xl border-2 border-black bg-gray-900">
          <form
            className="p-4 h-60 flex flex-col justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-yellow-600 font-bold" htmlFor="firstname">
              Firstname :
            </label>
            <input
              className="w-4/5 mx-auto rounded-full italic px-2"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="ex: Jason"
              {...register("firstname", { required: true })}
            ></input>
            <label className="text-yellow-600 font-bold" htmlFor="email">
              Email :
            </label>
            <input
              className="w-4/5 mx-auto rounded-full italic px-2"
              type="text"
              id="email"
              name="email"
              placeholder="ex: jasonisanidiot@colmail.com"
              {...register("email", { required: true })}
            ></input>
            <label className="text-yellow-600 font-bold" htmlFor="message">
              Message : <p className="italic">(255 characters)</p>
            </label>
            <input
              className="w-4/5 mx-auto rounded-full italic px-2 mb-4"
              type="text"
              id="message"
              name="message"
              placeholder="Enter your message here"
              {...register("message", { required: true })}
            ></input>
            <button
              className="px-2 w-16 mx-auto mb-4 rounded-full border-2 border-black bg-yellow-600 font-bold"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
