import '../style/sidebar.scss';
import resume from '../assets/pdfs/web_resume.pdf';

const SidebarContent = ({ closeSidebar }: { closeSidebar: () => void }) => {
    return (
        <div id="sidebar" className="d-flex flex-column sidebar">
            <a href="/#about" className="sidebar-link" onClick={closeSidebar}>
                {'about'}
            </a>
            <a
                href="/#experience"
                className="sidebar-link"
                onClick={closeSidebar}
            >
                {'experience'}
            </a>
            <a
                href="/#projects"
                className="sidebar-link"
                onClick={closeSidebar}
            >
                {'projects'}
            </a>
            <a href={resume} className="sidebar-link" onClick={closeSidebar}>
                {'resume'}
            </a>
        </div>
    );
};

export default SidebarContent;
