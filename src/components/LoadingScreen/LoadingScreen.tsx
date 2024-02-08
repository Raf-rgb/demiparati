import { ProgressBar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import './LoadingScreen.css';

const LoadingScreen = ({ progress }: { progress: number }) => {
  
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Stack>
        <div>
          <img src="https://i.picasion.com/pic92/497baa631e4c50fe6da93b6d6d1e067a.gif" alt="https://picasion.com/" />
        </div>  

        <div className="progress-container p-2">
          <ProgressBar className='content' animated now={progress} variant='danger'/>
        </div>
      </Stack>
    </Container>
    
  );
}

export default LoadingScreen;
