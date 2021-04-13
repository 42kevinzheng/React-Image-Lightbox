import React,{Component}from 'react';
import "./Images.css"
import { SRLWrapper } from 'simple-react-lightbox';
import { GridList,GridListTile,GridListTileBar } from '@material-ui/core';

class Images extends Component{
constructor(props) {
    super(props);
    this.state = {
        imageUrl: "",
        imageArray: [

        ]
    };
}

imageSubmit = (e) => {
    e.preventDefault();
    let imageArray = this.state.imageArray;
    imageArray.push(this.state.imageUrl)
    this.setState({ 
        imageArray:imageArray
    })
}

handelLinkChange = (e) =>{
    e.preventDefault();
    this.setState({
        imageUrl: e.target.value
    })
}


  render() {
    let imageArray=this.state.imageArray;
    const viewImage = imageArray.map((urll, index) => {
        return(
            <GridListTile  style={{flexGrow:'1'}} cols={(urll.width/1200/3).toFixed(0)}>
            <img className="singleImage" src = {urll} key={index} alt={urll}/>
            <GridListTileBar title={urll} subtitle={index}/>
            </GridListTile>
            
        )
    })

  return (
    <div className="Images">

        <form onSubmit={this.imageSubmit}>
            <input 
            type="text"
            placeholder="sumbit image"
            onChange={this.handelLinkChange}
            />
            <button type="Submit" className="submitButton"> Submit Image</button>
        </form>

        <SRLWrapper>
            <GridList cellHeight={375} cols={3}>
            {viewImage}
            </GridList>
        </SRLWrapper> 
        
    </div>
  );
}
}

export default Images;
