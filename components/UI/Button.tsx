import {forwardRef} from "react";
import {cn} from "@/lib/utils";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
       className,
       children,
       disabled,
       type = "button",
       ...props

   }, ref) => {
    return (
        <button ref={ref} {...props}
    className={cn(`bg-blue-600 px-10 py-3 text-white font-semibold text-base uppercase transition rounded-xl border-solid border border-blue-600
            hover:bg-transparent hover:text-blue-600`,className)}>
    {children}
    </button>
)
});

Button.displayName = "Button";

export default Button;