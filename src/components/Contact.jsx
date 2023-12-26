import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Your EmailJS service ID, template ID, and Public Key
		const serviceId = "service_2xyk9za";
		const templateId = "template_vyg7ei4";
		const publicKey = "bNPglB2V_cF63dmar";

		// Create a new object that contains dynamic template params
		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: "Jannatur Nur",
			message: message,
		};

		// Send the email using EmailJS
		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log("Email sent successfully!", response);
				setName("");
				setEmail("");
				setMessage("");
			})
			.catch((error) => {
				console.error("Error sending email:", error);
			});
	};

	return (
		<div className="">
			<h2 className="text-5xl mb-5 text-center">Contact Me</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-5 w-1/2 mx-auto my-20 text-black">
				<input
					type="text"
					placeholder="Your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="bg-[#112240] p-5 rounded-md border-2 border-primary focus:outline-white"
				/>
				<input
					type="email"
					placeholder="Your Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="bg-[#112240] p-5 rounded-md border-2 border-primary focus:outline-white"
				/>
				<textarea
					type="text"
					placeholder="Type your message here...."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="bg-[#112240] p-5 rounded-md border-2 border-primary focus:outline-white"></textarea>
				<button type="submit" className="button-primary">
					Send Email
				</button>
			</form>
		</div>
	);
};

export default Contact;
