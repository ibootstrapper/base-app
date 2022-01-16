export function Button(text: String) {
  return (
    <a
      href="#"
      className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
    >
      {text}
    </a>
  );
}

export function Header4(text: String) {
  return (
    <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">{text}</h4>
  );
}
