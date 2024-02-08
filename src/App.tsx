import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import FormValentine from './components/Form/FormValentine';

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simular el progreso de carga
    const interval = setInterval(() => {
      setLoadingProgress(progress => (progress < 100 ? progress + 10 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <> 
      {loadingProgress < 100 ? (
        <LoadingScreen progress={loadingProgress}/>
      ) : (
        <FormValentine />
      )}
     
    </>
  )
}

export default App
