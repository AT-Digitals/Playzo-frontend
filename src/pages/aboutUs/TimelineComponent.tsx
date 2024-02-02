import "./Timeline.css";


export default function TimelineComponent() {
    return (
      
        <section className="timeline">
        <ol>
          <li className="item1">
            <div className="case1">
                <h4 style={{marginLeft: "-92px", fontSize: "16px", marginTop: "-5px"}}>Lorem Ipsum</h4>
                <h2 style={{fontSize: "33px", marginLeft: "-111px", marginTop: "-15px", color: "#15b5fc"}}>2020</h2>
            <p style={{marginTop: '-24px', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </li>
          <li className="item2">
            <div className="case2">
            <h4 style={{marginLeft: "-92px", fontSize: "16px", marginTop: "30px"}}>Lorem Ipsum</h4>
                <h2 style={{fontSize: "33px", marginLeft: "-111px", marginTop: "-15px", color: "#15b5fc"}}>2021</h2>
                 <p style={{marginTop: '-24px', textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </li>
        
          <li className="item3">
            <div className="case3">
            <h4 style={{marginLeft: "84px", fontSize: "16px", marginTop: "-5px"}}>Lorem Ipsum</h4>
                <h2 style={{fontSize: "33px", marginLeft: "111px", marginTop: "-15px", color: "#15b5fc"}}>2022</h2>
                <p style={{marginTop: '-24px', textAlign: "end"}}>Lorem ipsum dolor sit amet, consectetur elit, ut labore dolore magna aliqua.</p>
            </div>
          </li>
          <li className="item4">
            <div className="case4">
            <h4 style={{marginLeft: "84px", fontSize: "16px", marginTop: "10px"}}>Lorem Ipsum</h4>
                <h2 style={{fontSize: "33px", marginLeft: "111px", marginTop: "-15px", color: "#15b5fc"}}>2023</h2>
                <p style={{marginTop: '-24px', textAlign: "justify"}}> Lorem ipsum dolor sit amet, consectetur elit, ut labore dolore magna aliqua.</p>
            </div>
          </li>
          <li className="item5">
            <div className="case5">
            <h4 style={{marginLeft: "84px", fontSize: "16px", marginTop: "10px"}}>Lorem Ipsum</h4>
                <h2 style={{fontSize: "33px", marginLeft: "111px", marginTop: "-15px", color: "#15b5fc"}}>2024</h2>
                <p style={{marginTop: '-24px', textAlign: "justify"}}> Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </li>
          <li></li>
        </ol>
        </section>
       
    )
}