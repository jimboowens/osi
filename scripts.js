// all onload sections, only main to be modified after

let navBar = document.querySelector('.navBar')
let main = document.querySelector('.main')
let footer = document.querySelector('.footer')

//================================START OF HTML TO BE INJECTED================================
//========================================HTML ON LOAD========================================
let navBarHTML=`
    <nav class="blue darken-4">
        <ul>
            <li><a class="OSIJobs"href="/">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a><div class="about">About Us</div></div></a></li>
            <li><a><div class="contact">Contact Us</div></a></li>
            <li><a><div class="employerServices">Employer Services</div></a></li>
            <li><a><div class="ventureCapitalPartnership">Venture Capital Partnership</div></a></li>
            <li><a href="https://loxo.co/osi-jobs"><div>Job Listings</div></a></li>
        </ul>
        <div id="dropdown" class="show-on-med-and-down"><a>Menu</a></div></div>
        <div id="panel" class="blue darken-4 right show-on-med-and-down">
            <a><div class="about">About Us</div></a>
            <a><div class="contact">Contact Us</div></a>
            <a><div class="employerServices">Employer Services</div></a>
            <a><div class="ventureCapitalPartnership">Venture Capial Partnership</div></a>
            <a href="https://loxo.co/osi-jobs"><div>Job Listings</div></a>
        </div>
    </nav>
`
//================================MAIN CONTENT, THIS HTML IS REPLACED ONCLICK EVENTS================================

let mainHTML=`
    <div class="your-class"></div>
    <div class="your-class">
        <div class="sliderImage">
            <img class="z-depth-5" src="./public/images/fill.jpg" class="image1" />
        </div>
        <div class="sliderText">
            <h2>We fill the following types of positions</h2>
            <p>Operations/Manufacturing • Purchasing/Supply Chain • Research & Development • Quality Assurance • Sales (National/Regional/DSD) • Engineering/Maintenance • CEO, CFO, COO, GM • Project Management • Customer Service • Food Safety • Distribution/Logistics Management • Sanitation</p>
        </div>
        <div class="sliderImage">
            <img class="z-depth-5" src="./public/images/grass.jpg" class="image2"/>
        </div>
        <div class="sliderText">
            <h2>Our Mission Statement:</h2>
            <p>Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</p>
        </div>
        <div class="sliderImage">
            <img class="z-depth-5" src="./public/images/veggies.jpg" class="image3" />
        </div>
        <div class="sliderText">
            <h2>Excellence in Food Industry Recruitment</h2>
            <p>At OSI, we specialize in food industry executive recruitment. Whether you are an employer looking for the perfect candidate, or you a food industry professional looking to make a change, feel free to take a look around.</p>
        </div>
        </div>
        <div class="container">
        <div class="row">
            <div class="col s12 m4">
                <h3>Welcome to OSI</h3>
                <h3>Excellence in Food Industry Executive Recruitment</h3>
                <div>
                    <ul>
                        OSI is a 20+ year-old search firm that specializes in the retained and contingency recruitment of food industry professionals.
                        The firm's Senior Partners each hold MS degrees in Food Science and have significant food industry experience.
                    </ul>
                </div> <br>
                <div>
                    <h3>Mission Statement:</h3>
                    <div>
                        <ul>Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</ul>
                    </div>
                </div>
            </div>
            <div class="col s12 m4">
                <h3>Who We Are</h3>
                <div>
                    <ul class="bullet-content">
                        <li>Strong commitment to professional representation of candidates and client companies.</li>
                        <li>Handle each search with the highest degree of ethical standards.</li>
                        <li>Member of Georgia Association of Personnel Services (GAPS).</li>
                        <li>Member of Top Echelon.</li>
                        <li>Exceptionally strong technical database and networking capabilities.</li>
                        <li>Proven results with an extensive list of satisfied "long-term" candidates and client companies.</li>
                    </ul>
                </div>
            </div>
            <div class="col s12 m4">
                <h3>New Jobs:</h3>
                <div id="loxoResponse"></div>
            </div>
        </div>
    </div>
`
//======================================END MAIN HTML CONTENT=================================
let footerHTML = `
<nav class="nav-wrapper blue darken-4 hide-on-med-and-down footer">
    <ul>
        <li class="OSIJobs"><a href="/">OSI Jobs</a></li>
        <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
        <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
        <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
    </ul>
    <ul>
        <li>© 2019 All Rights Reserved</li>
    </ul>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a><div class="about">About Us</div></div></a></li>
        <li><a><div class="contact">Contact</div></a></li>
        <li><a href="https://loxo.co/osi-jobs"><div>Job Listings</div></a></li>
    </ul>
</nav>
`
//================================END OF ONLOAD HTML INJECTIONS================================
//=============================START OF ONCLICK HTML TO BE INJECTED============================
let aboutHTML = `
    <div class="aboutPage">
        <div class="headerDiv blue darken-4">
            <div class="headerText">About Us</div>  
        </div>
        <div class="container">
            OSI, a group of food industry recruiters, was established in 1992 and currently operates offices in Georgia, North Carolina, and Northern Virginia. OSI is a member of and adheres to all ethics and standards of the Georgia Association of Personnel Services.
            <em>Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</em>
        </div>
        <div class="headerDiv blue darken-4">
            <div class="headerText">Our Team</div>
        </div>
        <div class="container">
            <div class="memberName"><h3>Tim Oliver  – Recruiter / Senior Partner, CPC</h3></div>
            <div class="member row">
                <div class="col s4">
                    <img class="memberImage z-depth-5" src="./public/images/Tim.jpeg" />
                </div>
                <div class="memberDescription col s8">
                    <div>
                    Tim has been recruiting in the food industry for 20+ years. He previously held office level positions with two other nationwide search firms before starting OSI, his own company of food industry recruiters, in 1992.&nbsp;Tim has BS &amp; MS&nbsp;degrees in Food Science from the University of Georgia. He worked in R&amp;D for a Fortune 500 company and a Production Supervisor for a major food processor. He is a Certified Personnel Consultant as awarded by the National Association of Personnel Services.
                    </div>
                </div>
            </div>
            <div class="memberName"><h3>Dave Buergler – Recruiter / Senior Partner</h3></div>
            <div class="member row">
                <div class="col s4">
                <img class="memberImage z-depth-5" src="./public/images/Dave.png" />
                </div>
                <div class="memberDescription col s8">
                    <div>
                    Dave has BS and MS degrees from the University of Missouri. He has 20+ years of industry experience. Dave started his career as a Food Technologist for a Fortune 500 company. Then he moved into the area of Sensory/Marketing Research. Dave then joined a large foodservice company as Senior Manager of Marketing Research. He eventually held Director-level positions in New Product Marketing, Brand Management, and Field Marketing. Dave took his background and experience to the team of food industry recruiters in 1998.
                    </div>
                </div>
            </div>
            <div class="memberName"><h3>Joel Oliver – Senior Recruiter</h3></div>
            <div class="member row">
                <div class="col s4">
                    <img class="memberImage z-depth-5" src="./public/images/Joel.png" />
                </div>
                <div class="memberDescription col s8">
                    <div>
                    Joel followed in his father’s footsteps as a recruiter after completing his Masters degree. What began as a temporary job to make ends meet has turned into a career. With his M.Div., his heart is for ministry and serving God’s church globally. But today’s economy calls more and more for bivocational ministers. Joel has been with OSI since 2012 including a 12 month sabbatical to serve with his wife as missionaries in Honduras.
                    </div>
                </div>
            </div>
            <div>
            We are a member of <a href="https://www.Bio-Partners.com" target="_blank" rel="noopener noreferrer">Bio-Partners</a> It’s a consortium of highly experienced, successful recruiters specializing in key talent. In pharmaceutical, biotech/life sciences, medical device, bioinformatics, information technology, & healthcare corporations.
            </div>
        </div>
    </div>
`

let contactHTML = `
    <div class="contactPage">
        <div class="headerDiv blue darken-4">
            <div class="headerText">Contact us</div>
        </div>
        <div class="container">
            <p>At OSI, we aren’t some unapproachable mega-corporation with hoops to jump through and forms to fill out. If you have a question for us or have something to tell us, we would like to hear it. Feel free to drop us a line or give us a call.</p>
            <div class="row">
                <div class="col s4">
                    <img class="contactImage" src="./public/images/contact_us.png" />
                </div>
                <div class="contactOSI col s8">
                    <div class="memberName"><h3>Tim Oliver  – Recruiter / Senior Partner, CPC</h3></div>
                    <div class="member row">
                        <div class="col s4">
                            <img class="memberImage z-depth-5" src="./public/images/Tim.jpeg" />
                        </div>
                        <div class="memberDescription col s8">
                            <div>
                                <a href="mailto:tim@osijobs.com target="blank">Email Tim</a>
                                <p>P.O. Box 401</p>
                                <p>Lake Hartwell, Georgia</p>
                                <p>Phone: 770.760.7661</p>
                                <p><a href="http://www.linkedin.com/in/timoliverrecruiter">Linkedin</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="memberName"><h3>Dave Buergler – Recruiter / Senior Partner</h3></div>
                    <div class="member row">
                        <div class="col s4">
                        <img class="memberImage z-depth-5" src="./public/images/Dave.png" />
                        </div>
                        <div class="memberDescription col s8">
                            <div>
                                <a href="mailto:dave@osijobs.com target="blank">Email Dave</a>
                                <p>Apex, NC</p>
                                <p>Phone: 919-779-0833</p>
                                <p>Fax: 919-307-4942</p>
                                <p><a href="http://www.linkedin.com/in/dbuergler">Linkedin</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="memberName"><h3>Joel Oliver – Senior Recruiter</h3></div>
                    <div class="member row">
                        <div class="col s4">
                            <img class="memberImage z-depth-5" src="./public/images/Joel.png" />
                        </div>
                        <div class="memberDescription col s8">
                            <div>
                                <a href="mailto:joel@osijobs.com target="blank">Email Joel</a>
                                <p>Winchester, VA</p>
                                <p>Phone: 770-883-2214</p>
                                <p><a href="http://www.linkedin.com/in/joeltoliver">Linkedin</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

let employerServicesHTML = `
<div class="employerServicesPage">employer services</div>
`

let ventureCapitalPartnershipHTML = `
<div class="ventureCapitalPartnershipPage">venture capital partnership</div>
`

//redirect to loxo, but in the future event there's a local page, this is where the HTML would be injected
// let jobListingsHTML = `
// <div class="contactPage">job listings</div>
// `
//==================================END OF HTML TO BE INJECTED================================
//==================================AJAX REQUEST FOR LOXO JOBS================================


$.ajax({
    url: "https://loxo.co/api/osi-jobs/jobs",
    type: "GET",
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Basic b3NpX2pvYnM6NDc1NjI5YTQzMWMyNWEwNzlmMzBkYTFlYmY5Mjk4MDQ=');

        xhr.setRequestHeader('Content-type', 'multipart/form-data');


    }, 
    dataType: 'json', 
    xhrFields: {
        withCredentials: true
      },
    success: function(data) {
        console.log(data)
        var items = [];
        $.each( data.results, (i)=> {
            console.log(data.results[i])
        items.push(`<li id="${data.results[i].title}"><a href="https://loxo.co/job/${data.results[i].id}">${data.results[i].title}</a></li>`);
        });
   
        $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
        }).appendTo( "#loxoResponse" );
    },
});
// <a href="https://loxo.co/job/251748">Supplier Quality Manager</a>
//================================INJECTION OF HTML ONLOAD================================
$(navBar).html(navBarHTML)
$(main).html(mainHTML)
$(footer).html(footerHTML)

//=======================ONLOAD COMPLETE, LISTENING FOR CLICK EVENT=======================
$(document).ready(()=> {
    //slick slider data for mainHTML on load
    let slickSlideStart = $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        draggable:true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    })
    slickSlideStart
    //dropdown menu toggle
    $("#dropdown").click(()=>{
        $("#panel").slideToggle("slow")
        $(".your-class").slideToggle("slow")
    })
    //click handlers for links 
    
    // $(OSIJobs).click(()=>{
    //     $(main).html(mainHTML)
    //     slickSlideStart
    // })
    $(".about").click(()=>{
        $(main).html(aboutHTML)
    })
    $(".contact").click(()=>{
        console.log("contact")
        $(main).html(contactHTML)
    })
    $(".employerServices").click(()=>{
        $(main).html(employerServicesHTML)
    })
    $(".ventureCapitalPartnership").click(()=>{
        $(main).html(ventureCapitalPartnershipHTML)
    })
    //redirect to loxo, but in the future event there's a local page, this is where the click handler is
    // $(".jobListings").click(()=>{
    //     $(main).html(jobListingsHTML)
    // })
})

