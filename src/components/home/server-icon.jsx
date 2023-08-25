import ChinaLogo from "../../assets/icons/china.svg";
import GlobalLogo from "../../assets/icons/global.svg";
import JapanLogo from "../../assets/icons/japan.svg";
import React from "react";
export default function ServerIcon(props) {
  const server = props.server;
  const iconStyling = {
    height: "40px",
    width: "40px",
    paddingLeft: "15px",
  };

  const globalIconStyling = { ...iconStyling, filter: "invert(1)" };

  const IconChanger = (server) => {
    console.log(server);
    switch (server) {
      case "global":
        return <img src={GlobalLogo} style={globalIconStyling} />;
      case "japan":
        return <img src={JapanLogo} style={iconStyling} />;
      case "china":
        return <img src={ChinaLogo} style={iconStyling} />;
    }
  };

  return <div>{IconChanger(server)}</div>;
}
