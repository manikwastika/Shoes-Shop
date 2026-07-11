import CustomNavbar from "../components/Fragments/Navbars";

function ContactPage() {
  return (
    <div className="w-full h-screen">
      <CustomNavbar
        bgStyle="bg-white"
        hoverBgRight="bg-gray-700"
        textColorRight="text-black"
        hoverTextRight="text-white"
        active="contact"
        ColorRight="text-white bg-black"
      />
    </div>
  );
}

export default ContactPage;
