import './Stylesheets/About.css'

function About() {
    return (
        <>
            <h1 class="text-3xl">Walton Habitat</h1>
            <p className='about-text-1'>Walton Habitat is the Walton High school Chapter of Northwest Metro Atlanta Habitat for Humanity. Our goal is to provide affordable, decent housing for those who would normally be unable to afford it.</p>
            
            <section className='data'>
                <div>
                    <h2>Global Impacts</h2>
                    <p>Since 1976, Habitat for Humanity has partnered with people in need of decent, affordable shelter to build or repair more than <b>800,000</b> houses! Today, more than <b>4 million people</b> live in Habitat homes across the globe.</p>
                </div>
                <div>
                    <h2>Local Impacts</h2>
                    <p>As a chapter, we have built <b>over 20 homes</b> in our <b>2 decades as a chapter</b> and hope to build many more in the future!</p>
                </div>
            </section>
        </>
    );
}

export default About;