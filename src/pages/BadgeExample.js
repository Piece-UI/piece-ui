import Badge from '../components/Badge/Badge';

const BadgeExample = () =>{
    return(
        <Badge 
            label="User Badge" 
            color="piece__badge--outline--accent--65"
            iconBefore={<i className="fa-solid fa-user"></i>}
            iconAfter={<i className="fa fa-trash"></i>} />
    )
};

export default BadgeExample;