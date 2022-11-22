import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"


const Footer = () => {

  return (
    <footer>
        <span>
            <a href={'https://github.com/hfz02'} target='_blank' rel='noreferrer'>
              <FaGithub size={30} />
            </a>
        </span>
        <span>
            <a href={'https://www.linkedin.com/in/01-muhammad-hafizh/'} target='_blank' rel='noreferrer'>
              <FaLinkedinIn size={30} />
            </a>
        </span>
        <span>
            <a href={'https://www.instagram.com/_mhhhhh/'} target='_blank' rel='noreferrer'>
              <FaInstagram size={30} />
            </a>
        </span>
    </footer>
  )
}

export default Footer

