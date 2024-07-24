import './styles/navbarV.css'
import { Link } from 'react-router-dom'

function NavbarV(){
    return (
        <div className='all'>
            <div className='left'>
                <div className="navbarV">
                    <div>
                        <h4>Javascript</h4>
                    </div>

                    <ul className='notions'>
                        <Link>Notion 1</Link>
                        <Link>Notion 2</Link>
                        <Link>Notion 3</Link>
                        <Link>Notion 4</Link>
                        <Link>Notion 5</Link>
                        <Link>Notion 6</Link>
                        <Link>Notion 7</Link>
                        <Link>Notion 8</Link>
                        <Link>Notion 9</Link>
                        <Link>Notion 10</Link>
                    </ul>
                </div>
            </div>
            <div className='rightPart'>
                <div className='top'>
                    <h3>Basic syntax</h3>
                    <Link>Learning with video</Link>
                </div>
                <p id="course">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo risus eget viverra lacinia. Integer bibendum a eros sit amet elementum. Donec ultricies elit id porttitor maximus. Aenean eget erat nisl. Vivamus eleifend leo ut egestas aliquam. In libero justo, commodo sed blandit eget, molestie sed urna. Nulla ut tincidunt tortor. Aliquam ut metus iaculis, varius tellus nec, molestie sapien. Ut vitae blandit turpis, vel rhoncus nibh. Cras eleifend vitae dolor vel elementum. Morbi venenatis fermentum elit, at euismod urna aliquet at. Sed vel turpis mollis, consectetur arcu vitae, scelerisque quam. Aliquam auctor sed purus non fermentum.
                Quisque ipsum orci, sagittis et porttitor non, mattis nec mi. Donec fringilla arcu vel neque feugiat tristique in sed nunc. Etiam maximus lectus id justo tempor, a pellentesque purus volutpat. Nunc dapibus condimentum ullamcorper. Aliquam sem eros, lobortis in rhoncus in, iaculis ac orci. Donec tincidunt consectetur ipsum, eget finibus purus efficitur ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse tempus pharetra urna, ac volutpat lectus congue et. Cras volutpat ex vel accumsan varius. Nulla bibendum est id risus sagittis, sed convallis velit sollicitudin. Mauris mollis leo imperdiet, bibendum nunc ut, egestas augue. Integer placerat nisi vel nibh blandit sagittis. Suspendisse id ante lorem. Nullam ac commodo risus. Aenean ac maximus ligula, id gravida est.
                </p>
            </div>
        </div>
    )
}

export default NavbarV;