import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const OverLayCat = ({ popover, srcUrl }) => {
  return (
    <div>
      <OverlayTrigger
        show="true"
        trigger="hover"
        placement="top"
        overlay={popover}
      >
        <img
          style={{
            margin: "10px",
            border: "black solid 3px",
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            position: "fixed",
            bottom: "0",
            left: "0",
            zIndex: "1",
          }}
          src={srcUrl}
          alt="cat"
        ></img>
      </OverlayTrigger>
    </div>
  );
};

export default OverLayCat;
