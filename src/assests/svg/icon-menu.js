const Menu = ({className, color}) => (

  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={15} className={className} >
    <path
      fill={color}
      fillRule="evenodd"
      d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
    />
  </svg>

)
export default Menu