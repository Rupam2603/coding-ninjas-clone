const Button = ({ children, variant = "primary", size = "md", onClick, className = "", icon, href }) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer";

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-cn-orange hover:bg-cn-orange-hover text-white shadow-lg shadow-cn-orange/20 hover:shadow-cn-orange/40",
    outline:
      "border-2 border-cn-orange text-cn-orange hover:bg-cn-orange hover:text-white",
    dark:
      "bg-cn-dark hover:bg-cn-darker text-white",
    ghost:
      "text-cn-gray hover:text-white hover:bg-white/10",
    white:
      "bg-white text-cn-dark hover:bg-gray-100 shadow-md",
    link:
      "text-cn-orange hover:text-cn-orange-hover underline-offset-2 hover:underline p-0",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
export default Button;