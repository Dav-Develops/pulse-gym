import React from 'react';

function Button({
  children,
  variant = 'neonLime',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-extrabold uppercase tracking-wider rounded-xl transition-all transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const variantStyles = {
    neonLime:
      'bg-brand-neonLime text-black hover:bg-white hover:shadow-neon-lime hover:-translate-y-0.5',
    neonCyan:
      'bg-brand-neonCyan text-black hover:bg-white hover:shadow-neon-cyan hover:-translate-y-0.5',
    glass:
      'glass-card text-white hover:border-brand-neonLime/50 hover:text-brand-neonLime hover:-translate-y-0.5',
    glassCyan:
      'glass-card text-white hover:border-brand-neonCyan/50 hover:text-brand-neonCyan hover:-translate-y-0.5',
    outline:
      'border border-white/20 text-white hover:border-brand-neonLime hover:text-brand-neonLime bg-transparent',
    ghost: 'text-gray-300 hover:text-brand-neonLime hover:bg-white/5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.neonLime
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
