const CRTOverlay = () => {
  return (
    <div className="crt-container">
      <div className="crt-before"></div>
      <div className="crt-after"></div>
    </div>
  );
};

const crtRoot = document.getElementById('crt-root');
if (crtRoot) {
  ReactDOM.createRoot(crtRoot).render(<CRTOverlay />);
}