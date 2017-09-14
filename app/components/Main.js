var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({

  render: function(){

    return(

      <div className="main-container">


        <div className="container">

          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">NYT-React</a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                   <Link to="/Search"><button className="btn btn-default">Search</button></Link>
                  <Link to="/Saved"><button className="btn btn-default">Saved</button></Link>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
          </div>

          {this.props.children}

        </div>
      </div>
    )
  }
});

module.exports = Main;