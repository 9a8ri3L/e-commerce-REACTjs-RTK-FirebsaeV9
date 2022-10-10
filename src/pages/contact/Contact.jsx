import { useEffect } from "react";
import useTitle from "../../helpers/useTitle";
import { StyledContact } from "./Contact.styled";
import { FcBusinessContact } from "@react-icons/all-files/fc/FcBusinessContact";

const Contact = () => {
  useTitle("ONLINEstore | Contact");

  useEffect(() => {
    window.scrollTo(0, -100);
  }, []);

  return (
    <StyledContact>
      <h1>Contact</h1>
      <FcBusinessContact size={150} />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, quos?
      Obcaecati accusamus illum voluptatibus iure sapiente alias, similique
      nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam
      commodi repellendus magnam ea similique quis obcaecati ducimus suscipit,
      voluptate saepe nostrum veritatis excepturi recusandae necessitatibus ab
      cum qui, perspiciatis odio quae quod! Officiis mollitia sit iure sed sint!
      Quibusdam, mollitia. Cum ea, id neque incidunt quaerat reprehenderit
      tempora dicta?
      <h2>info@example.com</h2>
    </StyledContact>
  );
};

export default Contact;
