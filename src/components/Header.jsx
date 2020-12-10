import Avatar from './Avatar';
import AddArticle from './AddArticle';
import DropdownList from './DropdownList';
import Logo from './Logo'
function Header() {

    return (
        <div>
        <h1>It's header component</h1>
        <Logo/>
       <Avatar />
       <DropdownList/>
       <AddArticle/>
       </div>
    );
}

export default Header;