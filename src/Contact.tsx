import Header from "./components/Header"

export default function Contact() {
  const contacts = [
    {
      icon: "fa-brands fa-whatsapp",
      text: "Chat on WhatsApp",
      link: "https://wa.me/qr/6UFKOOJUV6YCB1",
      color: "text-green-500",
    },
    {
      icon: "fa-brands fa-facebook",
      text: "Message on Facebook",
      link: "https://www.facebook.com/share/1CFQxjAFEo/",
      color: "text-blue-600",
    },
    {
      icon: "fa-solid fa-phone",
      text: "+20 1129757778",
      color: "text-yellow-400",
    },
    {
      icon: "fa-solid fa-envelope",
      text: "nasserabdallah920@gmail.com",
      color: "text-red-400",
    },
  ]

  return (
    <div className="Contact-container text-white px-5 md:px-[50px] pb-7 bg-[#0F172A] w-full min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col justify-center mt-[100px] items-center">
        <div className="text-center">
          <h1 className="text-[#38BDF8] text-5xl md:text-6xl font-bold drop-shadow-lg">
            Contact Me
          </h1>
          <p className="text-gray-400 mt-3 text-lg">Get in touch via the following platforms</p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 w-full max-w-md">
          {contacts.map((contact, index) =>
            contact.link ? (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 w-full bg-[#1E293B] rounded-2xl shadow-lg hover:shadow-[#38BDF8]/40 hover:scale-105 transition-all duration-300"
              >
                <i className={`${contact.icon} text-3xl md:text-4xl ${contact.color}`}></i>
                <span className="text-lg md:text-xl font-medium">{contact.text}</span>
              </a>
            ) : (
              <div
                key={index}
                className="flex items-center gap-4 p-5 w-full bg-[#1E293B] rounded-2xl shadow-lg hover:shadow-[#38BDF8]/40 hover:scale-105 transition-all duration-300"
              >
                <i className={`${contact.icon} text-3xl md:text-4xl ${contact.color}`}></i>
                <span className="text-lg md:text-xl font-medium">{contact.text}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
