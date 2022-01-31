import React from "react"
import Rings from "../images/rings.svg"

const Loader = () => {
  return (
    <div
      key={`loader`}
      id="___loader"
      style={{
        backgroundColor: "#28244B",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        inset: 0,
        zIndex: 100,
        pointerEvents: "none",
        transition: "opacity 0.2s ease",
      }}
    >
      <img src={Rings} alt="loading spinner" width="150" height="150" />
    </div>
  )
}

export default Loader
