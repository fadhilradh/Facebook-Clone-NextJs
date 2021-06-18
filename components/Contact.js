import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div>
      <Image
        alt="contact"
        className="rounded-full"
        src={src}
        width={50}
        height={50}
        layout="fixed"
        objectFit="cover"
      />
      <p>{name}</p>
    </div>
  );
}

export default Contact;
