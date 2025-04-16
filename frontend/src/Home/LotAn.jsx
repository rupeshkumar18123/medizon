import "./home.css"
function LotAn() {
  return (
    <div className="container">
      <div className="row mb-3 text-center">
        <div className="col">
          <lottie-player
            src="https://lottie.host/d1dd4608-9883-48f1-b755-abb34ce61580/mAnJJnvfbi.json"
            background="#FFFFFF"
            speed={1}
            style={{  height: 300 }}
            loop=""
            autoPlay=""
            direction={1}
            mode="normal"
          />
        </div>
       
        <div className="col ">
          <lottie-player
            src="https://lottie.host/58919607-d4ee-4ccb-b353-ccb72c3b1173/BMI2akE8q2.json"
            background="#FFFFFF"
            speed={1}
            style={{ height: 300 }}
            loop=""
            autoPlay=""
            direction={1}
            mode="normal"
          />
        </div>
      </div>
      <div className="row mb-3 text-center">
        <div className="col text-v">Video Consult</div>
        <div className="col text-v">Lab Test</div>
      </div>
    </div>
  );
}
export default LotAn;
