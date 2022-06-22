import React from 'react';
import axios from 'axios';
import "../style/konten.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


export default class Konten extends React.Component {
  state = {
      datas: [],
      isLoading: true,
      errors: null
  };

  resultNews() {
      axios
      .get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d44c853657804604bf1f092a0dae89fd'
          ).then(response =>
              response.data.articles.map(
                newsdata => ({
                  name: `${newsdata.source.name}`,
                  title: `${newsdata.title}`,
                  description: `${newsdata.description}`,
                  content: `${newsdata.content}`,
                  image: `${newsdata.urlToImage}`,
                  create: `${newsdata.publishedAt}`
                })
              )
          )
          .then(datas => {
              this.setState(
                {
                  datas,
                  isLoading: false
                }
              );
            })
            .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
      this.resultNews();
  }

  search(event) {
    let input = document.getElementById('search').value;
    input = input.toLowerCase()
    let content = document.getElementsByClassName('content');

    for(let i = 0; i < content.length; i++){
      if(!content[i].innerHTML.toLocaleLowerCase().includes(input)){
        content[i].style.display = 'none';
      }else{
        content[i].style.display="block";
      }
    }
  }

  render () {
    const {isLoading, datas} = this.state;
    return (
      <Container className='newss'>
          <Row className="mt-5 mb-3 justify-content-center">
          <Col md={3}>
              <div className='ms-5'>
                  <input id="search"
                         type="text"
                         placeholder="Cari Berita..." 
                         className="form-control input"
                         onChange={this.search.bind(this)}
                         />
              </div>
          </Col>
          </Row>
          <div className='row justify-content-center'>
            <div className='col-4'> 
              {!isLoading ? (
                datas.map(data => {
                  const { 
                    name,
                    title,
                    description,
                    image,
                    content,
                    create
                  } = data;
                  
                  return (
                      <div className='card content' style={{ width: '25rem', border: '1px solid' }} key={title}>
                        <img src={image} style={{ width: '25rem' }} alt='image-news'/>
                        <div className='card-body'>
                          <h5>{title}</h5>
                          <p className=''>{name}</p>
                          <p className=''>{create}</p>
                          <p className=''>{description}</p>
                        </div>
                      </div>
                  );
                })
              ) : (
              
              <div className="container">
                  <p className="text-center">Loading...</p>
              </div>
              
              )}
            </div>
          </div>
      </Container>
    )
  }   
}