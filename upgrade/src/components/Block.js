import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge'

const Block = ({ className, children, ...rest }) => {
    return (
      <motion.div
        className={twMerge("col-span-3 rounded-lg border border-zinc-700 bg-zinc-800 p-6", className)}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

export default Block