import React, { useState, useRef, useEffect } from "react";

const App3 = () => {
  const [name, setName] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (showPopup && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [showPopup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);
  };
  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Your Name</h2>
            <form onSubmit={handleSubmit}>
              <input
                ref={nameInputRef}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      {!showPopup && (
        <div className="main-content">
          <h1>Welcome, {name}!</h1>
          {/* Other content */}
        </div>
      )}
    </>
  );
};
export default App3;
