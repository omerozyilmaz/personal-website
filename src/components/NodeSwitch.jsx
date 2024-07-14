export default function NodeSwitch() {
  return (
    <div className="nodeSwitch">
      <div className="darkMode pd-r10px">
        <input type="checkbox" name="switch" id="switch" />
        <label for="switch"></label>
      </div>
      <div className="darkMode-left">
        <div className="pd-r10px">DARK MODE</div>
        <div className="pd-r10px">|</div>
        <div>TURKCE`YE GEC</div>
      </div>
    </div>
  );
}
