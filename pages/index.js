import Link from 'next/link'

export default function Home() {
  return (
    <>
    <header className="masthead" style={{}}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-7 my-auto">
              <div className="mx-auto header-content">
                <h1 className="mb-5">
                  New Age is an app landing page that will help you beautifully
                  showcase your new mobile app, or anything else!
                </h1>
                <a
                  className="btn btn-outline-warning btn-xl js-scroll-trigger"
                  role="button"
                  href="#download"
                >
                  Start Now for Free!
                </a>
              </div>
            </div>
            <div className="col-lg-5 my-auto">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device" style={{}}>
                    <div className="screen">
                      {/*
                      <Image
                        src="/images/demo-screen-1.jpg"
                        alt="Picture of the author"
                        width={474}
                        height={843}
                      />
                      */ }
                      <img className="img-fluid" src="/images/demo-screen-1.jpg" />
                    </div>
                    <div className="button"></div>
                  </div>
                </div>
              </div>
              <div className="iphone-mockup"></div>
            </div>
          </div>
        </div>
      </header>

    <div className="container">
      <main>
        <p className="description">
          Get started by editing [CHANGED 2].. <code>pages/index.js</code>
        </p>
        <Link href="/about">
          <a>About Us</a>
        </Link>

        
      </main>

      
    </div>
    </>
  );
}
