import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import api from "../API/api";
import OwlCarousel from 'react-owl-carousel';

const HotCollections = () => {

    axios.get(api.HotCollectionsApi).then((response) => {
      console.log(response.data);
    });
    const options = {
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        830: {
          items: 3,
        },
        1024: {
          items: 4,
        },
      },
    };

    return (
      <section id="section-collections" className="no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Hot Collections</h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>
            <>
            <OwlCarousel className="owl-theme" {...options}>
              {new Array(5).fill(0).map((_, index) => (
                // <div
                //   className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                 
                // >
                  <div className="nft_coll"  key={index} >
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img src={nftImage} className="lazy img-fluid" alt="" />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img
                          className="lazy pp-coll"
                          src={AuthorImage}
                          alt=""
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>Pinky Ocean</h4>
                      </Link>
                      <span>ERC-192</span>
                    </div>
                  </div>
                // </div>
              ))}
              </OwlCarousel>
              </>
          </div>
        </div>
      </section>
    );
}

export default HotCollections;
