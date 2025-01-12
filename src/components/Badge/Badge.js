import './Badge.css';

function Badge({color, className, label, iconBefore, iconAfter}) {
    return(
        <span 
            className={`badge ${color} 
            ${className}`}>
                {iconBefore && iconBefore}
                {label}
                {iconAfter && iconAfter}
        </span>
    );
}

export default Badge;