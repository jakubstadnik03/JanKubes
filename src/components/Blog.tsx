import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Blog</h1>
            <p>Novinky, tipy a rady ze světa sportovního tréninku</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="grid grid-2">
            {/* Main Blog Posts */}
            <div className="main-posts">
              <article className="blog-post">
                <div className="post-image">
                  <img src="/blog/post1.jpg" alt="Tréninkové tipy" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span><FaCalendarAlt /> 15. března 2024</span>
                    <span><FaUser /> Jan Kubeš</span>
                    <span><FaTags /> Trénink, Výkonnost</span>
                  </div>
                  <h2>Jak optimalizovat svůj tréninkový plán</h2>
                  <p>
                    V tomto článku se podíváme na klíčové aspekty tvorby efektivního tréninkového plánu 
                    a jak dosáhnout maximálních výsledků při minimalizaci rizika zranění.
                  </p>
                  <Link to="/blog/post1" className="btn">Číst více</Link>
                </div>
              </article>

              <article className="blog-post">
                <div className="post-image">
                  <img src="/blog/post2.jpg" alt="Výživa pro sportovce" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span><FaCalendarAlt /> 10. března 2024</span>
                    <span><FaUser /> Jan Kubeš</span>
                    <span><FaTags /> Výživa, Regenerace</span>
                  </div>
                  <h2>Výživa pro sportovce: Základy a tipy</h2>
                  <p>
                    Správná výživa je klíčovým faktorem pro sportovní výkon. Přečtěte si o základních 
                    principech sportovní výživy a jak je aplikovat do svého tréninkového režimu.
                  </p>
                  <Link to="/blog/post2" className="btn">Číst více</Link>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3>Kategorie</h3>
                <ul className="category-list">
                  <li><Link to="/blog/category/training">Trénink</Link></li>
                  <li><Link to="/blog/category/nutrition">Výživa</Link></li>
                  <li><Link to="/blog/category/performance">Výkonnost</Link></li>
                  <li><Link to="/blog/category/recovery">Regenerace</Link></li>
                  <li><Link to="/blog/category/equipment">Vybavení</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3>Nejnovější příspěvky</h3>
                <ul className="recent-posts">
                  <li>
                    <Link to="/blog/post1">
                      <h4>Jak optimalizovat svůj tréninkový plán</h4>
                      <span>15. března 2024</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/post2">
                      <h4>Výživa pro sportovce: Základy a tipy</h4>
                      <span>10. března 2024</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3>Archiv</h3>
                <ul className="archive-list">
                  <li><Link to="/blog/archive/2024/03">Březen 2024</Link></li>
                  <li><Link to="/blog/archive/2024/02">Únor 2024</Link></li>
                  <li><Link to="/blog/archive/2024/01">Leden 2024</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 