import { LinkProps, NavLink } from "react-router-dom";

const variants = {
    primary:
        "bg-blue-500 p-2 text-white rounded hover:scale-105 duration-500 ease-in-out hover:shadow hover:shadow-lg hover:shadow-blue-500/50",
    white: "hover:text-blue-400",
};

type VariantType = keyof typeof variants;

interface CommonLinkProps extends LinkProps {
    variant: VariantType;
    className?: string;
}

export default function CommonLink({
    to,
    children,
    onClick,
    variant,
    className,
}: CommonLinkProps) {
    return (
        <NavLink
            to={to}
            onClick={onClick && onClick}
            className={({ isActive }) =>
                `${variants[variant]} ${className ?? ""} ${
                    isActive && variant === "white"
                        ? "text-blue-500"
                        : "text-gray-700"
                }`
            }
        >
            {children}
        </NavLink>
    );
}
