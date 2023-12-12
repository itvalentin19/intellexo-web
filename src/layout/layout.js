import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
  return (
    <div className="bg-zinc-950 flex flex-col">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
