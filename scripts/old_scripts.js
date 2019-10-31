// all onload sections, only main to be modified after

let navBar = document.querySelector('.navBar')
let main = document.querySelector('.main')
let footer = document.querySelector('.footer')

console.log(`this is a work of Jim Owens. Find me at jimowens.dev, or github.com/jimboowens`)

//================================START OF HTML TO BE INJECTED================================
//========================================HTML ON LOAD========================================
let navBarHTML=`
    <nav class="blue darken-4">
        <ul>
            <li><a class="OSIJobs waves-effect" href="/">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect navOptions about">About Us</a></li>
            <li><a class="waves-effect navOptions contact">Contact Us</a></li>
            <li><a class="waves-effect navOptions employerServices">Employer Services</a></li>
            <li><a class="waves-effect navOptions ventureCapitalPartnership">Venture Capital Partnership</a></li>
            <li><a class="waves-effect navOptions jobListings" >Job Listings</a></li>
        </ul>
        <div id="dropdown" class="show-on-med-and-down"><a>Menu</a></div>
        <div id="panel" class="col s4 offset-s8 show-on-med-and-down">
            <a class="waves-effect dropdownOptions blue darken-4 about">About Us</a>
            <a class="waves-effect dropdownOptions blue darken-4 contact">Contact Us</a>
            <a class="waves-effect dropdownOptions blue darken-4 employerServices">Employer Services</a>
            <a class="waves-effect dropdownOptions blue darken-4 ventureCapitalPartnership">Venture Capial Partnership</a>
            <a class="waves-effect dropdownOptions blue darken-4 jobListings" >Job Listings</a>
        </div>
    </nav>
`
//====================MAIN CONTENT, THIS HTML IS REPLACED ONCLICK EVENTS====================

let mainHTML=`
    <div class="your-class"><div class="sliderImage"></div></div><div class="container"></div></div>
    <div class="your-class">
        <div class="sliderImage">
            <img class="z-depth-5" src="./public/images/veggies.png" />
        </div>
        <div class="sliderText">
            <h3>Excellence in Food Industry Recruitment</h3>
            <p>At OSI, we specialize in food industry executive recruitment. Whether you are an employer looking for the perfect candidate, or you a food industry professional looking to make a change, feel free to take a look around.</p>
        </div>
        <div class="sliderImage">
            <img class="z-depth-5" src="./public/images/fill.jpg" />
        </div>
        <div class="sliderText">
            <h3>We fill the following types of positions</h3>
            <p>Operations/Manufacturing • Purchasing/Supply Chain • Research & Development • Quality Assurance • Sales (National/Regional/DSD) • Engineering/Maintenance • CEO, CFO, COO, GM • Project Management • Customer Service • Food Safety • Distribution/Logistics Management • Sanitation</p>
        </div>
        <div class="sliderImage">
            <img class="z-depth-5" src="./public/images/grass.png"/>
        </div>
        <div class="sliderText">
            <h3>Our Mission Statement:</h3>
            <p>Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col s12 m4">
                <h3>Welcome to OSI</h3>
                <h3>Excellence in Food Industry Executive Recruitment</h3>
                <div>
                    <ul>
                        OSI is a 25+ year-old search firm that specializes in the retained and contingency recruitment of food industry professionals.
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
            <li><a class="OSIJobs waves-effect" href="/">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul>
            <li>© 2019 All Rights Reserved</li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect navOptions about">About Us</a></li>
            <li><a class="waves-effect navOptions contact">Contact</a></li>
            <li><a class="waves-effect navOptions jobListings" >Job Listings</a></li>
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
                        Tim has been recruiting in the food industry for 25+ years. He previously held office level positions with two other nationwide search firms before starting OSI, his own company of food industry recruiters, in 1992.&nbsp;Tim has BS &amp; MS&nbsp;degrees in Food Science from the University of Georgia. He worked in R&amp;D for a Fortune 500 company and a Production Supervisor for a major food processor. He is a Certified Personnel Consultant as awarded by the National Association of Personnel Services.
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
                        Dave has BS and MS degrees from the University of Missouri. He has 25+ years of industry experience. Dave started his career as a Food Technologist for a Fortune 500 company. Then he moved into the area of Sensory/Marketing Research. Dave then joined a large foodservice company as Senior Manager of Marketing Research. He eventually held Director-level positions in New Product Marketing, Brand Management, and Field Marketing. Dave took his background and experience to the team of food industry recruiters in 1998.
                    </div>
                </div>
            </div>
            <div class="memberName"><h3>Joel Oliver – Senior Recruiter</h3></div>
            <div class="member row">
                <div class="col s4">
                    <img class="memberImage z-depth-5" src="./public/images/Joel(1).png" />
                </div>
                <div class="memberDescription col s8">
                    <div>
                        Joel followed in his father’s footsteps as a recruiter after completing his Masters degree. What began as a temporary job to make ends meet has turned into a career. With his M.Div., his heart is for ministry and serving God’s church globally. But today’s economy calls more and more for bivocational ministers. Joel has been with OSI since 2012 including a 12 month sabbatical to serve with his wife as missionaries in Honduras.
                    </div>
                </div>
            </div>
            <div>
                We are a member of <a href="https://southeast-recruiters.com" target="_blank" rel="noopener noreferrer">Bio-Partners</a>. It’s a consortium of highly experienced, successful recruiters specializing in key talent. In pharmaceutical, biotech/life sciences, medical device, bioinformatics, information technology, & healthcare corporations.
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
                                <p><a href="mailto:tim@osijobs.com" target="blank">Email Tim</a></p>
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
                                <p><a href="mailto:dave@osijobs.com" target="blank">Email Dave</a></p>
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
                            <img class="memberImage z-depth-5" src="./public/images/Joel(1).png" />
                        </div>
                        <div class="memberDescription col s8">
                            <div>
                                <p><a href="mailto:joel@osijobs.com" target="blank">Email Joel</a></p>
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
    <div class="employerServicesPage">
        <div class="headerDiv blue darken-4">
            <div class="headerText">
                Employer Services
            </div>
        </div>
        <div class="container">
            <div class="row servicesContent">
                <div class="col s4">
                    <img class="z-depth-5 servicesImage" src="./public/images/beakers.jpg" />
                </div>
                <div class="col s8 right">
                    <p>If your company has positions that need to be filled, you have come to the right place. OSI was established in 1992 and now has offices in Atlanta, Raleigh, and Richmond. Our staff consists of professionals with diverse industry experience in the areas of food technology, marketing, and manufacturing. We take pride in locating professional candidates that meet the criteria established by the companies we represent. We will only send candidates that are interested in the position, willing to relocation if necessary, have the required experience and education, and meet the salary requirements. We will work with your company on a contingency or retained basis.</p>
                </div>
            </div>
            <div class="row servicesContent">
                <div class="col s4 push-s8">
                    <img class="z-depth-5 right servicesImage" src="./public/images/icecreamberries.jpg" />
                </div>
                <div class="col s8 pull-s4 right">
                    <p>OSI has a database of over 15,000 food industry professional candidates to help initiate a search. Since we talk with people in the food industry on a daily basis, we are in contact with many qualified individuals that can fill your company’s needs.</p>
                </div>
            </div>
            <div class="row servicesContent">
                <div class="col s4">
                    <img class="z-depth-5 servicesImage image2" src="./public/images/factory.jpg" />
                </div>
                <div class="col s8 right">
                    <p>We Offer the Following Services:</p>
                    <ul class="bullet-content">
                        <li>Position advertising via OSI website and several online job boards, listed in major food industry publications including Food Technology, Food Processing, Food Product Design, Food Engineering, and Prepared Foods.</li>
                        <li>Recruitment of food industry professionals obtained from database (15,000+ candidates), networking, the latest in social media (LinkedIn, Facebook, etc.), and targeted “head-hunting.”</li>
                        <li>Screening and phone interviewing of potential candidates.</li>
                        <li>Reference checks when necessary.</li>
                    </ul>
                </div>
            </div>
            <div class="row servicesContent">
                <div class="col s4 push-s8">
                    <img class="z-depth-5 servicesImage image3 right" src="./public/images/peppers.jpg" />
                </div>
                <div class="col s8 pull-s4 right">
                    <p>Our Guarantee:</p>
                    <ul class="bullet-content">
                        <li>We take full ownership for the search, recruitment, advertising, screening, phone interviewing, reference checks, and overall placement process.</li>
                        <li>We represent the client company with the highest degree of ethical standard.</li>
                        <li>We are completely committed to our client’s total satisfaction.</li>
                        <li>We guarantee all placements for 3 months from start date. If the candidate leaves for any reason, or is discharged during this time frame, OSI will replace the employee.</li>
                        <li>We search and recruit without regard to race, religion, national origin, ethnic background, sex, age, medical condition, handicap, or veteran status.</li>
                    </ul>
                </div>
            </div>
            <div class="row servicesContent">
                <div class="col s4">
                    <img class="z-depth-5 servicesImage" src="./public/images/cheeses.jpg" />
                </div>
                <div class="col s8 right">
                    <br>
                    <br>
                    <p>To put our experience to work, simply <a href="mailto:tim@osijobs.com,joel@osijobs.com,dave@osijobs.com">Contact Us</a></p>
                </div>
            </div>
        </div>
    </div>
`

let ventureCapitalPartnershipHTML = `
    <div class="ventureCapitalPartnershipPage">
        <div class="headerDiv blue darken-4">
            <div class="headerText">
                Venture Capital Partnership
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col s4">
                    <img class="ventureImage z-depth-5" src="./public/images/venture.png" />
                </div>
                <div class="col s8">
                    <div>
                        <p>OSI has a history of success in partnering with private equity and venture capital firms. We provide a complete package of venture capital executive search services. Many of these firms work closely with entrepreneurs to nurture and develop food & beverage businesses and innovative brands that engage today’s consumer. However, very few of these firms have the networking and recruiting expertise to identify top industry talent. OSI is a “preferred” business partner with capital venture firms because of the following:</p>
                        <ul class="bullet-content">
                            <li>Ability to respond immediately to our client needs. OSI has a sense of urgency that is unmatched in the recruiting industry.</li>
                            <li>Flexibility in providing “full-spectrum” recruiting, from senior management (CEO, COO, CFO, CMO, SVP, etc.) to the manager and supervisor levels.</li>
                            <li>Experienced in venture capital executive search. We have successfully partnered with a number private equity & venture capital firms to provide excellent executive search service.</li>
                            <li>Exceptional knowledge, understanding, and experience in all aspects of the food industry. OSI will not have to spend time “learning” the industry.</li>
                            <li>Ability to provide clients with “full-service” recruiting, including screening and testing of candidates, in addition to conducting background and reference checks.</li>
                        </ul>
                        <p>Note that OSI has extensive experience recruiting at the following levels of management:</p>
                        <ul class="bullet-content">
                            <li>Executive (CEO, COO, CFO, VP).</li>
                            <li>Director.</li>
                            <li>Manager/Supervisor.</li>
                        </ul>
                        <p>Within the following disciplines:</p>
                        <p>Sales. Marketing. Manufacturing. Operations. Engineering. Purchasing. Supply Chain. Logistics. R&D. QA. Food Safety. Technical Services. Maintenance. Accounting. HR. etc...</p>
                        <p>If you are a private equity or venture capital firm, feel free <a href="mailto:joel@osijobs.com,tim@osijobs.com,dave@osijobs.com">Contact Us</a> to discuss how we can maximize the success of your company. We are here to help with your venture capital executive search.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

//redirect to loxo, but in the future event there's a local page, this is where the HTML would be injected
let jobListingsHTML = `
    <div class="jobListingsPage">
        <div class="headerDiv blue darken-4">
            <div class="headerText">
                Job Listings
            </div>
        </div>
            <div class="container">
                <h3>Here is a list of available jobs we have, listed alphabetically:</h3>
                <div id="jobListingsResponse"></div>
            </div>
    </div>
`
//==================================END OF HTML TO BE INJECTED================================

// prototype function to shuffle response array from loxo

Array.prototype.shuffle = function() {
  let i=this.length,j,placeHolder;
  if (i==0)return this;
  while(--i){
     j=Math.floor(Math.random()*(i+1));
     placeHolder=this[i];
     this[i]=this[j];
     this[j]=placeHolder;
  }
  return this;
}

//==================================AJAX REQUEST FOR LOXO JOBS================================

$.ajax({
    url: "https://loxo.co/api/osi-jobs/jobs",
    type: "GET",
    // loxo docs are very unforgiving, and this set header was only sent after multiple painful emails to support. 
    // this might get changed at some point if and when this basic auth expires, but emailing support is the only way I know of to get it.
    beforeSend: xhr=> {xhr.setRequestHeader('Authorization', 'Basic b3NpX2pvYnM6NDc1NjI5YTQzMWMyNWEwNzlmMzBkYTFlYmY5Mjk4MDQ=')},
    // the following is the parameter passed in to only get active jobs from the database of jobs for OSI. Other params can be found in the docs:
    // http://help.loxo.co/articles/446640-integrate-your-job-listing-with-your-website-through-an-api
    // be warned-- they are the weakest of sauce.
    data:{"job_status_id":2841},
    // my guess is this sidesteps the username and password requirement.
    xhrFields: {withCredentials: true},
    success: data=> {
        // console.log(`data received is: ${data}`)
        let items = [];
        $.each( data.results, i=> {
            // console.log(data.results[i])
            // this builds out the list items in the jobs column of the main content.
            items.push(`<li id="${data.results[i].title}"><a href="https://loxo.co/job/${data.results[i].id}">${data.results[i].title}</a> (${data.results[i].macro_address})</li>`);
        });

        // shuffle items in the list so they aren't alphabetical based on the number of items in the list
        items.shuffle()
        //truncate list to make more consistent with other two columns in div
        let itemsFinalForHomePage = items.slice(0,10)
        // push final items array to html for view on homepage
        $(`<ul/>`,{
        "class":"bullet-content",
        html:itemsFinalForHomePage.join(``)
        }).appendTo( "#loxoResponse" )
    },
})
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
        $("#panel").toggle()
        // $(".your-class").slideToggle("slow")
    })
    //===================click handlers for links  ===================
    
    // $(OSIJobs).click(()=>{
    //     $(main).html(mainHTML)
    //     slickSlideStart
    // })
    $(".about").click(()=>{
        window.history.pushState(null, 'Title', '/about-us')
        $(main).html(aboutHTML)
    })
    $(".contact").click(()=>{
        window.history.pushState(null, 'Title', '/contact-us')
        $(main).html(contactHTML)
    })
    $(".employerServices").click(()=>{
        window.history.pushState(null, 'Title', '/employer-services')
        $(main).html(employerServicesHTML)
    })
    $(".ventureCapitalPartnership").click(()=>{
        window.history.pushState(null, 'Title', '/venture-capital-partnership')
        $(main).html(ventureCapitalPartnershipHTML)
    })
    $(".jobListings").click(()=>{
        window.history.pushState(null, 'Title', '/job-listings')
        $(main).html(jobListingsHTML)
        // please refer to previous loxo ajax request for info; this one is a simpler version
        $.ajax({
            url: "https://loxo.co/api/osi-jobs/jobs",
            type: "GET",
            beforeSend: xhr=> {xhr.setRequestHeader('Authorization', 'Basic b3NpX2pvYnM6NDc1NjI5YTQzMWMyNWEwNzlmMzBkYTFlYmY5Mjk4MDQ=')},
            data:{"job_status_id":2841},
            xhrFields: {withCredentials: true},
            success: data=> {
                let items = [];
                $.each(data.results, i=> items.push(`<li id="${data.results[i].title}"><a href="https://loxo.co/job/${data.results[i].id}">${data.results[i].title}</a> (${data.results[i].macro_address})</li>`));
                $(`<ul/>`,{
                "class":"bullet-content",
                html:items.join(``)
                }).appendTo("#jobListingsResponse")
            },
        })
    })
})