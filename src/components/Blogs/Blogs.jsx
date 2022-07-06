import React,{useState} from "react";
import "./Blogs.css";
import BlogsImage from "../assets/blogsbannerimg.png";
import BlogsData from "../../BlogsData";
import MultiCarousel from "../CompanyCarousel/MultiCarousel";
import BlogsBigImage from "../assets/BlogsBigImage.svg";
import authphoto from "../assets/authphoto.svg";
import { HeartOutlined, MessageFilled } from "@ant-design/icons";
export default function Blogs() {
  const [ ShowComments,SetShowComments] = useState(false);

  const handleclick = () => {
     SetShowComments(true);
  }
  return (
    <div className="Blogs-Container">
      <div className="Blogs-Banner">
        <div className="BLogs-Header">
          <h1>Our Blogs</h1>
        </div>
        <div className="Blogs-Image">
          <img src={BlogsImage} alt="" />
        </div>
      </div>

      <div className="Blogs-Carousel">
        <div className="Blogs-Carousel-Track">
          <MultiCarousel>
            {BlogsData.map((BlogsDataIndex, index) => (
              <BlogsCardFunc key={index} {...BlogsDataIndex} />
            ))}
          </MultiCarousel>
        </div>
      </div>

      <div className="Blogs-Container-BlogSection">
        <div className="Blogs-Section-Image">
          <img src={BlogsBigImage} alt="" />
        </div>

        <div className="Blogs-Section-Content">
          <div className="Auth-Name">
            <div className="Auth-Photo">
              <img src={authphoto} alt="" />
            </div>
            <div className="Auth-Name-Name">
              <h2>Akash Singh</h2>
              <h4>UX/UI Designer</h4>
              <h5>21 April 2021</h5>
            </div>
          </div>

          <div className="Blogs-Section-Content-content">
            <p>
              Dental Travel Industry is way ahead of where it actually started.
              A coupleof years back , few patients travelled to neighbouring
              countries for affordable treatment options. They were often
              looking for just one treatment and were happy with the options
              available close to home.But the scenario has changed quite a bit
              in the last decade, people are now looking for exciting
              destinations and value for money for complete package of dental
              treatments.
            </p>

            <p>
              Another point which ranks quite high when choosing a destination
              is the ease of Communication & Travel . And since India ticks all
              of the above boxes it has emerged as the dental hub of southeast
              Asia. Withqualified doctors, affordability of travel and
              treatments and the variety of locations India has become a dream
              destination for patients from various countries including
              neighbourimg countries like Iran, Afganistanas well as USA, Canada
              and various European countries.
            </p>

            <p>
              Another point which ranks quite high when choosing a destination
              is the ease of Communication & Travel . And since India ticks all
              of the above boxes it has emerged as the dental hub of southeast
              Asia. Withqualified doctors, affordability of travel and
              treatments and the variety of locations India has become a dream
              destination for patients from various countries including
              neighbourimg countries like Iran, Afganistanas well as USA, Canada
              and various European countries.
            </p>

            <div className="Blogs-Content-Buttons">
              <button className="content-btn-1">
                <HeartOutlined />
              </button>
              <button onClick={handleclick} className="content-btn-2">
                <MessageFilled />
              </button>
            </div>
          </div>
        </div>
      </div>

      {ShowComments &&  
     <div className="Comments-Section">
        <div className="Comments">
          <div className="Comment-auth-profile-photo">
            <img src={authphoto} alt="-_-" />
          </div>
          <div className="Comment-auth-Name">
            <div className="Comment-auth-Name-Header">
              <h2>Akash Singh</h2>
              <div className="Comment-Status">
                <h5>2 days</h5>
              </div>
            </div>
            <div className="Comment-Description">
              {" "}
              <p>
                When it come to food India really has something for everyone and
                that's another great thing for travellers from across the globe.
                Please visit www.dentaltravellers.com for detailed information
                on various Indian destinations , dental procedures and more.
              </p>
            </div>
          </div>
        </div>
        <div className="Comments">
          <div className="Comment-auth-profile-photo">
            <img src={authphoto} alt="-_-" />
          </div>
          <div className="Comment-auth-Name">
            <div className="Comment-auth-Name-Header">
              <h2>Akash Singh</h2>
              <div className="Comment-Status">
                <h5>2 days</h5>
              </div>
            </div>
            <div className="Comment-Description">
              {" "}
              <p>
                When it come to food India really has something for everyone and
                that's another great thing for travellers from across the globe.
                Please visit www.dentaltravellers.com for detailed information
                on various Indian destinations , dental procedures and more.
              </p>
            </div>
          </div>
        </div>
        <div className="Comments">
          <div className="Comment-auth-profile-photo">
            <img src={authphoto} alt="-_-" />
          </div>
          <div className="Comment-auth-Name">
            <div className="Comment-auth-Name-Header">
              <h2>Akash Singh</h2>
              <div className="Comment-Status">
                <h5>2 days</h5>
              </div>
            </div>
            <div className="Comment-Description">
              {" "}
              <p>
                When it come to food India really has something for everyone and
                that's another great thing for travellers from across the globe.
                Please visit www.dentaltravellers.com for detailed information
                on various Indian destinations , dental procedures and more.
              </p>
            </div>
          </div>
        </div>

        <div className="PostComment">
          <textarea name="PostComment" id="ID-1" cols="100" rows="5" placeholder="Post Comment"></textarea>
              <div className="PostComment-Button">
                <button className="Post-Btn">Post</button>
              </div>
        </div>
      </div>}
    </div>
  );
}
function BlogsCardFunc(props) {
  const { image, Heading, content } = props;
  return (
    <div className="Blogs-Card">
      <div className="Blogs-Card-Image">
        <img src={image} alt="" />
      </div>

      <div className="Blogs-Card-Content">
        <h2>{Heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
