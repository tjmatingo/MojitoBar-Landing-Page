import {navLinks} from '../../constants/index.js'

// ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4


const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    Velvet Pour
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href="{`#${link.id}`}">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;