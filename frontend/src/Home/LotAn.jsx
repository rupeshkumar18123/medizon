import "./home.css"
function LotAn() {
  return (
    <div className="container">
      <div className="row mb-3 text-center">
        <div className="col">
          <lottie-player
            src="https://lottie.host/e723d13e-d181-49e6-92cd-e9beaf526a77/1oCQ1rrK5H.json"
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
            src="https://lottie.host/cd6f307b-3465-4241-98a2-5cf1b06e4d12/0On4nB4CeC.json"
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
