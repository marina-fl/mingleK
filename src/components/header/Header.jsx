import Profile from './Profile';
import AddArticle from './AddArticle';
import DropdownList from './DropdownList';
import Logo from './Logo'
import './Header.css'

function Header(){
return (
    <div className="header">
     <Logo/>
     <AddArticle/>
     <DropdownList/>
     <Profile />
     </div>
         );
}


// function Header({userName,displayElement}) {
//     const profileHandler = () => displayElement(<Profile/>)
//     const dropdownHandler = () => displayElement(<DropdwnList/>)
//     const addArticleHandler = () => displayElement(<AddArticle/>)

//     return (
//         <div className="header">
//             <Logo />
//             <addArticle addArticleHandler={addArticleHandler} />
//             <DropdownList  dropdownHandler = {dropdownHandler}/>
//             <Profile profileHandler={profileHandler} userName={userName}/>

//         </div>
//         );
//     }
//     Header.propTypes = {
//         displayElement: PropTypes.func.isRequired,
//         userName: PropTypes.string
//      };
      
export default Header;
