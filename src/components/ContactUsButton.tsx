"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import { ReactNode } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function ContactUsButton({ children }: ContactUsButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>{children}</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            We&apos;d love to hear from you
          </DialogTitle>
          <DialogDescription className="flex justify-center">
            <ContactInfo />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export const ContactInfo = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col space-y-2 my-4 text-lg">
      <SimpleForm />
    </div>
  );
};

const SimpleForm = () => {
  // State variables to store form data and submission status
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Perform form submission logic here, such as sending data to a server

    var endpoint =
      `https://docs.google.com/forms/d/e/1FAIpQLSdUSh2V_LM3ovuvPwwEfiuldCJrhpKrTVnJIglmGjy4r_3yUQ/formResponse?&submit=Submit?usp=pp_url&entry.1007110896=${name}&entry.28994024=${phoneNumber}&entry.1278954591=${message}`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();

    setName("");
    setPhoneNumber("");
    setMessage("");
    // Set submission status to true
    setSubmitted(true);
  };

  // Render the form or the thank you message based on submission status
  const renderFormOrMessage = () => {
    if (submitted) {
      return (
        <p className="text-green-600 py-4">
          Thanks! We&apos;ll reach out shortly.
        </p>
      );
    } else {
      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block">
              Your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block">
              Message (optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 w-full h-24"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      );
    }
  };

  return <div className="flex flex-col space-y-2">{renderFormOrMessage()}</div>;
};

export default SimpleForm;

// export const ContactInfo = () => {
//   const { toast } = useToast();

//   return (
//     <div className="flex flex-col space-y-2 my-4 text-lg">
//       <div className="flex items-center space-x-2">
//         <a
//           href="https://www.microtraks.com/contact"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center space-x-2"
//         >
//           <PublicIcon className="text-green-700" />
//           <button>microtraks.com/contact</button>
//         </a>
//       </div>
//       <div className="flex items-center space-x-2">
//         <CallIcon className="text-green-700" />
//         <CopyToClipboard
//           text="(443) 995-8658"
//           onCopy={() => {
//             toast({
//               title: "Phone number copied to clipboard",
//             });
//           }}
//         >
//           <button>(443) 995-8658</button>
//         </CopyToClipboard>
//       </div>
//       <div className="flex items-center space-x-2">
//         <EmailIcon className="text-green-700" />
//         <CopyToClipboard
//           text="sales@microtraks.com"
//           onCopy={() => {
//             toast({
//               title: "Email copied to clipboard",
//             });
//           }}
//         >
//           <button>sales@microtraks.com</button>
//         </CopyToClipboard>
//       </div>
//     </div>
//   );
// };
export type ContactUsButtonProps = {
  children: ReactNode;
};
