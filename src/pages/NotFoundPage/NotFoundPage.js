import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                
                <div class="alert alert-warning">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Title!</strong> Không tìm thấy trang...
                </div>
                
            </div>
        );
    }
}

export default HomePage;
