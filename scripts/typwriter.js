/* <h1 class="title hidden stager">Hey! I'm Nashika, a full-stack web developer</h1>
<p class="hidden stager"> I occasionally take on freelancing opportunities and build aesthetic front-end and back-end projects</p> */

{/* <p class="hidden stager">From engaging UIs to <span>robust functionality</span>, I render websites that are meticulously designed to <span>elevate your brand</span> and drive success in the digital world. Weather you're  a <span>small business</span>, an <span>entrepreneur</span> or a <span>content creator</span>, I will enhance your <span>online presence.</span> I pay attention to every detail and commitment into building user-friendly experiences.</p>
<p class="hidden stager"> I make sure to deliver the projects on time and within the <span>budget</span>. My strong communication skills ensure <span>smooth collaboration</span>.</p>
<a href="https://on.contra.com/kL7WB8">Know more <span> on.contra</span></a> */}

var landingPageTitle = document.querySelector('#landing-page .content span');
var TypeWriter = new Typewriter(landingPageTitle,{
    delay: 75,
    loop: true
});

TypeWriter
.pauseFor(2000)
.typeString(`a freelancer`)
.pauseFor(500)
.deleteChars(10)
.typeString('web designer')
.pauseFor(500)
.deleteChars(12)
.typeString('full-stack web-developer')
.pauseFor(500)
.deleteChars(24)
.start()

var aboutContent = document.getElementById('about-content');
var TypeWriter = new Typewriter(aboutContent,{
    delay: 75,
});

TypeWriter
.pauseFor(4000)
.typeString(`<p >From engaging UIs to <span>robust functionality</span>, I render websites that are meticulously designed to <span>elevate your brand</span> and drive success in the digital world.</p>`)
.typeString(`<p> Weather you're  a <span>small business</span>, an <span>entrepreneur</span> or a <span>content creator</span>, I will enhance your <span>online presence.</span> I pay attention to every detail and commitment into building user-friendly experiences.</p>`)
.typeString(`<p"> I make sure to deliver the projects on time and within the <span>budget</span>. My strong communication skills ensure <span>smooth collaboration</span>.</p>`)
.typeString(`<a href="https://on.contra.com/kL7WB8">Know more <span> on.contra</span></a>`)
.start()