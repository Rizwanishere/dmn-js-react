import React, { useEffect, useRef, useState } from 'react';
import DmnModeler from 'dmn-js/lib/Modeler'; // Import the Modeler for editing capabilities
import { Button } from '@mui/material';
import './DmnModelerComponent.css';

const diagramUrl = 'https://cdn.statically.io/gh/bpmn-io/dmn-js-examples/main/starter/diagram.dmn';

const DmnModelerComponent = () => {
  const modelerRef = useRef(null);
  const [dmnModeler, setDmnModeler] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initialize DmnModeler only once
    const newDmnModeler = new DmnModeler({
      container: modelerRef.current,
      keyboard: { bindTo: window }
    });

    setDmnModeler(newDmnModeler);

    // Load DMN diagram from URL
    fetch(diagramUrl)
      .then(response => response.text())
      .then(xml => newDmnModeler.importXML(xml))
      .then(() => {
        setLoaded(true);
      })
      .catch(err => console.error('Failed to load DMN diagram', err));

    return () => {
      if (newDmnModeler) {
        newDmnModeler.destroy();
      }
    };
  }, []);

  const saveDiagram = async () => {
    if (dmnModeler) {
      try {
        const { xml } = await dmnModeler.saveXML({ format: true });
        console.log('DMN XML:', xml);
        alert('Diagram exported. Check the console for the XML!');
      } catch (err) {
        console.error('Could not save DMN diagram', err);
      }
    }
  };

  const downloadDiagram = async () => {
    if (dmnModeler) {
      try {
        const { xml } = await dmnModeler.saveXML({ format: true });
        console.log('DMN XML for download:', xml);

        // Save the XML to a file
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        link.download = 'diagram.dmn'; // Name of the downloaded file

        // Programmatically click the link to trigger the download
        link.click();

        // Cleanup
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error('Could not download DMN diagram', err);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'end', padding: '10px' }}>
        <Button variant="contained" color="primary" onClick={saveDiagram} disabled={!loaded}>
          Save DMN XML
        </Button>
        <Button variant="contained" color="secondary" onClick={downloadDiagram} disabled={!loaded}>
          Download DMN XML
        </Button>
      </div>
      <div className="dmn-js-parent" ref={modelerRef} style={{ flex: 1, border: '1px solid #ccc' }}></div>
    </div>
  );
};

export default DmnModelerComponent;
