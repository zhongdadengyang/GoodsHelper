
var React = require('react');

var homePage = React.createClass({
    render: function() {
        return (
            <div>
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="hero-content text-center">
                                    <h1>Make · Believe</h1>
                                    <p className="intro">ph0ly.com - 让我们与众不同</p>
                                    <a href="#" className="btn btn-fill btn-large btn-margin-right">应用</a> <a href="#" className="btn btn-accent btn-large">关于ph0ly</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-arrow floating-arrow"><a href="#intro"><i className="fa fa-angle-down"></i></a></div>
                </section>
                <section className="intro section-padding" id="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 intro-feature">
                                <div className="intro-icon">
                                    <span data-icon="&#xe033;" className="icon"></span>
                                </div>
                                <div className="intro-content">
                                    <h5>应用</h5>
                                    <p>提供应用级解决方案.</p>
                                </div>
                            </div>
                            <div className="col-md-4 intro-feature">
                                <div className="intro-icon">
                                    <span data-icon="&#xe030;" className="icon"></span>
                                </div>
                                <div className="intro-content">
                                    <h5>产品</h5>
                                    <p>提供丰富的产品线.</p>
                                </div>
                            </div>
                            <div className="col-md-4 intro-feature">
                                <div className="intro-icon">
                                    <span data-icon="&#xe046;" className="icon"></span>
                                </div>
                                <div className="intro-content last">
                                    <h5>服务</h5>
                                    <p>提供常用服务.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = homePage;