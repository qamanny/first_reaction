import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {useState} from 'react';
const Overview = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">DecSoftware2020</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/qamanny">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Components
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/Prop">Props</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/User">Static Data</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/States">States</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="Lifting-States/Searchable">Lifting States (Searchable List)</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/Lifting-States/ProductManager">Lifting States (Product Manager)</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/UseEffect">UseEffect-Hooks</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Overview; 