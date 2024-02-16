import "./Timeline.css";

import React, { useCallback, useEffect, useState } from "react";

const Timeline = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const updateProgress = useCallback(() => {
    const agTimelineItem = document.querySelectorAll(".js-timeline_item");

    agTimelineItem.forEach((item) => {
      const agTop = item
        .querySelector(".js-timeline-card_point-box")
        ?.getBoundingClientRect()?.top;

      if (agTop && agTop + scrollPos < scrollPos + window.innerHeight / 2) {
        item.classList.add("js-ag-active");
      } else {
        item.classList.remove("js-ag-active");
      }
    });
  }, [scrollPos]);

  const updateFrame = useCallback(() => {
    let agFlag = false;

    const fnUpdateWindow = () => {
      agFlag = false;
      updateProgress();
    };

    const fnUpdateFrame = () => {
      if (!agFlag) {
        requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
    };

    fnUpdateFrame();
  }, [updateProgress]);

  const updateWindow = useCallback(() => {
    const agTimeline = document.querySelector(
      ".js-timeline"
    ) as HTMLElement | null;
    const agTimelineLine = document.querySelector(
      ".js-timeline_line"
    ) as HTMLElement | null;
    const agTimelineItem = document.querySelectorAll(".js-timeline_item");

    if (agTimeline && agTimelineLine) {
      const firstItemPointTop =
        agTimelineItem[0]
          ?.querySelector(".js-timeline-card_point-box")
          ?.getBoundingClientRect()?.top || 0;
      const lastItemPointBottom =
        agTimelineItem[agTimelineItem.length - 1]
          ?.querySelector(".js-timeline-card_point-box")
          ?.getBoundingClientRect()?.bottom || 0;

      const adjustedTop =
        firstItemPointTop - agTimelineItem[0]?.getBoundingClientRect()?.top;

      // Calculate the adjusted bottom position considering the scroll position
      const adjustedBottom =
        agTimeline.offsetTop +
        agTimeline.offsetHeight -
        lastItemPointBottom +
        window.scrollY;

      agTimelineLine.style.top = `${adjustedTop}px`;
      agTimelineLine.style.bottom = `${adjustedBottom}px`;

      updateProgress();
    }
  }, [updateProgress]);

  useEffect(() => {
    updateWindow();

    const handleScroll = () => {
      setScrollPos(window.scrollY);
      updateFrame();
    };

    const handleResize = () => {
      setScrollPos(window.scrollY);
      updateFrame();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateWindow, updateFrame, setScrollPos]);
  // Dummy data for the timeline
  const timelineData = [
    {
      year: "2023",
      season: "Season 13",
      imgSrc: "https://via.placeholder.com/640x360",
      title: "Season 13",
      description: "Dummy content for Season 13. Lorem ipsum dolor sit amet...",
    },
    {
      year: "2022",
      season: "Season 13",
      imgSrc: "https://via.placeholder.com/640x360",
      title: "Season 13",
      description: "Dummy content for Season 13. Lorem ipsum dolor sit amet...",
    },
    {
      year: "2021",
      season: "Season 13",
      imgSrc: "https://via.placeholder.com/640x360",
      title: "Season 13",
      description: "Dummy content for Season 13. Lorem ipsum dolor sit amet...",
    },
    {
      year: "2020",
      season: "Season 13",
      imgSrc: "https://via.placeholder.com/640x360",
      title: "Season 13",
      description: "Dummy content for Season 13. Lorem ipsum dolor sit amet...",
    },
    // Add more timeline items as needed
  ];

  return (
    <div className="ag-timeline-block">
      <div className="ag-timeline_title-box">
        <div className="ag-timeline_tagline">Timeline</div>
        <div className="ag-timeline_title">No Flex</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="ag-section">
        <div className="ag-format-container">
          <div className="js-timeline ag-timeline">
            <div className="js-timeline_line ag-timeline_line">
              <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
            </div>
            <div className="ag-timeline_list">
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">2024</div>
                  </div>
                  <div className="ag-timeline-card_meta-box">
                    <div className="ag-timeline-card_meta">sample 1</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_img-box">
                      hi how are uoy
                    </div>
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_title">Title 2</div>
                      <div className="ag-timeline-card_desc">Description 2</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow"></div>
                </div>
              </div>

              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">2023</div>
                  </div>
                  <div className="ag-timeline-card_meta-box">
                    <div className="ag-timeline-card_meta">Connect 2</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_img-box">
                      nothing you want something
                    </div>
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_title">Title 2</div>
                      <div className="ag-timeline-card_desc">Description 2</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow"></div>
                </div>
              </div>

              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">2022</div>
                  </div>
                  <div className="ag-timeline-card_meta-box">
                    <div className="ag-timeline-card_meta">Connect 2</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_img-box">
                      nothing you want something
                    </div>
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_title">Title 2</div>
                      <div className="ag-timeline-card_desc">Description 2</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow"></div>
                </div>
              </div>
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">2021</div>
                  </div>
                  <div className="ag-timeline-card_meta-box">
                    <div className="ag-timeline-card_meta">Connect 2</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_img-box">
                      nothing you want something
                    </div>
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_title">Title 2</div>
                      <div className="ag-timeline-card_desc">Description 2</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Timeline;
