import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import './FormValentine.css';
import { useState } from 'react';

function FormValentine() {
  const [buttonSize, setButtonSize] = useState(100); // Estado para el tamaño del botón
  const [buttonState, setButtonState] = useState(false);
  const [message, setMessage] = useState("No"); // Estado para el mensaje
  const [responce, setResponce] = useState(false); // Estado para la respuesta
  const [fontSize, setFontSize] = useState(15); // Estado para el tamaño de la fuente

  let messages = [
    "¿Segura? :(",
    "¡No seas mala!",
    "Di que si, por favor",
    "¿Segurita segurita?",
    "A ver otra vez :c",
    "Ya pushale en si :c", 
    "¿Pero por queeeee?",
    "Solo piensalo un poquito más :c",
    "Ya bastaaaaaaa",
    "¡No me hagas llorar! :c",
    "Yo que tu le doy en si :3",
    "¿No? :c"
  ];

  // Función de manejo de clic para el botón "No"
  const handleNoButtonClick = () => {
    // Aumenta el tamaño del botón "Si" en cada clic
    handleNoButtonState();
    setButtonSize(buttonSize + (buttonSize * 0.1));
    setFontSize(fontSize + 2);
    setMessage(messages[Math.floor(Math.random() * messages.length)]); 
  };

  const handleYesButtonClick = () => {
    // Aumenta el tamaño del botón "Si" en cada clic
    setResponce(true);
  };

  
  const handleNoButtonState = () => {
    setButtonState(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      {responce ? (
        <>
          <div>
            <Row className='justify-content-center'>
              <img src="/icon-couple.png" alt="" style={{width: "70%"}}/>
            </Row>
            <Row className='justify-content-center mt-4'>
              <h3>¡Sabía que dirías que si!</h3>
              
            </Row>
            <Row className='mt-4'>
              <p>Has tomado una muy buena decisión (creo),<br/>
              ahora solo falta que me des tu respuesta en la vida real. <br/> <br/>

              De mi parte haré todo lo posible para que lo nuestro sea <br />
              duradero y se vea algo así como los ternurines de aquí arribita. <br/> <br />

              ¡Te quiero mucho Karlita! 💖 <br />
              Espero con ansias verte otra vez.
              </p>
            </Row>
          </div>
        </>
      ) : (
          <>
            <Form>
              <Row className='justify-content-center'>
                <img className="w-50" src="/icon-form.png" alt="" />
              </Row>
              <Row className='mt-4 justify-content-center'>
                <p>
                  ¡Alto ahí, Karlita! <br />
                  Necesito saber si quisieras ser su novia, ¡ya! <br />
                  Responde con las opciones de aquí abajito.
                </p>
              </Row>
              <Row className="mt-4 justify-content-center">
                {/* El tamaño del botón "Si" se establece dinámicamente según el estado */}

                {buttonState ? (
                  <>
                    <Button className={`mx-2 ${buttonSize} btn-yes`} variant="danger" onClick={handleYesButtonClick} style={{ position: "static", fontSize: `${fontSize}px`, width: `${buttonSize}px`, height: `${buttonSize}px` }}>Si</Button>
                    <Button className="mx-2 px-5 btn-no" variant="secondary" onClick={handleNoButtonClick} style={{ position: "fixed" }}>
                      {message}
                    </Button>
                  </>

                ) : (
                  <>
                    <Button className={`mx-2 px-5 btn-yes`} variant="danger" onClick={handleYesButtonClick}>Si</Button>
                    <Button className="mx-2 px-5 btn-no" variant="secondary" onClick={handleNoButtonClick}>{message}</Button>
                  </>

                )}
              </Row>
            </Form>
          </>
      )}
    </Container>
  );
}

export default FormValentine;