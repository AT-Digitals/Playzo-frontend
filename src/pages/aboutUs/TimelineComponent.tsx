import "./Timeline.css";

import { useEffect, useRef } from "react";

export default function TimelineComponent() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Your scroll logic here
      // You can use timelineRef.current?.scrollLeft to get the current scroll position
    };

    const currentRef = timelineRef.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll as EventListener);

      // Remove the event listener on component unmount
      return () => {
        currentRef.removeEventListener("scroll", handleScroll as EventListener);
      };
    }

    // Return a no-op function if currentRef is null
    return () => {};
  }, []);
  return (
    <section className="timeline" ref={timelineRef}>
      <ol>
        <li className="item1">
          <div className="case1">
            <h4
              style={{
                marginLeft: "-92px",
                fontSize: "16px",
                marginTop: "-5px",
              }}
            >
              Lorem Ipsum
            </h4>
            <h2
              style={{
                fontSize: "33px",
                marginLeft: "-111px",
                marginTop: "-15px",
                color: "#15b5fc",
              }}
            >
              2020
            </h2>
            <p style={{ marginTop: "-24px", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>
        <li className="item2">
          <div className="case2">
            <h4
              style={{
                marginLeft: "-92px",
                fontSize: "16px",
                marginTop: "30px",
              }}
            >
              Lorem Ipsum
            </h4>
            <h2
              style={{
                fontSize: "33px",
                marginLeft: "-111px",
                marginTop: "-15px",
                color: "#15b5fc",
              }}
            >
              2021
            </h2>
            <p style={{ marginTop: "-24px", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>

        <li className="item3">
          <div className="case3">
            <h4
              style={{
                marginLeft: "84px",
                fontSize: "16px",
                marginTop: "-5px",
              }}
            >
              Lorem Ipsum
            </h4>
            <h2
              style={{
                fontSize: "33px",
                marginLeft: "111px",
                marginTop: "-15px",
                color: "#15b5fc",
              }}
            >
              2022
            </h2>
            <p style={{ marginTop: "-24px", textAlign: "end" }}>
              Lorem ipsum dolor sit amet, consectetur elit, ut labore dolore
              magna aliqua.
            </p>
          </div>
        </li>
        <li className="item4">
          <div className="case4">
            <h4
              style={{
                marginLeft: "84px",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Lorem Ipsum
            </h4>
            <h2
              style={{
                fontSize: "33px",
                marginLeft: "111px",
                marginTop: "-15px",
                color: "#15b5fc",
              }}
            >
              2023
            </h2>
            <p style={{ marginTop: "-24px", textAlign: "justify" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur elit, ut labore dolore
              magna aliqua.
            </p>
          </div>
        </li>
        <li className="item5">
          <div className="case5">
            <h4
              style={{
                marginLeft: "84px",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Lorem Ipsum
            </h4>
            <h2
              style={{
                fontSize: "33px",
                marginLeft: "111px",
                marginTop: "-15px",
                color: "#15b5fc",
              }}
            >
              2024
            </h2>
            <p style={{ marginTop: "-24px", textAlign: "justify" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>
        <li></li>
      </ol>
    </section>
  );
}
