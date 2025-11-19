import { motion } from 'framer-motion';
import { colorsConfig } from '../datas/colorConfig';

interface CardContainerProps {
  children: React.ReactNode;
  size?: 'normal' | 'large';
}

export default function CardContainer({
  children,
  size = 'normal',
}: CardContainerProps) {
  const sizeClasses = size === 'large' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <div className='flex items-center justify-center h-screen'>
      <motion.div
        layout
        transition={{
          layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        }}
        className={`rounded-2xl shadow-xl w-full ${sizeClasses}`}
        style={{ backgroundColor: colorsConfig.cardBackground }}
      >
        {children}
      </motion.div>
    </div>
  );
}
