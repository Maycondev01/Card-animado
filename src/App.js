import { motion } from 'framer-motion'
import React, { useState } from 'react';

function App() {

  const [abrir, setAbrir] = useState(false)


  return (
    <div className='App'>
      <motion.div layout onClick={() => setAbrir(!abrir)} className='card'>
        <motion.h2 layout="position">Hellou 😃 </motion.h2>
        {abrir && (
          <motion.div>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
          a galley of type and scrambled it to make a type specimen book.
          </p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
        </motion.div>
        )}
        
      </motion.div>
    </div>
  );
}

export default App;
