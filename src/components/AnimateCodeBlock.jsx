import { motion } from 'framer-motion';

function AnimatedCodeBlock({ content, postion, delay }) {
  const characters = content.split(''); // Split content into individual characters

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`absolute text-xl   font-mono text-white  p-3 ${postion}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay:{delay}
      }}
      
    >
    
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          transition={{ delay: index * 0.1 }}
          className='tags'
        >
          {char}
        </motion.span>
      ))}
    
    </motion.div>
  );
}

export default AnimatedCodeBlock;
