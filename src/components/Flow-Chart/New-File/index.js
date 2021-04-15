import React, { useState, useEffect } from "react";
import "../../../App.css";
import firebaseDb from "../../../firebase";
import Popup from "reactjs-popup";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const NewFile = () => {
  var initialData = [
    {
      id: "u1526485862163",
      type: "rectangle",
      text: "Text",
      fill: "#EEF1F6",
      stroke: "#B8C6D6",
      extraLinesStroke: "#B8C6D6",
      x: 170,
      y: 40,
    },
    {
      id: "u1526485862172",
      type: "rectangle",
      text: "Text",
      fill: "#EEF1F6",
      stroke: "#B8C6D6",
      extraLinesStroke: "#B8C6D6",
      x: 480,
      y: 40,
    },
    {
      id: "u1526485862207",
      type: "end",
      text: "Text",
      fill: "#EEF1F6",
      stroke: "#B8C6D6",
      extraLinesStroke: "#B8C6D6",
      x: 170,
      y: 210,
    },
    {
      id: "u1526485862346",
      type: "rectangle",
      text: "Text",
      fill: "#EEF1F6",
      stroke: "#B8C6D6",
      extraLinesStroke: "#B8C6D6",
      x: 630,
      y: 210,
    },
    {
      id: "u1526485862387",
      type: "line",
      from: "u1526485862163",
      to: "u1526485862172",
      fromSide: "right",
      toSide: "left",
    },
    {
      id: "u1526485862617",
      type: "line",
      from: "u1526485862163",
      to: "u1526485862207",
      fromSide: "bottom",
      toSide: "top",
      forwardArrow: "filled",
    },
    {
      id: "u1526485863088",
      type: "line",
      from: "u1526485862172",
      to: "u1526485862346",
      fromSide: "bottom",
      toSide: "top",
      backArrow: "filled",
      forwardArrow: "filled",
    },
    {
      id: "u1526485863496",
      type: "circle",
      text: "Text",
      fill: "#EEF1F6",
      stroke: "#B8C6D6",
      extraLinesStroke: "#B8C6D6",
      x: 0,
      y: 210,
    },
    {
      id: "u1526485863505",
      type: "line",
      from: "u1526485863496",
      to: "u1526485862207",
      fromSide: "right",
      toSide: "left",
      backArrow: "filled",
    },
  ];

  // setTimeout(() => {
  //   alert("Hello");
  // }, 2000);

  var editor = new window.dhx.DiagramEditor("editor", {
    shapeSections: {
      "custom shapes": [
        "networkCard",
        "networkCard2",
        "medCard",
        "template",
        "networkCard3",
      ],
      "Other Shapes": ["card", "img-card"],
      "flowchart shapes": [true],
    },
    scalePreview: 0.65,
    shapeBarWidth: 360,
    controls: {
      import: false,
      export: true,
      gridStep: false,
      autoLayout: false,
      apply: false,
      reset: true,
    },
  });

  const [fileName, setFileName] = useState("");
  const [error, setError] = useState(false);
  const [nodes, setNodes] = useState([]);
  const [ele, setEle] = useState(initialData);

  useEffect(() => {
    firebaseDb.child("custom_nodes").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setNodes({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  // Object.keys(nodes).map((id) => {
  //   const elemen = nodes[id];
  //   if (
  //     elemen.textField === "true" &&
  //     elemen.code === "true" &&
  //     elemen.Image === "true"
  //   ) {
  //     editor.diagram.addShape("networkCard4", {
  //       template: function (config) {
  //         var template = "<section class='network_template'>";
  //         template +=
  //           "<SyntaxHighlighter wrapLines='" +
  //           true +
  //           "' showLineNumbers='" +
  //           true +
  //           "' language='javascript' style='" +
  //           docco +
  //           "'>" +
  //           config.code +
  //           "</SyntaxHighlighter>";
  //         template += "<img src='" + config.img + "'></img>";
  //         template += "<span>" + config.text + "</span>";
  //         template += "</section>";
  //         return template;
  //       },
  //       defaults: {
  //         width: 120,
  //         height: 120,
  //         code: `function(){
  //       console.log('Daya');
  //     }`,
  //         img: "https://source.unsplash.com/random",
  //         text: "Text Field",
  //       },
  //       properties: [
  //         { type: "arrange" },
  //         { type: "text", label: "Code", property: "code" },
  //         { type: "img", label: "photo" },
  //         { type: "text", label: "Text Field", property: "text" },
  //       ],
  //     });
  //     console.log("true");
  //     console.log("false");
  //   }
  // });

  const template = (config) =>
    `<section class='template' 
					style='background:${config.fill};border:${config.strokeWidth}px solid ${
      config.stroke
    }'>
					<h3 style='border-bottom:${config.strokeWidth}px solid ${config.stroke}'>
						${config.title}
					</h3>
					<ul>
						<li>${config.text.join("</li><li>")}</li>
					</ul>
				</section>`;

  editor.diagram.addShape("template", {
    template,
    defaults: {
      title: "Title",
      text: ["Text"],
      height: 120,
      fill: "#CEEFE1",
      stroke: "#0AB169",
      strokeWidth: 2,
    },
  });

  editor.diagram.addShape("networkCard", {
    template: function (config) {
      var template =
        "<section class='network_template' style='background:" +
        config.fill +
        "'>";
      template +=
        "<img src='" + config.img + "' alt='" + config.text + "'></img>";
      template += "<span>" + config.text + "</span>";
      template += "<span>" + config.ip + "</span>";
      template += "</section>";
      return template;
    },
    defaults: {
      width: 160,
      height: 160,
      img: "https://source.unsplash.com/random",
      text: "Text Field",
      ip: "2nd Text Field",
    },
    properties: [
      { type: "arrange" },
      { type: "fill" },
      { type: "img", label: "photo" },
      { type: "text" },
      { type: "text", label: "IP", property: "ip" },
    ],
  });

  editor.diagram.addShape("networkCard3", {
    template: function (config) {
      var template = "<section class='network_template'>";
      template += "<img src='" + config.img + "'></img>";
      template += "</section>";
      return template;
    },
    defaults: {
      width: 120,
      height: 120,
      img: "https://source.unsplash.com/random",
    },
    properties: [{ type: "arrange" }, { type: "img", label: "photo" }],
  });

  // editor.diagram.addShape("networkCard4", {
  //   template: function (config) {
  //     var template = "<section class='network_template'>";
  //     template += `<code>
  //         ${config.text}
  //       </code>`;
  //     template += "</section>";
  //     return template;
  //   },
  //   defaults: {
  //     width: 120,
  //     height: 120,
  //     text: `function(){
  //   console.log('Daya');
  // }`,
  //   },
  //   properties: [{ type: "arrange" }, { type: "text", label: "Code" }],
  // });

  editor.diagram.addShape("networkCard2", {
    template: function (config) {
      var template = "<section class='network_template'>";
      template +=
        "<img src='" + config.img + "' alt='" + config.text + "'></img>";
      template += "<span>" + config.text + "</span>";
      template += "<span>" + config.ip + "</span>";
      template += "<span>" + config.ip2 + "</span>";
      template += "</section>";
      return template;
    },
    defaults: {
      width: 160,
      height: 160,
      img: "https://source.unsplash.com/random",
      text: "Text Field",
      ip: "2nd Text Field",
      ip2: "3rd Text Field",
    },
    properties: [
      { type: "arrange" },
      { type: "img", label: "photo" },
      { type: "text", label: "1st Text", property: "text" },
      { type: "text", label: "2nd Text", property: "ip" },
      { type: "text", label: "2rd Text", property: "ip2" },
    ],
  });

  editor.diagram.addShape("medCard", {
    template: function (config) {
      var template = "<section class='med_template'>";
      template +=
        "<div class='med_template_container med_template_img-container'>";
      template +=
        "<img src='" +
        config.img +
        "' alt='" +
        config.title +
        "-" +
        config.post +
        "'></img>";
      template += "</div>";
      template += "<div class='med_template_container'>";
      template += "<h3>" + config.title + "</h3>";
      template += "<p>" + config.post + "</p>";
      template += "<span>";
      template += "<p>" + config.phone + "</p>";
      template += "</span>";
      template += "<span>";
      template += "<p style='color:#0288D1'>" + config.email + "</p>";
      template += "</span></div></section>";
      return template;
    },
    defaults: {
      title: "Name",
      post: "Position",
      phone: "Number",
      email: "Email",
      img: "https://source.unsplash.com/random",
      width: 330,
      height: 115,
    },
    properties: [
      { type: "arrange" },
      { type: "title", label: "name" },
      { type: "text", label: "post", property: "post" },
      { type: "text", label: "phone", property: "phone" },
      { type: "text", label: "email", property: "email" },
      { type: "img", label: "photo" },
    ],
  });

  editor.parse(initialData);
  editor.events.on("ShapeMove", function () {
    var elements = editor.serialize();
    setEle(elements);
  });

  // const codeString = `function test(){
  //   String name = "Daya"
  // }`;

  const saveFile = () => {
    console.log(ele);
    if (fileName === "") {
      setError(true);
      return;
    } else if (fileName !== "") {
      setError(false);
    }
    var data = {
      name: fileName,
      values: JSON.stringify(ele),
      date: new Date().getTime(),
    };
    firebaseDb.child("charts").push(data);
    alert(`Your ${fileName} file has been saved successfully`);
    window.location.href = "/";
  };

  return (
    <div className="App-2">
      <header className="dhx_sample-header">
        <div className="dhx_sample-header__main">
          <nav className="dhx_sample-header__breadcrumbs">
            <ul className="dhx_sample-header-breadcrumbs">
              <li className="dhx_sample-header-breadcrumbs__item">
                <a href="/" className="save">
                  Back To Dashboard
                </a>
              </li>
            </ul>
            {/* <SyntaxHighlighter
              wrapLines={true}
              showLineNumbers={true}
              language="javascript"
              style={docco}
            >
              {codeString}
            </SyntaxHighlighter> */}
          </nav>
          <h1 className="dhx_sample-header__title">
            <div className="dhx_sample-header__content">Flow Chart</div>
          </h1>
          <Popup
            trigger={<button className="save"> Save This File </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Save File </div>
                <div className="content">
                  <label style={{ marginLeft: "10px", marginTop: "10px" }}>
                    Name of the File:
                  </label>{" "}
                  <br />
                  <input
                    value={fileName || ""}
                    placeholder="Name of the File"
                    onChange={(evt) => setFileName(evt.target.value)}
                    style={{
                      width: "90%",
                      border: "1px solid black",
                      marginTop: "10px",
                    }}
                  />
                  {fileName === "" && error ? (
                    <h3
                      style={{
                        color: "red",
                        marginTop: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      Please provide name of the file
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
                <div className="actions">
                  <button className="button" onClick={saveFile}>
                    Save
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </header>
      <div id="editor" style={{ zIndex: 10000, height: "0vh" }}></div>
    </div>
  );
};

export default NewFile;
