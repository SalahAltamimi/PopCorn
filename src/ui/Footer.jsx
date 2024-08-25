function Footer() {
  return (
    <footer className="bg-gray-950 text-slate-100 p-4">
      <p className="text-sm tracking-wide">
        Developed By Salah Abu Farha. All Rights Reserved ©{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
