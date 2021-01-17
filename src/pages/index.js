import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql} from "gatsby";
import "../components/home.scss";

const IndexPage = (props) => {
    const services = props.data.allContentfulService.edges;
    const about = props.data.allContentfulAbout.edges;
    const team = props.data.allContentfulTeam.edges;
    const main_title = props.data.allContentfulTitle.edges;
    const hero_title = props.data.allContentfulHeading.edges;

    return (
        <Layout>
            <SEO title="Home"/>
            <h1 className="text-center p-3">{main_title[0].node.title}</h1>
            <h4 className="text-center">{main_title[0].node.create.create}</h4>
            <div className="heading-text">
                <div className="heading-text__text">
                    <h1 className="heading-text__heading">
                        {hero_title[0].node.title}
                    </h1>
                    <span className="heading-text__description">
                        {hero_title[0].node.description.description}
                    </span>
                </div>
            </div>

            <div className="service m-4">
                <div className="row">
                    {services && services.map((service, index) => {
                        return (
                            <div className="col-lg-4 p-0 p-b-25" key={index}>
                                <div className="service__text">
                                    <h3 className="service__heading">
                                        {service.node.name}
                                    </h3>
                                    <span className="service__description">
                                        {service.node.description.description}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="about">
                <h1 className="text-center p-3">{about[0].node.name}</h1>
                <p className="about__description">
                    {about[0].node.description.description}
                </p>
            </div>

            <div className="team">
                <h1 className="text-center">Team Members</h1>
                <div className="row team__Managers">
                    {
                        team.map((team, index) => {
                            return (
                                <div className="col-lg-3 team__Manager-div" key={index}>
                                    <div className="team__Manager">
                                        <div className="Manager-text">
                                            <span className="team__Manager-name">{team.node.name}</span>
                                            <span className="team__Manager-position">{team.node.position}</span>
                                        </div>
                                        <img src={team.node.image.fixed.src} className="Manager-img img-fluid" alt='abc'
                                             width="305px" height="318px"/>
                                    </div>
                                    <div className="text-center mt-2">
                                        {team.node.description}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query {
  allContentfulTitle {
    edges {
      node {
        title
          create {
            create
         }
      }
    }
  }
  allContentfulService {
    edges {
      node {
        name
        description {
          description
        }
      }
    }
  }
  allContentfulAbout {
    edges {
      node {
        name
        description {
          description
        }
      }
    }
  }
  allContentfulTeam {
    edges {
      node {
        name
        description
        position
        image {
          fixed {
            src
          }
        }
      }
    }
  }
  allContentfulHeading {
    edges {
      node {
        title
        description {
          description
        }
      }
    }
  }
 }
`