import React from "react";
import "../../../App.css";
import { useLocation } from "react-router-dom";
import firebaseDb from "../../../firebase";

const ExistingFile = () => {
  var location = useLocation();
  const elemen = JSON.parse(location.state);
  const projectId = location.id;
  const projectName = location.name;

  var editor = new window.dhx.DiagramEditor("root", {
    shapeSections: {
      "custom shapes": [
        "networkCard",
        "networkCard2",
        "medCard",
        "template",
        "networkCard3",
        "networkCard4",
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

  editor.diagram.addShape("networkCard4", {
    template: function (config) {
      var template = "<section class='network_template'>";
      template +=
        "<pre><code class='language-javascript'>" +
        config.text +
        "</code></pre>";
      template += "</section>";
      return template;
    },
    defaults: {
      width: 120,
      height: 120,
      text: `function(){
    console.log('Daya');
  }`,
    },
    properties: [{ type: "arrange" }, { type: "text", label: "Code" }],
  });

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

  // var editor = new window.dhx.DiagramEditor(document.body);
  editor.parse(elemen);

  const updateFile = () => {
    var elements = editor.serialize();
    var data = {
      name: projectName,
      values: JSON.stringify(elements),
      date: new Date().getTime(),
    };
    if (projectId === undefined) {
      console.log("error");
    } else {
      firebaseDb.child(`charts/${projectId}`).set(data, (err) => {
        if (err) {
          console.log(err);
        } else {
          alert("File has been updated successfully");
        }
      });
    }
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
          </nav>
          <h1 className="dhx_sample-header__title">
            <div className="dhx_sample-header__content">Flow Chart</div>
          </h1>
          <button className="save" onClick={updateFile}>
            Update This File
          </button>
        </div>
      </header>
    </div>
  );
};

export default ExistingFile;
