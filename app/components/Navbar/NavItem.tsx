export default function NavItem({...props}){
  return(<li className={props.className}>{props.children}</li>)
}