import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type BadgeType = 'new' | 'hd' | 'featured';

interface BadgeProps {
  type: BadgeType;
  children: ReactNode;
}

const badgeColors: Record<BadgeType, string> = {
  new: 'bg-green-600',
  hd: 'bg-blue-600',
  featured: 'bg-purple-600',
};

export default function Badge({ type, children }: BadgeProps) {
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`${badgeColors[type]} text-white text-xs font-bold uppercase px-2 py-1 rounded-md mr-2`}
    >
      {children}
    </motion.span>
  );
}