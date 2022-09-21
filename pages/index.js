import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  function aboutUs() {
    var myOffsetVal = document.getElementsByClassName("myContentDiv1")[0].offsetTop - 60;
    window.scrollTo({
      top: myOffsetVal,
      left: 0,
      behavior: 'smooth'
    });
  }
  function WhatDoWeDo() {
    var myOffsetVal = document.getElementsByClassName("myContentDiv2")[0].offsetTop - 60;
    window.scrollTo({
      top: myOffsetVal,
      left: 0,
      behavior: 'smooth'
    });
  }
  function ourProducts() {
    var myOffsetVal = document.getElementsByClassName("myContentDiv3")[0].offsetTop - 60;
    window.scrollTo({
      top: myOffsetVal,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>KC Distribution Services</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
      </Head>

      <main>
      <div id="myHeaderDiv" className="mainHeaderCopy">
        <div id="myHeaderDivContent">
            <ul>
                <li className="aboutUs" onClick={aboutUs}>About us</li>
                <li className="WhatDoWeDo" onClick={WhatDoWeDo}>What we do</li>
                <li className="ourProducts" onClick={ourProducts}>Our products</li>
            </ul>
        </div>
    </div>
    <div id="myHeaderDiv">

    </div>

    <div id="topDataDiv">
        <div id="outerDiv">
            <div id="innerDiv">
                <img id="p1" src="./images/knife.png"/>
                <div id="myPlateDiv">
                    <div id="h1holder">
                        <h1>KC</h1>
                        <h4>Distribution Services</h4>
                        <h3>We strive to maintain the highest level of customer service.</h3>
                    </div>
                </div>
                <img id="p3" src="./images/fork.png"/>
            </div>
        </div>        
    </div>




    <div id="myContentDiv" className="myContentDiv1">
        <div>
            <div id="imgContent">
                <img src="./images/immi.jpg"/>
            </div>
            <div id="textContent">
                <div>
                    <h2>About us</h2>
                    <p>Here at KC Distribution Services, we strive to maintain the highest level of customer service and ensure we only provide our customers with products of the highest quality. 
                        <br/><br/>Throughout the years of growing our company we have built strong relationships and partnerships with our manufacturers In our efforts to guarantee our customers a hassle-free transaction every time. </p>
                </div>
            </div>
        </div>
    </div>


    <div id="myContentDiv" className="myContentDiv2">
        <div>
            <div id="imgContent">
                <img src="./images/helth.jpg"/>
            </div>
            <div id="textContent">
                <div>
                    <h2>What we do</h2>
                    <p>KC Distribution Services specialise in the wholesale of catering equipment and products within the UK. Having successfully provided our customers with the products they need for over 10 years, we have established a great team who work tirelessly to deliver you the best products at the lowest prices. </p>
                </div>
            </div>
        </div>
    </div>


    <div id="myContentDiv" className="myContentDiv3">
        <div>
            <div id="imgContent">
                <img src="./images/relign.jpg"/>
            </div>
            <div id="textContent">
                <div>
                    <h2>Our products</h2>
                    <p>Whether its barista tools, coffee beans and syrups or catering products of any kind, we can assure that you will be content when shopping with us. To further our quality guarantee, each and every product we supply goes through extensive quality testing before they are shipped to you.</p>
                </div>
            </div>
        </div>
    </div>
    

    <div id="myFooterDiv">
        <div id="myFooterDivContent">            
            <div id="footerLeftDiv">
                <h2>Contact</h2>
                <h4>For more information please call us on:</h4><h3>07746995834</h3>
                <h5>- or -</h5>
                <h4>email:</h4>
                <h3>info@kcdistributionservices.co.uk</h3>
            </div>
            <div id="footerRightDiv">
                <h2>Goto</h2>
                <ul>
                    <li className="aboutUs">About us</li>
                    <li className="WhatDoWeDo">What we do</li>
                    <li className="ourProducts">Our products</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="mainFooter">
       <p>This website is owned and operated by: KC Distribution Services Ltd (Company Number: 14092263)</p>
    <p>20-22 Wenlock Road, London, N1 7GU</p>
    </div>
        <Script id="myCustomScript">{`document.addEventListener("scroll", function() {
          var myScroll = document.getElementsByClassName("myContentDiv1")[0].offsetTop - window.pageYOffset + 60;
          var myScroll2 = window.pageYOffset;     
            var myScreenWidth = window.innerWidth;
            if(myScreenWidth>900){
              if(myScroll<60){
                document.getElementById("myHeaderDiv").style.backgroundColor = 'rgba(0,0,0,0.7)';
              }
              else if(myScroll>60){
                document.getElementById("myHeaderDiv").style.backgroundColor = 'rgba(0,0,0,0)';
              }
            }
            else{
              if(myScroll2>60){
                document.getElementById("myHeaderDiv").style.backgroundColor = 'rgba(0,0,0,0.9)';
              }
              else if(myScroll2<60){
                document.getElementById("myHeaderDiv").style.backgroundColor = 'rgba(0,0,0,0)';
              }

            }
        });
        `}
        </Script>
      </main>
    </>
  )
}
