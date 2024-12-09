import {Link} from 'react-router-dom';
import DollarIcon from '../../assets/images/dollar.png';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    height="100px" width="100px"
                    src={DollarIcon}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-violet-600 hover:text-violet-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}