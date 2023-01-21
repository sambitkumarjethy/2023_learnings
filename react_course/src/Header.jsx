import Footer from "./component/Footer";
const Header = () => {
  return (
    <div>
      <h1>This is Header</h1>
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
