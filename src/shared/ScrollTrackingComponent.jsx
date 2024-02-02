import React, { useCallback, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWLSW2vf6uiOMEK0rdfJPNWnjYzijXA6s",
  authDomain: "morteza-portfolio.firebaseapp.com",
  projectId: "morteza-portfolio",
  storageBucket: "morteza-portfolio.appspot.com",
  messagingSenderId: "1048036597227",
  appId: "1:1048036597227:web:7cfd750e3d41a8acc88dae",
  measurementId: "G-ND1REFQT2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const ScrollTrackingComponent = ({ sections }) => {
  return (
    <div>
      {sections.map((section) => (
        <div
          onMouseEnter={() => {
            logEvent(analytics, "section_viewed", {
              sectionName: section.name,
            });
          }}
          key={section.id}
          id={section.id}
        >
          {section.component}
        </div>
      ))}
    </div>
  );
};

export default ScrollTrackingComponent;
