import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      icon: "🏡",
      title: "Power on your new system",
      description:
        "Switch on your system to enjoy reduced electricity bills and an energy-independent future!",
      side: "left",
    },
    {
      icon: "🧹",
      title: "Deep cleaning and maintenance",
      description:
        "We’ll call you to schedule quarterly deep cleaning and preventive health checks of your system for 5 years.",
      side: "right",
    },
    {
      icon: "🧹",
      title: "Deep cleaning and maintenance",
      description:
        "We’ll call you to schedule quarterly deep cleaning and preventive health checks of your system for 5 years.",
      side: "left",
    },
  ];

  const styles = {
    timeline: {
      backgroundColor: "#007bff", // Blue background
      padding: "50px 0",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
    },
    timelineLine: {
      position: "absolute",
      left: "50%",
      top: "0",
      bottom: "0",
      width: "4px",
      backgroundColor: "white", // White timeline line
      transform: "translateX(-50%)",
      zIndex: 1,
    },
    timelineItem: {
      display: "flex",
      alignItems: "center",
      width: "80%",
      position: "relative",
      margin: "50px 0",
    },
    timelineContent: {
    //   background: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "40%",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "bold",
      position: "relative",
      zIndex: 2,
    },
    icon: {
      fontSize: "40px",
      display: "block",
      marginBottom: "10px",
    },
    timelineDot: {
      width: "20px",
      height: "20px",
      background: "white",
      borderRadius: "50%",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
    },
  };

  return (
    <div style={styles.timeline}>
      <div style={styles.timelineLine}></div>
      {timelineData.map((item, index) => (
        <div
          key={index}
          style={{
            ...styles.timelineItem,
            justifyContent: item.side === "left" ? "flex-start" : "flex-end",
          }}
        >
          {item.side === "left" && (
            <div style={styles.timelineContent}>
              <span style={styles.icon}>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )}
          <div style={styles.timelineDot}></div>
          {item.side === "right" && (
            <div style={styles.timelineContent}>
              <span style={styles.icon}>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
