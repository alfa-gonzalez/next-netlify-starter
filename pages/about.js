import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <main>
        <p className="description">This is the about page</p>
        <Link href="/">
          <a>Go back Home</a>          
        </Link>
        <section id="carousel">
    <div data-ride="carousel" className="carousel slide" id="carousel-1">
        <div className="carousel-inner">
            <div className="carousel-item">
                <div className="jumbotron hero-nature carousel-hero">
                    <h1 className="hero-title">Hero Nature</h1>
                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <p><a className="btn btn-primary hero-button plat" href="#">Learn more</a></p>
                </div>
            </div>
            <div className="carousel-item active">
                <div className="jumbotron hero-photography carousel-hero">
                    <h1 className="hero-title">Hero Photography</h1>
                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <p><a className="btn btn-primary hero-button plat" href="#">Learn more</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="jumbotron hero-technology carousel-hero">
                    <h1 className="hero-title">Ein Slider</h1>
                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <p><a className="btn btn-primary hero-button plat" href="#">Learn more</a></p>
                </div>
            </div>
            <div className="carousel-item"><img className="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" /></div>
        </div>
        <div><a href="#carousel-1" data-slide="prev" className="carousel-control-prev"><i className="fa fa-chevron-left"></i><span className="sr-only">Previous</span></a><a href="#carousel-1" data-slide="next" className="carousel-control-next"><i className="fa fa-chevron-right"></i><span className="sr-only">Next</span></a></div>
        <ol className="carousel-indicators">
            <li data-target="#carousel-1" data-slide-to="0"></li>
            <li data-target="#carousel-1" data-slide-to="1" className="active"></li>
            <li data-target="#carousel-1" data-slide-to="2"></li>
            <li data-target="#carousel-1" data-slide-to="3"></li>
        </ol>
    </div>
</section>
      </main>
    </div>
  );
}
