import Footer from "./component/Footer";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <h1 id="header">This is Header</h1>
      <p>This is React Tutorial</p>
    </div>
  );
};
function Content() {
  return (
    <div>
      <h4>This is Content</h4>
      <Footer />
    </div>
  );
}
export { Header, Content };
