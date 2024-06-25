// // src/DmnModelerComponent.js
// import React, { useEffect, useRef, useState } from 'react';
// import DmnModeler from 'dmn-js/lib/Modeler'; // Import the Modeler for editing capabilities
// import { Button } from '@mui/material';
// import './DmnModelerComponent.css'; // Ensure this CSS includes necessary styles for dmn-js

// const diagramUrl = 'https://cdn.statically.io/gh/bpmn-io/dmn-js-examples/main/starter/diagram.dmn';

// const DmnModelerComponent = () => {
//   const modelerRef = useRef(null);
//   const [dmnModeler, setDmnModeler] = useState(null);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (!dmnModeler) {
//       const newDmnModeler = new DmnModeler({
//         container: modelerRef.current,
//         keyboard: { bindTo: window }
//       });

//       setDmnModeler(newDmnModeler);

//       // Load DMN diagram from URL
//       fetch(diagramUrl)
//         .then(response => response.text())
//         .then(xml => newDmnModeler.importXML(xml))
//         .then(() => {
//           setLoaded(true);
//           // Adjust view to fit the diagram
//           newDmnModeler.get('canvas').zoom('fit-viewport');
//         })
//         .catch(err => console.error('Failed to load DMN diagram', err));
//     }

//     return () => {
//       if (dmnModeler) {
//         dmnModeler.destroy();
//       }
//     };
//   }, [dmnModeler]);

//   const saveDiagram = async () => {
//     if (dmnModeler) {
//       try {
//         const { xml } = await dmnModeler.saveXML({ format: true });
//         console.log('DMN XML:', xml);
//         alert('Diagram exported. Check the console for the XML!');
//       } catch (err) {
//         console.error('Could not save DMN diagram', err);
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="dmn-js-parent" ref={modelerRef} style={{ height: '600px', width: '100%', border: '1px solid #ccc' }}></div>
//       <Button variant="contained" color="primary" onClick={saveDiagram} disabled={!loaded}>
//         Save DMN XML
//       </Button>
//     </div>
//   );
// };

// export default DmnModelerComponent;

// ------------------------------------gpt output dynamic------------------------------------------------------------
// src/DmnModelerComponent.js

// import React, { useEffect, useRef, useState } from 'react';
// import DmnModeler from 'dmn-js/lib/Modeler'; // Import the Modeler for editing capabilities
// import { Button } from '@mui/material';
// import './DmnModelerComponent.css'; // Ensure this CSS includes necessary styles for dmn-js

// const diagramUrl = 'https://cdn.statically.io/gh/bpmn-io/dmn-js-examples/main/starter/diagram.dmn';

// const DmnModelerComponent = () => {
//   const modelerRef = useRef(null);
//   const [dmnModeler, setDmnModeler] = useState(null);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (!dmnModeler) {
//       const newDmnModeler = new DmnModeler({
//         container: modelerRef.current,
//         keyboard: { bindTo: window }
//       });

//       setDmnModeler(newDmnModeler);

//       // Load DMN diagram from URL
//       fetch(diagramUrl)
//         .then(response => response.text())
//         .then(xml => newDmnModeler.importXML(xml))
//         .then(() => {
//           setLoaded(true);
//           // Adjust view to fit the diagram
//           newDmnModeler.get('canvas').zoom('fit-viewport');
//         })
//         .catch(err => console.error('Failed to load DMN diagram', err));

//       // Log to understand the events triggered by the modeler
//       newDmnModeler.on('commandStack.changed', () => {
//         console.log('Diagram updated');
//       });

//     }

//     return () => {
//       if (dmnModeler) {
//         dmnModeler.destroy();
//       }
//     };
//   }, [dmnModeler]);

//   const saveDiagram = async () => {
//     if (dmnModeler) {
//       try {
//         // Force the modeler to update its internal state
//         await dmnModeler.saveXML({ format: true });
//         const { xml } = await dmnModeler.saveXML({ format: true });
//         console.log('DMN XML:', xml);
//         alert('Diagram exported. Check the console for the XML!');
//       } catch (err) {
//         console.error('Could not save DMN diagram', err);
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="dmn-js-parent" ref={modelerRef} style={{ height: '600px', width: '100%', border: '1px solid #ccc' }}></div>
//       <Button variant="contained" color="primary" onClick={saveDiagram} disabled={!loaded}>
//         Save DMN XML
//       </Button>
//     </div>
//   );
// };

// export default DmnModelerComponent;

// ---------told gpt that Diagram updated in console is !coming but now coming in bottom table------------

// src/DmnModelerComponent.jsimport React, { useEffect, useRef, useState } from 'react';
// import DmnModeler from 'dmn-js/lib/Modeler'; // Import the Modeler for editing capabilities
// import { Button } from '@mui/material';
// import './DmnModelerComponent.css';
// import React, { useEffect, useRef, useState } from 'react';

// const diagramUrl = 'https://cdn.statically.io/gh/bpmn-io/dmn-js-examples/main/starter/diagram.dmn';

// const DmnModelerComponent = () => {
//   const modelerRef = useRef(null);
//   const [dmnModeler, setDmnModeler] = useState(null);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (!dmnModeler) {
//       const newDmnModeler = new DmnModeler({
//         container: modelerRef.current,
//         keyboard: { bindTo: window }
//       });

//       setDmnModeler(newDmnModeler);

//       // Load DMN diagram from URL
//       fetch(diagramUrl)
//         .then(response => response.text())
//         .then(xml => newDmnModeler.importXML(xml))
//         .then(() => {
//           setLoaded(true);
//           console.log('DmnModeler instance:', newDmnModeler); // Debugging log
//           // Adjust view to fit the diagram
//           const canvas = newDmnModeler.get('canvas'); // Ensure get method is available
//           if (canvas) {
//             canvas.zoom('fit-viewport');
//           }
//         })
//         .catch(err => console.error('Failed to load DMN diagram', err));
//     }

//     return () => {
//       if (dmnModeler) {
//         dmnModeler.destroy();
//       }
//     };
//   }, [dmnModeler]);

//   const saveDiagram = async () => {
//     if (dmnModeler) {
//       try {
//         const { xml } = await dmnModeler.saveXML({ format: true });
//         console.log('DMN XML:', xml);
//         alert('Diagram exported. Check the console for the XML!');
//       } catch (err) {
//         console.error('Could not save DMN diagram', err);
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//       <div className="dmn-js-parent" ref={modelerRef} style={{ flex: 1, border: '1px solid #ccc' }}></div>
//       <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
//         <Button variant="contained" color="primary" onClick={saveDiagram} disabled={!loaded}>
//           Save DMN XML
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default DmnModelerComponent;

// ---------------------------------------------------
import React, { useEffect, useRef, useState } from "react";
import DmnModeler from "dmn-js/lib/Modeler";
import { Button } from "@mui/material";
import "./DmnModelerComponent.css";

const diagramUrl =
  "https://cdn.statically.io/gh/bpmn-io/dmn-js-examples/main/starter/diagram.dmn";

const DmnModelerComponent = () => {
  const modelerRef = useRef(null);
  const [dmnModeler, setDmnModeler] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!dmnModeler) {
      const newDmnModeler = new DmnModeler({
        container: modelerRef.current,
        keyboard: { bindTo: window },
      });

      setDmnModeler(newDmnModeler);

      // Load DMN diagram from URL
      fetch(diagramUrl)
        .then((response) => response.text())
        .then((xml) => newDmnModeler.importXML(xml))
        .then(() => {
          setLoaded(true);
        })
        .catch((err) => console.error("Failed to load DMN diagram", err));
    }

    return () => {
      if (dmnModeler) {
        dmnModeler.destroy();
      }
    };
  }, [dmnModeler]);

  const saveDiagram = async () => {
    if (dmnModeler) {
      try {
        const { xml } = await dmnModeler.saveXML({ format: true });
        console.log("DMN XML:", xml);
        alert("Diagram exported. Check the console for the XML!");
      } catch (err) {
        console.error("Could not save DMN diagram", err);
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        className="dmn-js-parent"
        ref={modelerRef}
        style={{ flex: 1, border: "1px solid #ccc" }}
      ></div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={saveDiagram}
          disabled={!loaded}
        >
          Save DMN XML
        </Button>
      </div>
    </div>
  );
};

export default DmnModelerComponent;
